$(document).ready(function(){
  $('a[rel="gaSimCenter"]').colorbox({
    width: '75%',
    height: '70%',
    slideshow: true,
    slideshowSpeed: 2000,
    slideshowAuto: false,
    slideshowStart: 'Start Slide Show',
    slideshowStop: 'Stop Slide Show'
  });
    $('a[rel="gaSimCenterVideos"]').colorbox({
    iframe: true,
    innerWidth: 640,
    innerHeight: 390,
    current: 'Video {current} of {total}'
  });
});