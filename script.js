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

// Pop-up Video
document.querySelectorAll('.video-container img').forEach(vid => {
  vid.onclick = () =>{
    let vid_src = $(vid).attr('src');
    let vid_src_2 = vid_src.slice(0, vid_src.length-6).replace('vi', 'embed').replace('img', 'www');

    $(".header-navbar").removeClass("sticky-top");
    document.querySelector('.popup-video').style.display = 'block';
    document.querySelector('.popup-video iframe').src = vid_src_2;
  }
});

document.querySelector('.popup-video span').onclick = () =>{
  document.querySelector('.popup-video').style.display = 'none';
  $(".header-navbar").addClass("sticky-top");
}