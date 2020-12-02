// Fetch the items from the JSON file 
function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    // fetch data.json file and change it to json
// .then(json => console.log(json)); 
    // this will show items:array(16)
    .then(json => json.items); 
     // this will return items in json console.log afer loadItem .then(item => { console.log(items)}) will show all list items array
}

// Update the list with the given items 
 function displayItems(items){
     const container = document.querySelector('.items'); 
     container.innerHTML = items.map(item => createHTMLString(item)).join(''); 
     // .join() creates and returns a new string by concatenating all of the elements in an array 
 }
// Create HTML list item fromt he given data item 
 function createHTMLString(item){
     return `
     <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
        <span class="item_description"> ${item.gender}, ${item.size}</span>
      </li>
     `
 }
// ******* MAIN ******
// Function that fetch data from data.json file, 
loadItems()

// AFTER loading data 
.then(items => {
    // console.log(items); 
    // will display all items in list from items array 
    
    displayItems(items); 
    // // render items to HTML 
    // setEventListeners(items)
    // // when clicked, filter items 

})

// if failed, display error message 
.catch(console.log)
