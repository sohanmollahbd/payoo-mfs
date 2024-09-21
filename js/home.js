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
   
});