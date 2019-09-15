// Define function to handle button click
function myValidation() {
    // Get the value of textbox
    let inputValue = document.getElementById('myform').value;
    // Create new element to show result
    const newPara = document.createElement('p')
    // Validate input
    if (isNaN(inputValue) || inputValue < 1 || inputValue > 20) {
        console.log("Not a valid input");
        newPara.textContent = 'Not a valid input'
    } else {
        console.log("This input is okay");
        newPara.textContent = 'This input is okay'
    }
    // Show result
    document.querySelector('body').appendChild(newPara)
}

// Register Event Listener for new form
document.querySelector('.login').addEventListener('submit', (event) => {
    // Stop browser from doing default tasks
    event.preventDefault();
    // Create new element to show result
    const loginResult = document.createElement('p')
    // Get the input from the textfields
    loginResult.textContent = event.target.username.value;
    loginResult.textContent += event.target.realname.value;
    // Check if passwords don't match
    if (event.target.password.value !== event.target.password2.value) {
        // Add new element saying that passwords do not match
        const newPara = document.createElement('p')
        newPara.textContent = 'Passwords do not match'
        document.querySelector('body').appendChild(newPara)
    } else {
        // Clear the textfields
        event.target.username.value = '';
        event.target.realname.value = '';
        event.target.password.value = '';
        event.target.password2.value = '';
        // Show the result
        document.querySelector('body').appendChild(loginResult)
    }
})