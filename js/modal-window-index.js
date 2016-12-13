"use strict";

var modal = document.getElementsByClassName("modal-window")[0];
var modalClose = modal.getElementsByClassName("modal-window__submit-button")[0];
var bestItemBtn = document.getElementsByClassName("best-item__btn")[0];
var modalCloseIcon = modal.getElementsByClassName("modal-window__close-icon")[0];
var pageWrapper = document.querySelector("div");

function showModal() {
  modal.style.display = "block";
  pageWrapper.classList.add("page-opacified");
}

function hideModal() {
  modal.style.display = "none";
  pageWrapper.classList.remove("page-opacified");
}

bestItemBtn.addEventListener('click', showModal);

modalClose.addEventListener('click', hideModal);

modalCloseIcon.addEventListener('click', hideModal);

document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
  if (e.keyCode == "27") {
    hideModal();
  };
};
