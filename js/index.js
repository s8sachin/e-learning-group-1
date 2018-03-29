$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
  $("#myBtn1").click(function(){
    $("#myModal1").modal();
  });
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
       inlength: "Your password must be at least 8 characters long"
     },
     email: "Please enter a valid email address"
   },
   submitHandler: function(form) {
    form.submit();
  }
});
  $("#cnpassword").keyup(function() {
    var password = $("#password").val();
    $("#divCheckPasswordMatch").html(password == $(this).val() ? "Passwords match." : "Passwords do not match!");
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  $('.scrollToTop').click(function(){
    $('html,body').animate({scrollTop:0},2000);
    return false;
  });
});
