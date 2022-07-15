const findReviewByAlias = alias => {
  return $(".reviews__item").filter((index, item) => {
    return $(item).attr("data-show") === alias
  });
}

$(".reviews__button").on("click", event => {
  const $this = $(event.currentTarget);
  const currentDot = $this.closest(".reviews__dot");
  const target = $this.attr("data-pick");
  const reviewToShow = findReviewByAlias(target);

  currentDot.addClass("active").siblings().removeClass("active");
  reviewToShow.addClass("active").siblings().removeClass("active");
});
