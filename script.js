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
   $("body").keydown()
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

function keydown(event){
if (event.which === 38 || event.which=== 87) {
        $("#mario").css("top", $("#mario").offset().top - 40);
    //moves right
    } else if ((event.which === 40) || (event.which===83)) {
        $("#mario").css("top", $("#mario").offset().top+ 40);
   } else if (event.which === 37 || event.which===65) {
        $("#mario").css("left", $("#mario").offset().left - 40);
    //moves right 
    } else if (event.which === 39 || event.which===68) {
        $("#mario").css("left", $("#mario").offset().left+ 40);
    } else if(event.which === 38 || event.which===68){
        jump();
    } else{
        return;
    }
} 
});