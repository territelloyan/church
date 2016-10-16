$(document).ready(function() {
  var i = null;
  $("#body-wrap").mousemove(function() {
    clearTimeout(i);
    $("#overlay").fadeOut();
    i = setTimeout(function() {
      $("#overlay").fadeIn();
    }, 20000);
  })
})
