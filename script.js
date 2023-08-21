// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});

// var carouselWidth = $(".carousel-inner")[0].scrollWidth;

// var cardWidth = $(".carousel-item").width();

// var scrollPosition = 0;

// var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//   interval: false,
//   wrap: false,
// });

// $(".carousel-control-next").on("click", function () {
//   if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
//     scrollPosition += cardWidth;  //update scroll position
//     $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
//   }
// });

// $(".carousel-control-prev").on("click", function () {
//   if (scrollPosition > 0) {
//     scrollPosition -= cardWidth;
//     $(".carousel-inner").animate(
//       { scrollLeft: scrollPosition },
//       600
//     );
//   }
// });

// var multipleCardCarousel = document.querySelector(
//   "#carouselExampleControls"
// );
// if (window.matchMedia("(min-width: 768px)").matches) {
//   //rest of the code
//   var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//     interval: false
//   });
// } else {
//   $(multipleCardCarousel).addClass("slide");
// }

// var multipleCardCarousel = document.querySelector(
//   "#carouselExampleControls"
// );
// if (window.matchMedia("(min-width: 768px)").matches) {
//   var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//     interval: false,
//   });
//   var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//   var cardWidth = $(".carousel-item").width();
//   var scrollPosition = 0;
//   $("#carouselExampleControls .carousel-control-next").on("click", function () {
//     if (scrollPosition < carouselWidth - cardWidth * 4) {
//       scrollPosition += cardWidth;
//       $("#carouselExampleControls .carousel-inner").animate(
//         { scrollLeft: scrollPosition },
//         600
//       );
//     }
//   });
//   $("#carouselExampleControls .carousel-control-prev").on("click", function () {
//     if (scrollPosition > 0) {
//       scrollPosition -= cardWidth;
//       $("#carouselExampleControls .carousel-inner").animate(
//         { scrollLeft: scrollPosition },
//         600
//       );
//     }
//   });
// } else {
//   $(multipleCardCarousel).addClass("slide");
// }

$(".btn-comment").click(function(){
  let el = $(this).parent().parent().next().next();
  
  $(el).slideToggle();
});

/*var div = document.getElementById('comment');
var display = 0;

function hideShow(){
  if(display === 1)
  {
    div.style.display = 'block';
    display = 0;
  }
  else{
    div.style.display = 'none';
    display = 1;
  }
}

*/