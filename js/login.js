// from submit reloading the page 


// document.getElementById('button-login').addEventListener('click', function(){
   
// })


// step 1 : set event handler
document.getElementById('button-login').addEventListener('click', function(event){
   //step 2: prevent default behaviors (prevent reloading browsers)
   event.preventDefault();// vejal to beginners

   //step 3: get the phone number and pin 
   const phoneNumber = document.getElementById('phone-number').value;
   const pinNumber = document.getElementById('input-pin').value;
   console.log(phoneNumber, pinNumber);

   // step-4: validate phone and Pin
        // this is temporary. You should not do like this.
        if(phoneNumber=== '5' && pinNumber === '1234'){
            // step -5: allow user to use the website

            console.log('you are logged in');
            window.location.href = './home.html';
        }
        else{
            alert('Wrong phone number or Pin');
        }
})