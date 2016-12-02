console.log("Sanity Check: JS is working!");

// $(document).ready(function(){
//
//   $('span').on('click', function handleClick(even) {
//     var buttonText = $(this).text() +
//       $('ul').append('<li>' + buttonText + '</li>')
//   })
//
// })


$(document).ready(function(){

  $("span").on("click", function handleClick(event){
    var buttonText = $(this).text() + " Clicked at: " + Date.now();
    $("ul").append("<li>" + buttonText + "</li>")
  })

})
