// show the cash out form
document.getElementById('btn-show-cash-Out').addEventListener('click',function(){
   // show cash out btn clicked
   document.getElementById('cash-out-form').classList.remove('hidden');

   // hide the add money form 
   document.getElementById('add-money-form').classList.add('hidden');
})


// show the add money form and hide the cash out form
document.getElementById('btn-show-add-money').addEventListener('click',function(){
   document.getElementById('cash-out-form').classList.add('hidden');
   document.getElementById('add-money-form').classList.remove('hidden');

})