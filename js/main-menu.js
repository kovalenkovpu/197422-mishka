"use strict";

var toggle = document.getElementsByClassName("main-menu__toggle")[0];
var main_menu = document.getElementsByClassName("main-menu main-menu--visible")[0];
var menu_items = document.getElementsByClassName("main-menu-items")[0];
var menu_item = document.getElementsByClassName("main-menu-item__title");

toggle.onclick = function() {
  if (main_menu.className == "main-menu main-menu--visible") {
    for (let i = 0; i < (menu_item.length); i++) {
      menu_item[i].style.display = "none";
    };

    main_menu.style.width = "100%";
    toggle.style.background = "url(../img/icon-menu-open.svg) no-repeat top right";
    main_menu.classList.remove("main-menu--visible");
    main_menu.classList.add("main-menu--invisible");

  } else if (main_menu.className == "main-menu main-menu--invisible") {
    for (let j = 0; j < (menu_item.length); j++) {
      menu_item[j].style.display = "block";
    };

    main_menu.style.width = "100%";
    toggle.style.background = "url(../img/icon-menu-close.svg) no-repeat top right";
    main_menu.classList.remove("main-menu--invisible");
    main_menu.classList.add("main-menu--visible");
  }
};
