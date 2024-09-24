document.getElementById('donate-now-btn-2').addEventListener('click',function(){
    const donateInput = getInputFieldValueById('donation-amount-2')
    const cardTotal = getTextFieldValueById('total-donations-2')
    const mainAmount = getTextFieldValueById('main-amount')
    if(donateInput > 0 && donateInput < mainAmount ){
     const newTotal = donateInput + cardTotal;
     const newMainTotal = mainAmount - donateInput;
    document.getElementById('total-donations-2').innerText =newTotal;
    document.getElementById('main-amount').innerText =newMainTotal;
   
    // add history
    const p = document.createElement('p');
    p.innerText = `${donateInput}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
    p.classList.add('bg-green-500','mb-6', 'text-white', 'p-4', 'rounded', 'shadow-lg', 'hover:bg-green-700');
    document.getElementById('history-container').appendChild(p);
    
}
 else{
    alert('failed to donate money.please input write amount.')
}  
}) ; 