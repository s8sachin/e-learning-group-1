// Wait for the DOM to be ready
$(document).ready(function(){
  $(function() {

    $("form[name='registration']").validate({

      rules: {

        firstname: "required",
        lastname: "required",
        email: {
          required: true,

          email: true
        },
        password: {
          required: true,
          minlength: 8
        },
        cnfpassword: {
          required: true,
          minlength: 8
        }

      },
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long"
        },
        cnfpassword: {
          required: "Please confirm a password",
          minlength: "Your password must be at least 8 characters long"
        },
        email: "Please enter a valid email address"
      },

      submitHandler: function(form) {
        form.submit();
      }
    });
  });
// function checkPasswordMatch() {
//     debugger;
//     var password = $("#password").val();
//     var confirmPassword = $("#cnpassword").val();
//         debugger;
//     if (password != confirmPassword){
//         $("#divCheckPasswordMatch").html("Passwords do not match!");
//       }
//     else{
//         $("#divCheckPasswordMatch").html("Passwords match.");
//       }
// }
$("#cnpassword").keyup(function() {
  var password = $("#password").val();
  $("#divCheckPasswordMatch").html(password == $(this).val() ? "Passwords match." : "Passwords do not match!");
});

(function ($) {
  $.toggleShowPassword = function (options) {
    var settings = $.extend({
      field: "#password",
      control: "#toggle_show_password",
    }, options);

    var control = $(settings.control);
    var field = $(settings.field)

    control.bind('click', function () {
      if (control.is(':checked')) {
        field.attr('type', 'text');
      } else {
        field.attr('type', 'password');
      }
    })
  };
}(jQuery));

//Here how to call above plugin from everywhere in your application document body
$.toggleShowPassword({
  field: '#password',
  control: '#test2'
});
});