// Defining an array
// myTodos = ['Prepare for AAD', 'LCO JS', 'Work on MSBTESG']


// Defining an array of objects
const todos = [{
    title: 'Prepare for AAD',
    isDone: false
},{
    title: 'LCO JS',
    isDone: false
},{
    title: 'Work on MSBTESG',
    isDone: false
}]

// Writing a function to find the element
const findTodo = function (localTodos, title) {
    // Using the findIndex function of arrays
    const index = localTodos.findIndex(function(todo, index) {
        // Returning true if the title is found
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    if (index == -1) {
        return 'Element not found'
    }
    // Returning the found element
    return localTodos[index]
}

// Calling the function
console.log(findTodo(todos, 'Work on MSBTESG'));
