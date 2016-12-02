console.log("Sanity Check: JS is working!");

/*
The solution doesn't work.  I don't know how to use setTimeOut.  It's 11:40
I woke up at 6:00am and all I've done today is code and travel to places
to do more coding.
started on this again on the ferry.
*/

$(document).ready(function(){
  var totalTime = 0;
  var counting = false;

  $(window).on("keypress", function handleKeypress(event){
    if (!counting) {
      counting = true;
      timer();
    } else {
      counting = false;
    }

    function getSeconds(){
      var seconds = totalTime % 60;

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      return seconds;
    }

    function getMinutes(){
      var minutes = (totalTime/60) % 60;

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      return minutes;
    }

    function getHours() {
      var hours = ((totalTime/60)/60) % 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
    }

    function printTime() {
      return getHours() + ":" + getMinutes() + ":" + getSeconds();
    }

    function timer() {
      setInterval(function() {
        totalTime += 1;
        $("#total-time").text(printTime());
      }, 1000)
    }

  })
})
