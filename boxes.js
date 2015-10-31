$(function() {
  console.log("hello world");

  // Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"
  $secretBox = $('#secretBox');
  $secretBox.css("background-color", "white");

  $secretBox.append("<h1>secret box!</h1>").css("color", "black");

  // Find all child divs of the first row. Set the class for each div to boxType3.

  $('#row1').children().addClass('boxType3');

  // Make the last box in the last row disappear.

  $('#row4 div:last-child').hide();

  //Change all red boxes to white.

  // $('.boxType1').css("background-color", "white");

  // Get the first two divs in the second row. Take away all styling from the divs.

  $('#row2 div:lt(2)').css("background", "none");
  // $('#row2 div').slice(0,2).css("background", "none");

  // Get all divs inside the container that are not row divs and are not the secret box div.
  // Set the width of the divs to 2 pixels.

  // $('#container div:not(.row, #secretBox)').width('2px');
  // $('div').not('.row').not($secretBox).not('#container').width('2px');

  // Add an on click handler to the container div. Console log the x and y position of the click.
  $('#container').on("click", function(e) {
    console.log("X coordinate is " + e.clientX +" and Y coordinate is " + e.clientY);
  });

  // Add links inside all red box divs that take the user to galvanize.
  // Then add an on click handler that alerts the user that you can never leave the page.
  // Make sure the user won't leave the page after the alert!

  $('.boxType1').wrap("<a href='http://www.galvanize.com'></a>").on("click", function () {
    alert("you can never leave the page!!! MWAHAAHAAAAA");
  });

  $(window).bind('beforeunload', function() {
    return 'umm... nope!';
  });

  // For all box divs, add a click handler that adds an image of a cute puppy to the box.
  // If the image is clicked again, remove the cute puppy.

  $('.box').on("click", function () {
    if ($(this).children().length === 0) {
      $(this).append("<img width='100%' height='100%' src='http://practicalveterinarytips.com/wp-content/uploads/2013/04/mean-chihuahua.jpeg' />");
    } else {
      $(this).empty();
    }
  });

  // Write a click handler on the conatainer div.
  // The click handler should turn the container background to black and the background of the
  // original div that was clicked to white. If the user original div that was clicked happened
  // to be the container div, change the background of the container div to lime green.
  // You should not use any selectors for this exercise.
  // You can do it completely with what is given to you in the event callback.

  $('#container').on("click", function(e) {
    if (e.target === this) {
      $(this).css("background", "#99FF00");
    } else {
      $(this).css("background", "black");
      $(e.target).css("background-color", "white");
      }
  });

});

