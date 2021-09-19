(function ($) {
    "use strict";
  
    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });

    
})(jQuery);


function validateForm() {
    // decalre variables
    let nameBooking = document.getElementsById('name');
    var emailBooking = document.getElementById('email');
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    let mobileBooking = document.getElementById('mobile');
    let dateBooking = document.getElementByName('date');
    let timeBooking = document.getElementByName('time');
    let guestBooking = document.getElementById("guest");



 // validate name
    if (nameBooking.value.length === 0) {
        window.alert('Please enter your name');
        nameBooking.focus();
        return false;
    }  
    
     //validate email address
     else if (!emailBooking.value.match(emailPattern)) {    
        window.alert("Please correct email address");
        // emailBooking=null;
        emailBooking.focus();
      //  emailBooking.style.backgroundColor = 'yellow';
        return false;
    }   

       //validate mobile no. 
   else if  (mobileBooking.value.length === 0) {
    alert("Please enter your phone number");
    mobileBooking.focus();
    // If the user hasn't completed the field, changes its background color to yellow
    //mobileBooking.style.background = "yellow";
    return false;
}

   //validate delivery date  
   else if (dateBooking.value.length === 0) { 
    window.alert('Please select your booking date');
    dateBooking.focus();
    return false;
}
//validate delivery time  
else if (timeBooking.value.length === 0) { 
    window.alert('Please select your booking time');
    timeBooking.focus();
    return false;
}
//validate guest number 
else if (guestBooking.selectedIndex === 0) { 
    window.alert('Please select guest number');
    guestBooking.focus();
    return false;
}
else {
    return true;
}


}