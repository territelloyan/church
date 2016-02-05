$(document).ready(function() {
  $('#vid').on('click', function() {
    var v = document.getElementById("vid1");
    if (v.webkitRequestFullscreen) {
      v.className = "";
      v.webkitRequestFullscreen();
    }
    v.play();
  })
  $("#vid1").on("ended", function() {
    this.webkitExitFullscreen();
    this.className = "hide";
  })
})
