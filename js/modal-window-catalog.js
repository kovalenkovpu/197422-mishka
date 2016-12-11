"use strict";

var modal = document.getElementsByClassName("modal-window")[0];
var modalClose = modal.getElementsByClassName("modal-window__submit-button")[0];
var modalCloseIcon = modal.getElementsByClassName("modal-window__close-icon")[0];
var catalogOrderBtn = document.getElementsByClassName("info-block__btn")[0];

catalogOrderBtn.addEventListener('click', function(){
  modal.style.display = "block";
});

modalClose.addEventListener('click', function(){
  modal.style.display = "none";
});

modalCloseIcon.addEventListener('click', function(){
  modal.style.display = "none";
});

document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
  if (e.keyCode == "27") {
    modal.style.display = "none";
  };
};
