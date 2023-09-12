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

/*carousel testimoni*/
// $(".owl-carousel").owlCarousel({
//   autoplay: true,
//   autoplayhoverpause: true,
//   autoplaytimeout: 200,
//   items: 2,
//   nav: true,
//   navText:["<b>🢐</b>","<b>🢒</b>"],
//   loop: true,
//   responsive:{
//     0:{
//       items:1
//     },
//     600:{
//      items:1,
//     },
//     800:{
//       items:2,
//     },
//     1200:{
//       items:2,
//     }    
//   }
// });