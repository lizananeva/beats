const sections = $(".section");
const display = $(".maincontent");
const sideMenu = $(".fixed-menu");
const sideMenuItems = sideMenu.find(".fixed-menu__item");

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass("active");

const countSectionPosition = sectionEq => {
  const position = sectionEq * -100;

  if (isNaN(position)) {
    console.error("Передано неверное значение в countSectionPosition");

    return 0;
  }

  return position;
}

const changeSideMenuTheme = sectionEq => {
  const currentSection = sections.eq(sectionEq);
  const menuTheme = currentSection.attr("data-sidemenu-theme");

  const chessThemeClass = "fixed-menu--theme--chess";
  const wineThemeClass = "fixed-menu--theme--wine";

  if (menuTheme === "chess") {
    sideMenu.removeClass(wineThemeClass);
    sideMenu.addClass(chessThemeClass);
  } else if (menuTheme === "wine") {
    sideMenu.removeClass(chessThemeClass);
    sideMenu.addClass(wineThemeClass);
  } else {
    sideMenu.removeClass(chessThemeClass);
    sideMenu.removeClass(wineThemeClass);
  }
}

const resetActiveClass = (items, itemEq, activeClass) => {
  items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
}

const performTransition = sectionEq => {
  if (inScroll) return;

  inScroll = true;

  const position = countSectionPosition(sectionEq);
  const transitionOver = 1000;
  const mouseInertiaOver = 300;

  changeSideMenuTheme(sectionEq);
  display.css({
    transform: `translateY(${position}% )`
  });
  resetActiveClass(sections, sectionEq, "active");
  resetActiveClass(sideMenuItems, sectionEq, "fixed-menu__item--current");

  setTimeout(() => {
    inScroll = false;
  }, transitionOver + mouseInertiaOver);
}

const viewportScroller = () => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  return {
    next() {
      if (nextSection.length) {
        performTransition(nextSection.index());
      }
    },
    prev() {
      if (prevSection.length) {
        performTransition(prevSection.index());
      }
    }
  }
}

$(window).on("wheel", event => {
  const deltaY = event.originalEvent.deltaY;
  const scroller = viewportScroller();

  if (deltaY > 0) {
    scroller.next();
  }

  if (deltaY < 0) {
    scroller.prev();
  }
});

$(document).on("keydown", event => { // В chrome событие keydown не работает с window. В firefox и safari - работает.
  const tagName = event.target.tagName.toLowerCase();
  const userTypingInInputs = tagName === "input" || tagName === "textarea";
  const scroller = viewportScroller();

  if (userTypingInInputs) return;

  switch (event.key) {
    case "ArrowUp":
      scroller.prev();
      break;
    case "ArrowDown":
      scroller.next();
      break;
  }
});

$(".wrapper").on("touchmove", event => event.preventDefault());

$("[data-scroll-to]").on("click", event => {
  event.preventDefault();

  const $this = $(event.currentTarget);
  const target = $this.attr("data-scroll-to");
  const reqSection = $(`[data-section-id=${target}]`);

  performTransition(reqSection.index());
});

if (isMobile) {
  $("body").swipe({
    swipe: function(event, direction) {
     const scroller = viewportScroller();
     let scrollDirection = "";

     if (direction === "up") scrollDirection = "next";
     if (direction === "down") scrollDirection = "prev";

     scroller[scrollDirection]();
    }
  });
}
