const SLIDE_PILLS = 0,
  SLIDE_PATCH = 1,
  SLIDE_RING = 2,
  SLIDE_CYCLE = 3,
  SLIDE_PILLS_BG = "#BADFE7",
  SLIDE_PATCH_BG = "#C2EDCE",
  SLIDE_RING_BG = "#F6F6F2",
  SLIDE_CYCLE_BG = "#EFB7BA";

const btnSlides = document.querySelectorAll(".btn-slide");
const slides = document.querySelector("#slides");
const main = document.querySelector(".main");

const ionSlideTransitionStart = async function () {
  const index = await slides.getActiveIndex();
  switch (index) {
    case SLIDE_PILLS:
      main.style.backgroundColor = SLIDE_PILLS_BG;
      break;
    case SLIDE_PATCH:
      main.style.backgroundColor = SLIDE_PATCH_BG;
      break;
    case SLIDE_RING:
      main.style.backgroundColor = SLIDE_RING_BG;
      break;
    case SLIDE_CYCLE:
      main.style.backgroundColor = SLIDE_CYCLE_BG;
      break;
  }
};

const btnSlideClick = function (e) {
  const index = e.target.dataset.index;
  slides.slideTo(+index);
};

slides.addEventListener("ionSlideTransitionStart", ionSlideTransitionStart);
btnSlides.forEach((elem) => elem.addEventListener("click", btnSlideClick));
