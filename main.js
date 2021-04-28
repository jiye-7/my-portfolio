'use strict';

/*
  1. navbar 구현해야 될 것
    해당 메뉴 클릭시, 해당 위치로 이동 --> 스크롤 이벤트

*/

const navbar = document.querySelector('#navbar');
const menuNavbar = document.querySelector('.navbar__menu');
const menus = document.querySelectorAll('.navbar__menu__item');
const menuHome = document.querySelector('.menu__home');
const menuAbout = document.querySelector('.menu__about');
const menuSkills = document.querySelector('.menu__skills');
const menuWork = document.querySelector('.menu__work');
const menuTestimonial = document.querySelector('.menu__testimonial');
const menuContact = document.querySelector('.menu__contact');

const work = document.querySelector('#work');

// Make navbar transparent when it is on the top
document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const menuY = navbar.getBoundingClientRect().height;
  console.log(scrollY);
  console.log(menuY);

  if (scrollY > menuY) {
    navbar.classList.add('navbar--dark');
    // navbar.style.backgroundColor = 'pink';
    // navbar.style.width = '100%';
  } else {
    navbar.classList.remove('navbar--dark');
    // navbar.style.backgroundColor = 'transparent';
  }
});