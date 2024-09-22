// add money to the account
/*
S-1: add event handler
prevent page reload after form submit
s-2: get money to be added to the account balance
get the pin number

s-3: verify the pin number
*/



//step - 1: add the event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
   //prevent reload after from submit
   event.preventDefault();
   // get money to be added to the account balance
   const addMoneyInput = document.getElementById('input-add-money').value;

   //get the pin number
   const pinNumberInput = document.getElementById('input-pin-number').value;

   // step- 3: verify pin number 
      //wrong way to validate pin number

   if(pinNumberInput === '1234'){
      console.log('Adding money to your account');

      // step- 4: get the current balance
      const balance = document.getElementById('account-balance').innerText;
      //step-5: add addMoneyInput with balance

      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance)
      const newBalance = addMoneyNumber + balanceNumber;
      
      // step-6: update the new banlance to the UI/dom 
      document.getElementById('account-balance').innerText = newBalance;
   }
   else{
      alert('Failed to add money! Please, try again')
   }
});