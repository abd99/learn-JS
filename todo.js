// Create a button object and register a listener
let addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

// Another one!
let removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

// Get the object of the entire list
let ul = document.getElementById('list')


function addItem() {

}

// function to remove completed tasks
function removeItem() {
    // Get the array of list items
    let li = ul.children;
    
    // Iterate through list items
    for (let index = 0; index < li.length; index++) {                

        // Use while loop because if element is removed, the next one changes position
        // and it shouldn't get skipped from validating if checked
        // Check if current element exists and it is checked
        while (li[index] && li[index].children[0].checked) {  
            // Remove the current child   
            ul.removeChild(li[index])               
        }
    }
}
