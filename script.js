/* global $ */

function jump() {
    
}

$(document).ready(function() {

   $('#jump').mousedown(function() {
      $('#mario').css('bottom', '175px');
      $('#coin').hide();
   });
   
   var count = 1;
   
    $('#jump').mouseup(function() {
      $('#mario').css('bottom', '60px');
      $('#coin').show();
      $('#count').text(count++);
   });

   $("body").keydown(function(event) { 
       console.log(event)
      if(event.keyCode == 37) { // left
        $("#game").animate({
          backgroundPosition: "+=980"
        });
      }
      else if(event.keyCode == 39) { // right
        $("#game").animate({
          backgroundPosition: "-=980"
        });
      } else if(event.keyCode == 49) {
          jump();
      }
    });
});
