function mouseOver() {
  document.getElementById("para").style.color = "red";
}
function mouseOut() {
  document.getElementById("para").style.color = "black";
}


$(document).ready(function(){
  $(".myBtn").click(function(){
    $("#myModal").modal();
  });
  $(".registration").validate({

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
});
