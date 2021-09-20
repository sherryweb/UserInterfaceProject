
/*************************** jQuery for ship address part ***************************/
(function ($) {
    "use strict";

    // Shipping address show hide function
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

/*************************** get data from order page and caculate price ***************************/
window.addEventListener('load', () => {
    const subValue = localStorage.getItem('subtotalPassing');
    document.getElementById('subTotalCheckout').innerHTML = subValue;
    var tax=0;
    var total=0;
    var subTotal=subValue.replace(/[^0-9.-]+/g,"");
    const TAX_RATE=0.15;
    var shippingValue=5;
    tax=(subTotal*TAX_RATE).toFixed(2);
    total=(parseFloat(subTotal)+parseFloat(tax)+shippingValue).toFixed(2);
    document.getElementsByClassName("taxValue")[0].innerText = "$" + tax;
    document.getElementsByClassName("shippingValue")[0].innerText = "$" + shippingValue;   
    document.getElementsByClassName("grandtotalValue")[0].innerText = "$" + total;
});


/*************************** validate input part ***************************/
function validateCheckingForm() {
    // decalre variables
    var fnameBilling = document.getElementById('firstNameBilling');
    var lnameBilling = document.getElementById('lastNameBilling');
    var emailBilling = document.getElementById('emailBilling');
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var mobileBilling = document.getElementById("mobileNumberBilling");
    var addressBilling = document.getElementById("addressBilling");
    var cityBilling = document.getElementById("cityBilling");
    var pcodeBilling = document.getElementById("postalcodeBilling");
    var paymentOption = document.getElementsByName('payment');
    var namePayment = document.getElementById('cc-name');
    var numberPayment = document.getElementById('cc-number');
    var eDatePayment = document.getElementById('cc-expiration');
    var cvvPayment = document.getElementById('cc-cvv');
    var deliveryOption = document.getElementsByName('delivery');
    var selectedDate = document.getElementById("dateinput");
    var selectedTime = document.getElementById("timeinput");

    // validate first  name
    if (fnameBilling.value.length === 0) {
        window.alert('Please enter your first name');
        fnameBilling.focus();
        return false;
    }
    // validate last name
    else if (lnameBilling.value.length === 0) {
        window.alert('Please enter your last name');
        lnameBilling.focus();
        return false;

    }
    //validate email address
    else if (!emailBilling.value.match(emailPattern)) {
        window.alert("Please correct email address");
        // emailBilling=null;
        emailBilling.focus();
        //  emailBilling.style.backgroundColor = 'yellow';
        return false;
    }
    //validate mobile no. 
    else if (mobileBilling.value.length === 0) {
        alert("Please enter your phone number");
        mobileBilling.focus();
        // If the user hasn't completed the field, changes its background color to yellow
        //mobileBilling.style.background = "yellow";
        return false;
    }

    //validate address 
    else if (addressBilling.value.length === 0) {
        window.alert('Please enter your address');
        addressBilling.focus();
        return false;
    }
    //validate city         

    else if (cityBilling.selectedIndex === 0) {
        alert("Please select a city.");
        cityBilling.focus();
        // If the user hasn't completed the field, 
        // changes its background color to yellow
        // cityBilling.style.backgroundColor = "yellow";
        return false;
    }
    //validate postal code       
    else if (pcodeBilling.value.length === 0) {
        window.alert('Please enter your postal code');
        pcodeBilling.focus();
        return false;
    }
    //validate payment method radio button  
    else if (!(paymentOption[0].checked || paymentOption[1].checked)) {
        alert("Please select your payment method");
        return false;
    }

    //validate payment-card-name  
    else if (namePayment.value.length === 0) {
        window.alert('Please enter name on your card');
        namePayment.focus();
        return false;
    }

    //validate payment-card-number
    else if (numberPayment.value.length === 0) {
        window.alert('Please enter your card number');
        numberPayment.focus();
        return false;
    }
    //validate payment-card-expiradate
    else if (eDatePayment.value.length === 0) {
        window.alert('Please enter expiration date on your card');
        eDatePayment.focus();
        return false;
    }
    //validate payment-card-cvv
    else if (cvvPayment.value.length === 0) {
        window.alert('Please enter your cvv number');
        cvvPayment.focus();
        return false;
    }
    //validate delivery method radio button
    else if (!(deliveryOption[0].checked || deliveryOption[1].checked)) {
        alert("Please select your delivery method");
        return false;
    }

    //validate delivery date  
    else if (selectedDate.value == "") {
        alert("Please select your delivery date");
        selectedDate.focus();
        return false;
    }
    //validate delivery time  
    else if (selectedTime.value == "") {
        alert("Please select your delivery time");
        selectedTime.focus();
        return false;
    }
    else {
        return true;
    }
}