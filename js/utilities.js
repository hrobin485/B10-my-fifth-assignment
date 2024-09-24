function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const inputValue = document.getElementById(id).innerText ;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}