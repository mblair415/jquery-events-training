console.log("Sanity Check: JS is working!");

/*
The solution doesn't work.  I don't know how to use setTimeOut.  It's 11:40
I woke up at 6:00am and all I've done today is code and travel to places
to do more coding.
*/

$(document).ready(function(){


})
var totalTime = 0;

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
  console.log(getHours() + ":" + getMinutes() + ":" + getSeconds());
}

function timer() {
  setTimeOut(function() {
    totalTime += 1;
  }, 1000)
}

timer();
