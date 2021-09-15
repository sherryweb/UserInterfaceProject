(function ($) {
  "use strict";

     // Shipping address show hide
     $('.checkout #shipto').change(function () {
      if($(this).is(':checked')) {
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


