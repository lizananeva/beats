const toggleFullScreenMenu = () => {
  const fullScreenMenu = $(".fullscreen-menu");

  fullScreenMenu.toggleClass("active");
}

$(".header__hamburger").on("click", event => {
  toggleFullScreenMenu();
  $("body").css("overflow", "hidden");
});

$(".fullscreen-menu__close").on("click", event => {
  toggleFullScreenMenu();
  $("body").css("overflow", "visible");
});
