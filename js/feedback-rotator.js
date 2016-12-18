"use strict";

var feedback = document.getElementsByClassName("feedback")[0];
var content = feedback.getElementsByClassName("feedback__content-wrapper");
var rightArrow = feedback.getElementsByClassName("feedback-nav__right")[0];
var leftArrow = feedback.getElementsByClassName("feedback-nav__left")[0];
var i = 0,
    j = content.length,
    time = 4000;

function showNextSlide() {
  if (i == (j - 1)) {
    content[i].classList.add("feedback__content-wrapper--hidden");
    i = 0;
    content[i].classList.remove("feedback__content-wrapper--hidden");
    content[i].classList.add("feedback__content-wrapper--visible");
  } else if (i < (j - 1)) {
    content[i].classList.add("feedback__content-wrapper--hidden");
    content[(i + 1)].classList.remove("feedback__content-wrapper--hidden");
    content[(i + 1)].classList.add("feedback__content-wrapper--visible");
    i += 1;
  };
};

function showPreviousSlide() {
  if (i == 0) {
    content[i].classList.add("feedback__content-wrapper--hidden");
    i = (j - 1);
    content[i].classList.remove("feedback__content-wrapper--hidden");
  } else if (i <= (j - 1)) {
    content[i].classList.add("feedback__content-wrapper--hidden");
    content[(i - 1)].classList.remove("feedback__content-wrapper--hidden");
    i -= 1;
  };
};

var timerId = setInterval(showNextSlide, time);

rightArrow.addEventListener("click", function() {
  clearInterval(timerId);
  showNextSlide();
});

leftArrow.addEventListener("click", function() {
  clearInterval(timerId);
  showPreviousSlide();
});
