(function ($) {
    "use strict";

    // Shipping address show hide
    $('.checkout #shipto').change(function () {
        if ($(this).is(':checked')) {
            $('.checkout .shipping-address').slideDown();
        } else {
            $('.checkout .shipping-address').slideUp();
        }
    });


    // Payment methods show hide
    $('.checkout .payment-method .custom-control-input').change(function () {
        if ($(this).prop('checked')) {
            var checkbox_id = $(this).attr('id');
            $('.checkout .payment-method .payment-content').slideUp();
            $('#' + checkbox_id + '-show').slideDown();
        }
    });
})(jQuery);


function validateForm() {
    // decalre variables
    let targetField1 = document.getElementById('firstNameField');
    let targetField2 = document.getElementById('lastNameField');
    var targetField3 = document.getElementById('email').value;
    var emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    let targetField4 = document.getElementById("mobileNumberField");

    // validate first  name
    if (targetField1.value.length === 0) {
        window.alert('You must enter your first name');
        targetField1.focus();
        return false;
    } // end if 
    else
        // validate last name
        if (targetField2.value.length === 0) {
            window.alert('You must enter your last name');
            targetField2.focus();
            return false;
        } // end if 
        /* else
       
        //validate email
            if (!(targetField3.match(emailCorrectPattern))) {
                alert("Please correct email address");
                
                email.value = '';

                targetField3.focus();

                targetField3.style.backgroundColor = 'yellow';
                return false;
            } //end if
            */
            if (targetField4.value.length === 0) {
                alert("Please enter your phone number");
                targetField.focus();
                // If the user hasn't completed the field, 
                // changes its background color to yellow
                targetField.style.background = "yellow";
                return false;
            }
            else {
                return true;
            }

}