$(document).ready(function() {
  $('.cell').on('click', function() {
    var element = this.getElementsByTagName('video');
    var m = element[0].getAttribute('id');

    console.log(m);
    var v = document.getElementById(m);
    if (v.webkitRequestFullscreen) {
      v.className = "";
      v.webkitRequestFullscreen();
      v.play();
    }
    // v.play();

    $("#" + m).on("ended", function() {
      this.webkitExitFullscreen();
      this.className = "hide";
    });

    // Listen for exiting fullscreen, hide video element.
    $("#" + m).on("webkitfullscreenchange", function(e) {
      this.className = "hide";
      // v.pause();
    })
  })
})
