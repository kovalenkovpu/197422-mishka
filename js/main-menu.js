"use strict";

var toggle = document.getElementsByClassName("main-menu__toggle")[0];
var main_menu = document.getElementsByClassName("main-menu main-menu--visible")[0];
var menu_items = document.getElementsByClassName("main-menu-items")[0];

toggle.onclick = function() {
  main_menu.className = "main-menu";
  menu_items.style.display = "none";
  toggle.style.left = "104px";
  toggle.style.top = "30px";
};
