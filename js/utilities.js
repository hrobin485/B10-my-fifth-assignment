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



function addDateTime() {
    const newElement = document.createElement('div');
    const now = new Date();
    const dateTimeString = `Date and Time: ${now.toLocaleString()} (Bangladesh Standard Time)`;
    newElement.textContent = dateTimeString;
    newElement.classList.add('bg-gray-200', 'p-2', 'rounded', 'shadow-sm', 'text-gray-700');
    document.getElementById('history-container').appendChild(newElement);
  }

  document.getElementById('show-history').addEventListener('click', addDateTime);



  