$( function() {
    $( "#accordion" ).accordion();
  } );

  $('.owl-carousel').owlCarousel({
    autoHeight: true,
    loop: true,
    margin: 0,
    nav: true,
    //navText: [ '', '' ],
    autoplay: true,
    autoplayTimeout: 2000,
    slideBy: 5,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 3,
        },
        992: {
            items: 5,
        }
    }
});