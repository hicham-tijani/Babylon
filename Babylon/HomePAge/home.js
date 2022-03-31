var actionsheet_trigger = document.querySelectorAll(".sc-actionsheet-trigger");
var overlay = document.querySelectorAll('.sc-overlay');
var actionsheet_close = document.querySelectorAll(".sc-actionsheet-close");
actionsheet_trigger.forEach(
  function(cbox){
  cbox.addEventListener("click", function(){
    var open_this = cbox.getAttribute("goto");
    console.log(open_this);
    document.getElementById(open_this).classList.add("sc-show");
  });
  }
)
overlay.forEach(
  function(this_overlay){
    this_overlay.addEventListener("click", function(){
      this_overlay.parentElement.classList.remove('sc-show');
    });
  }
)



function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar")

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 700);
}