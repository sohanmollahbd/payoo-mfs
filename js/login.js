// from submit reloading the page 


// document.getElementById('button-login').addEventListener('click', function(){
   
// })


// step 1 : set event handler
document.getElementById('button-login').addEventListener('click', function(event){
   //step 2: prevent default behaviors (prevent reloading browsers)
   event.preventDefault();// vejal to beginners

   //step 3: get the phone number
   const phoneNumber = document.getElementById('phone-number').value;
   console.log(phoneNumber);
})