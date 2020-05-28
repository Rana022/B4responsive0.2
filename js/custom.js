$(document).ready(function(){
    AOS.init({
        duration: 1000,
    })
});
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 3000,
    speedAsDuration: true
});