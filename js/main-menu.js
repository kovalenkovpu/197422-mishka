"use strict";

var toggleWrapper = document.getElementsByClassName("main-menu__toggle-wrapper")[0];
var toggle = document.getElementsByClassName("main-menu__toggle")[0];
var menu = document.getElementsByClassName("main-menu")[0];
var menuList = menu.getElementsByClassName("main-menu__list")[0];
var menuHeight = getComputedStyle(menu).height;

function showMenu() {
  menuList.classList.remove("main-menu__list--invisible");
  menuList.classList.add("main-menu__list--visible");
  toggle.classList.add("main-menu__toggle--crossed");
  menu.style.height = menuHeight;
};

function hideMenu() {
  menuList.classList.remove("main-menu__list--visible");
  menuList.classList.add("main-menu__list--invisible");
  toggle.classList.remove("main-menu__toggle--crossed");
  menu.style.height = "0";
};

toggleWrapper.addEventListener('click', function(){
  if (menuList.classList.contains("main-menu__list--visible")) {
    hideMenu();
  } else {
    showMenu();
  };
});
