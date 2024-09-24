function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};

function getTextFieldValueById(id){
    const inputValue = document.getElementById(id).innerText ;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};

function showSectionById(id){
    document.getElementById('all-card').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');

};





  