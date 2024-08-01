let $next = $("#next");
let $prev = $("#prev");
let $carousel = $(".carousel");
let $items = $(".carousel__item");
let countItem = $items.length;
let active = 1;
let other_1 = null;
let other_2 = null;

$next.on("click", () => {
  $carousel.removeClass("prev").addClass("next");
  active = active + 1 >= countItem ? 0 : active + 1;
  other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
  other_2 = active + 1 >= countItem ? 0 : active + 1;
  changeSlider();
});

$prev.on("click", () => {
  $carousel.removeClass("next").addClass("prev");
  active = active - 1 < 0 ? countItem - 1 : active - 1;
  other_1 = active + 1 >= countItem ? 0 : active + 1;
  other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
  changeSlider();
});

const changeSlider = () => {
  let $itemOldActive = $(".carousel__item.active");
  $itemOldActive.removeClass("active");

  let $itemOldOther_1 = $(".carousel__item.other_1");
  $itemOldOther_1.removeClass("other_1");

  let $itemOldOther_2 = $(".carousel__item.other_2");
  $itemOldOther_2.removeClass("other_2");

  $items.each(function () {
    $(this).find(".carousel__image img").css("animation", "none");
    void this.offsetWidth; // Force reflow
    $(this).find(".carousel__image img").css("animation", "");
  });

  $items.eq(active).addClass("active");
  $items.eq(other_1).addClass("other_1");
  $items.eq(other_2).addClass("other_2");

  clearInterval(autoPlay);
  autoPlay = setInterval(() => {
    $next.click();
  }, 5000);
};

let autoPlay = setInterval(() => {
  $next.click();
}, 5000);
