
filterSelection("all");

function filterSelection(c) {
 var x, i;
  x = document.getElementsByClassName("column");
  debugger;
 if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
 RemoveClass(x[i], "show");
   if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
 }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  debugger;
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
$(document).ready(function(){
  filterSelection('all');

    // $("#im1").on(function(){
       // $("#t1").show();
   // });
    // $("#jav").onclick(function(){
    //     $("#jav").show();
    //   });
    //  $("#ne").onclick(function(){
    //     $("#ne").show();
    //   });
    //   $("#rub").onclick(function(){
    //     $("rub").show();
    //   });
    
    $("#t1").hide();
    
     $("#im1").hover(function(){
      
      $("#t1").toggle();

    });

     $("#t2").hide();
      $("#im2").hover(function(){
      
      $("#t2").toggle();
      });
      $("#t3").hide();
      $("#im3").hover(function(){
    
      $("#t3").toggle();
      });
      $("#t4").hide();
      $("#im4").hover(function(){
    
      $("#t4").toggle();
      });
      $("#t5").hide();
      $("#im5").hover(function(){
    
      $("#t5").toggle();
      });
      $("#t6").hide();
      $("#im6").hover(function(){
    
      $("#t6").toggle();
      });
      $("#t7").hide();
      $("#im7").hover(function(){
    
      $("#t7").toggle();
      });
      $("#t8").hide();
      $("#im8").hover(function(){
    
      $("#t8").toggle();
      });
      $("#t9").hide();
      $("#im9").hover(function(){
    
      $("#t9").toggle();
      });
//       $('.like-btn').on('click', function() {
//       $(this).toggleClass('is-active');
//       });
//       $('.minus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());
 
//     if (value &amp;gt; 1) {
//         value = value - 1;
//     } else {
//         value = 0;
//     }
 
//   $input.val(value);
 
// });
 
// $('.plus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());
 
//     if (value &amp;lt; 100) {
//         value = value + 1;
//     } else {
//         value =100;
//     }
 
//     $input.val(value);
// });

  $("#product").hide();


$(".plus").click(function(){
  $("#product").show();
  var a=$("#product").val();
  a++;
  $("#product").val(a);
});
  $(".minus").click(function(){
   $("#product").show(); 
  var b=$("#product").val();
  if(b<=0)
  {
    return false;
  }
  b--;
  $("#product").val(b);
});
});
