      // card-1
document.getElementById('donate-now-btn').addEventListener('click',function(){
      const donateInput = getInputFieldValueById('donation-amount')
      const cardTotal = getTextFieldValueById('total-donations')
      const mainAmount = getTextFieldValueById('main-amount')
      if(donateInput > 0 && donateInput < mainAmount ){
       const newTotal = donateInput + cardTotal;
       const newMainTotal = mainAmount - donateInput;
      document.getElementById('total-donations').innerText =newTotal;
      document.getElementById('main-amount').innerText =newMainTotal;
      }
   else{
      alert('failed to donate money.please input write amount.')
}  
}) ;    
      
      
      
      
      
      





