/*  jQuery ready function. Then, specify a function to execute when the DOM is fully loaded.  */
$(document).ready(
  /* This is the function that will get executed after the DOM is fully loaded */
  function () {
    /* Next part handles hovering effect and submenu appearing */
    $('li').mouseenter(function () { //fade on hover
        $(this).fadeTo('fast', 0.25);
      });
    $('li').mouseleave(function () { //back to normal 
        $(this).fadeTo('fast', 1);
      });
    $('li').click(function () { /*background change when clicked*/
        $(this).css('background-color', 'purple');

      });
    $('li').click(function(){ //says "clicked!" when clicked
        $(this).text("Clicked!");
      });
    // $('a.visited.changed:after').click(function(){ //the clicked effects stay
    //     $(this).text("Clicked!");
    //   });
});