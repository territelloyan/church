$(document).ready(function() {
  // Animate the content on page load.
  // setTimeout(function() {
  //   $("#logo").animate({"height":"120px"},1000);
  //   setTimeout(function(){
  //     $(".cell,#credits").animate({"opacity":"100"},2000);
  //   },2000)},2000);

  var i = null;
  $("#body-wrap").mousemove(function() {
    clearTimeout(i);
    $("#overlay").fadeOut();
    i = setTimeout(function() {
      $("#overlay").fadeIn();
    }, 5000);
  })
})
