'use strict';

const smallMenu = document.querySelector('#small_menu');
const menuIcon = document.querySelector('#menu_icon');
const headerNav = document.querySelector('#nav_header');
const headerNavList = document.querySelector('#header_list');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('close-menu-btn');
  smallMenu.classList.toggle('show-menu');
  headerNav.classList.toggle('nav-page--header');
  headerNavList.classList.toggle('vertical-menu');
});
