"use strict";

var toggle_wrapper = document.getElementsByClassName("main-menu__toggle-wrapper")[0];
var toggle = document.getElementsByClassName("main-menu__toggle")[0];
var main_menu = document.getElementsByClassName("main-menu")[0];
var menu_list = document.getElementsByClassName("main-menu__list")[0];


toggle_wrapper.onclick = function() {
  if (menu_list.className == "main-menu__list main-menu__list--visible") {
    menu_list.classList.remove("main-menu__list--visible");
    menu_list.classList.add("main-menu__list--invisible");
    toggle.classList.remove("main-menu__toggle--crossed");
    main_menu.style.height = "0";
  } else if (menu_list.className == "main-menu__list main-menu__list--invisible") {
    menu_list.classList.remove("main-menu__list--invisible");
    menu_list.classList.add("main-menu__list--visible");
    toggle.classList.add("main-menu__toggle--crossed");
    main_menu.style.height = "320px";
  }
}
