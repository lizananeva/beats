const isLowDesktopResolution = screenWidth => screenWidth <= 830;

const mesureWidth = item => {
  let itemWidth = 0;

  const screenWidth = $(window).width();
  const container = item.closest(".colors__accordeon");
  const triggers = container.find(".colors__trigger");
  const triggersWidth = triggers.width() * triggers.length;

  const textContainer = item.find(".colors__container");
  const paddingLeft = parseInt(textContainer.css("padding-left"));
  const paddingRight = parseInt(textContainer.css("padding-right"));

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const isLowResolution = isLowDesktopResolution(screenWidth);

  //
  const isPhone = window.matchMedia("(max-width: 480px)").matches;
  const oneTriggerWidth = triggers.width();
  //

  isMobile || isLowResolution
    ? itemWidth = screenWidth - triggersWidth
    : itemWidth = 524;

  //
  if (isPhone) {
    itemWidth = screenWidth - oneTriggerWidth;
  }
  //

  return {
    item: itemWidth,
    text: itemWidth - paddingLeft - paddingRight
  }
}

const openItem = item => {
  const hiddenContent = item.find(".colors__inner");
  const reqWidth = mesureWidth(item );
  const textBlock = item.find(".colors__desc");

  //
  const isPhone = window.matchMedia("(max-width: 480px)").matches;
  if (isPhone) {
    item.css("position", "absolute");
    item.css("z-index", "10");
  }
  //

  item.addClass("active");
  hiddenContent.width(reqWidth.item);
  textBlock.width(reqWidth.text);
}

const closeEveryItem = container => {
  const items = container.find(".colors__item");
  const inners = items.find('.colors__inner');

  const isPhone = window.matchMedia("(max-width: 480px)").matches;
  if (isPhone) {
    items.css("position", "unset");
    items.css("z-index", "unset");
  }

  items.removeClass("active");
  inners.width(0);
}

const isActive = element => element.hasClass("active");

$(".colors__trigger").on("click", event => {
  const $this = $(event.currentTarget);
  const container = $this.closest(".colors__accordeon");
  const currentItem = $this.closest(".colors__item");

  if (isActive(currentItem)) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem(currentItem);
  }
});
