/*var carouselWidth = $(".carousel-inner")[0].scrollWidth;

var cardWidth = $(".carousel-item").width();

var scrollPosition = 0;

var carousel = new bootstrap.Carousel(multipleCardCarousel, {
  interval: false,
  wrap: false,
});

$(".carousel-control-next").on("click", function () {
  if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
    scrollPosition += cardWidth;  //update scroll position
    $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
  }
});

$(".carousel-control-prev").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    $(".carousel-inner").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
});

var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  //rest of the code
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}*/

$(document).ready(function() {

// Gets the video src from the data-src on each button

var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);

  
  
// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");

})
  


// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
})  
  
// document ready  
});

/*carousel testimoni*/
$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 200,
  items: 2,
  nav: true,
  navText:["<b>🢐</b>","<b>🢒</b>"],
  loop: true,
  responsive:{
    0:{
      items:1
    },
    600:{
     items:1,
    },
    800:{
      items:2,
    },
    1200:{
      items:2,
    }    
  }
});


