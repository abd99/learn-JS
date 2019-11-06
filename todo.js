// Create a button object and register a listener
let addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

// Another one!
let removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

// Get the object of the entire list
let ul = document.getElementById('list')

// Todo Object to store data
var todosObject = {
    names: []
}

// Load existing todos from localStorage
loadFromLocalStorage()

// function to add new tasks
function addItem() {
    // Get the input entered by the user
    let input = document.getElementById('input')
    let textValue = input.value
    // Create a textNode with the value entered by user
    let textNode = document.createTextNode(textValue)
    console.log(textNode);
    

    // Check if input is empty
    if (textValue === '') {

        // Create new element to show message
        newPara = document.createElement('p')
        newPara.textContent = 'Please enter an input'
        // Insert element before the input box
        input.insertAdjacentElement("beforebegin",newPara)
        setTimeout(() => {
            // Remove element after 5 seconds
            newPara.parentElement.removeChild(newPara)
        }, 5000);
        return

    } else {

        // Inserting the new todo into localStorage
        // Read JSONString from localStorage
        let todosJSONString = localStorage.getItem('todos')
        // Check if data exists or not
        if(todosJSONString != null)
            todosObject = JSON.parse(todosJSONString)
        //Append the new todo into the object 
        todosObject.names.push(textValue)
        console.log(todosObject);
        // Store new todoObject into localStorage in JSON String form
        localStorage.setItem('todos', JSON.stringify(todosObject))

        // Create a new list item
        let li = document.createElement('li')
        // Create a new checkbox
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')
        // Create a new label
        let label = document.createElement('label')

        // Add the things to view
        // Append the checkbox into the list item
        li.appendChild(checkbox)
        // Append the textNode into the label item
        label.appendChild(textNode)
        // Append the label into the list item
        li.appendChild(label)
        // Insert the new list item before the existing first (0th) list item in the ul
        ul.insertBefore(li, ul.childNodes[0])
        setTimeout(() => {
            // Show after a delay of 5 ms
            li.className = 'visual'
        }, 3);
    }
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

function loadFromLocalStorage() {
    // Get data from localStorage
    todosObject = JSON.parse(localStorage.getItem('todos'))
    // Get the todo from the localStorage
    todosObject.names.forEach((todoName) => {

        let textValue = todoName
        // Create a textNode with the value entered by user
        let textNode = document.createTextNode(textValue)
        console.log(textNode);
        
        // Create a new list item
        let li = document.createElement('li')
        // Create a new checkbox
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')
        // Create a new label
        let label = document.createElement('label')

        // Add the things to view
        // Append the checkbox into the list item
        li.appendChild(checkbox)
        // Append the textNode into the label item
        label.appendChild(textNode)
        // Append the label into the list item
        li.appendChild(label)
        // Insert the new list item before the existing first (0th) list item in the ul
        ul.insertBefore(li, ul.childNodes[0])
        setTimeout(() => {
            // Show after a delay of 5 ms
            li.className = 'visual'
        }, 3);
    
    });
}
