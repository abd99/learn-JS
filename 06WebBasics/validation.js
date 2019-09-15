function myValidation() {
    let inputValue = document.getElementById('myform').value;
    const newPara = document.createElement('p')
    if (isNaN(inputValue) || inputValue < 1 || inputValue > 20) {
        console.log("Not a valid input");
        newPara.textContent = 'Not a valid input'
    } else {
        console.log("This input is okay");
        newPara.textContent = 'This input is okay'
    }
    document.querySelector('body').appendChild(newPara)
}