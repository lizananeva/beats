const hamburgerButton = document.querySelector(".header__hamburger");
const closeButton = document.querySelector(".overlay__close");
const overlay = document.querySelector(".overlay");
const body = document.body;

const toggleFullScreenMenu = () => {
  const activeClass = `${overlay.classList[0]}--active`;

  overlay.classList.toggle(activeClass);
}

hamburgerButton.addEventListener("click", event => {
  toggleFullScreenMenu();
  body.style.overflow = "hidden";
});

closeButton.addEventListener("click", event => {
  toggleFullScreenMenu();
  body.style.overflow = "visible";
});
