$(document).ready(function(){
    AOS.init({
        duration: 1000,
    })
});
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 3000,
    speedAsDuration: true
});

// offcanvas
$(document).ready(function() {
    var fixHeight = function() {
      $('.navbar-nav').css(
        'max-height',
        document.documentElement.clientHeight - 150
      );
    };
    fixHeight();
    $(window).resize(function() {
      fixHeight();
    });
    $('.navbar .navbar-toggler').on('click', function() {
      fixHeight();
    });
    $('.navbar-toggler, .overlay').on('click', function() {
      $('.mobileMenu, .overlay').toggleClass('open');
    });
  });
  