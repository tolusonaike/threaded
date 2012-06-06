/*
Layout Name: Threaded HTML5 Blog Layout
Version: 1.0.5
Author: Tolu Sonaike
Author URI: http://www.tolusonaike.com/

*/


// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

    $('#switcher #blue').click(function() {
      $('html').css("background-image", "url(assets/img/blue.png)");  
    });
    
     $('#switcher #blue2').click(function() {
      $('html').css("background-image", "url(assets/img/woodsman-blue.png)");
    });
     
     $('#switcher #brown').click(function() {
      $('html').css("background-image", "url(assets/img/woodsman-brown.png)");
    });

});


/* optional triggers

$(window).load(function() {
});

$(window).resize(function() {
});

*/