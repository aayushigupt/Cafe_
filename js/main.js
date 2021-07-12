$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 8,
        loop: true,
        margin: 20,
        autoplay: true,
      reverse: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 3000,
        autoplayHoverPause: false

    });

});
//Alternate Direction
$(document).ready(function () {
    var owl = $('.owl-carousel2');
    owl.owlCarousel({
        items: 8,
        rtl: true,
        loop: true,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 3000,
        autoplayHoverPause: false

    });

});