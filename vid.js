$(document).ready(function() {
  setTimeout(function() {
    $("#logo").animate({"height":"120px"},1000);
    setTimeout(function(){
      $(".cell,#credits").animate({"opacity":"100"},4000);
    },2000)},2000);
  $('.cell').on('click', function() {
    var element = this.getElementsByTagName('video');
    var m = element[0].getAttribute('id');

    console.log(m);
    var v = document.getElementById(m);
    if (v.webkitRequestFullscreen) {
      v.className = "";
      v.webkitRequestFullscreen();
    }

    $("#" + m).on("ended", function() {
      this.webkitExitFullscreen();
      this.className = "hide";
    });

    // Detect fullscreen entered or exited for play state
    $("#" + m).bind('webkitfullscreenchange', function(e) {
    var state = document.webkitIsFullScreen;
    var event = state ? 'FullscreenOn' : 'FullscreenOff';
    if (event == 'FullscreenOn') {
      console.log('entered fullscreen, playing...')
      setTimeout(function() {v.play()},2000);
    } else {
      console.log('exited fullscreen, pausing...')
      this.className = "hide";
      v.pause();
    }
    });
  })
})
