console.log("Sanity Check: JS is working!");

var rickRolled = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function(){

  $("#time").text( Date.now() );

  $("form").on("submit", function handleClick(event){
    event.preventDefault();
    ("body").append(rickRolled);
  });

})
