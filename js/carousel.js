$(document).ready(function(){
  $('.headphones__list').slick({
    arrows: false
  });
});

$(".headphones__arrow--next").on("click", event => {
  const slider = $('.headphones__list');
  slider.slick("slickNext");
});

$(".headphones__arrow--prev").on("click", event => {
  const slider = $('.headphones__list');
  slider.slick("slickPrev");
});
