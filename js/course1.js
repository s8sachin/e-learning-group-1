debugger;
filterSelection("all")
debugger;
function filterSelection(c) {
 var x, i;
  x = document.getElementsByClassName("column");
 if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
 w3RemoveClass(x[i], "show");
   if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
 }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
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
    debugger;
    $("#t1").hide();
    debugger;
     $("#im1").hover(function(){
      debugger;
      $("#t1").toggle();

    });

     $("#t2").hide();
      $("#im2").hover(function(){
      debugger;
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
});