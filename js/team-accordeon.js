const openItem = trigger => {
  const item = trigger.closest(".team__item");
  const inner = item.find(".team__inner");
  const innerBlock = inner.find(".team__inner-block");
  const reqHeight = innerBlock.height();

  item.addClass("active");
  inner.height(reqHeight);
  trigger.addClass("team__trigger--inverted");
}

const closeEveryItem = container => {
  const items = container.find('.team__item');
  const inners = items.find('.team__inner');
  const trigger = items.find('.team__trigger');

  items.removeClass("active");
  inners.height(0);
  trigger.removeClass("team__trigger--inverted");
}

const isActive = element => element.hasClass("active");

$(".team__trigger").on("click", (event) => {
  const $this = $(event.currentTarget);
  const container = $this.closest(".team__accordeon");
  const currentItem = $this.closest(".team__item");

  if (isActive(currentItem)) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }
});
