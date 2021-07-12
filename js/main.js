$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        autoplay: true,
      reverse: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 4000,
        
        dots: false,
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
        autoplayHoverPause:true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 30,
        

    });

});

$('.owl-carousel .item').on('mouseHover',function(e){
    $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
  })
  $('.owl-carousel .item').on('mouseleave',function(e){
    $(this).closest('.owl-carousel').trigger('play.owl.autoplay',[500]);
  })

