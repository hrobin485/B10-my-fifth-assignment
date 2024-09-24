document.getElementById('donate-now-btn-1').addEventListener('click',function(){
    const donateInput = getInputFieldValueById('donation-amount-1')
    const cardTotal = getTextFieldValueById('total-donations-1')
    const mainAmount = getTextFieldValueById('main-amount')
    if(donateInput > 0 && donateInput < mainAmount ){
     const newTotal = donateInput + cardTotal;
     const newMainTotal = mainAmount - donateInput;
    document.getElementById('total-donations-1').innerText =newTotal;
    document.getElementById('main-amount').innerText =newMainTotal;
    }
 else{
    alert('failed to donate money.please input write amount.')
}  
}) ;    