document.getElementById('donate-now-btn-2').addEventListener('click',function(){
    const donateInput = getInputFieldValueById('donation-amount-2')
    const cardTotal = getTextFieldValueById('total-donations-2')
    const mainAmount = getTextFieldValueById('main-amount')
    if(donateInput > 0 && donateInput < mainAmount ){
     const newTotal = donateInput + cardTotal;
     const newMainTotal = mainAmount - donateInput;
    document.getElementById('total-donations-2').innerText =newTotal;
    document.getElementById('main-amount').innerText =newMainTotal;
    }
 else{
    alert('failed to donate money.please input write amount.')
}  
}) ; 