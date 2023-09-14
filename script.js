// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
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