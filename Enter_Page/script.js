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

actionsheet_close.forEach(
  function(close){
    close.addEventListener("click", function(e){
      e.preventDefault();
      this.closest('.sc-actionsheet-container').classList.remove('sc-show');
    })
  }
)