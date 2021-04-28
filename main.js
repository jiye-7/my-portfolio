'use strict';

/*
  1. navbar 구현해야 될 것
    1-1. 화면 맨 위에서 scroll시 navbar backgroun-color 변경, font-color 변경
    1-2. 해당 메뉴 클릭시, 해당 위치로 이동 --> 스크롤 이벤트
*/

const navbar = document.querySelector('#navbar');
const navbarMenu = document.querySelector('.navbar__menu');
const menuContact = document.querySelector('.menu__contact');

const work = document.querySelector('#work');

/* Make navbar transparent when it is on the top */
document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const menuY = navbar.getBoundingClientRect().height;

  if (scrollY > menuY) {
    navbar.classList.add('navbar--dark');
    // navbar.style.backgroundColor = 'pink';
    // navbar.style.width = '100%';
  } else {
    navbar.classList.remove('navbar--dark');
    // navbar.style.backgroundColor = 'transparent';
  }
});

/* Handle scrolling when tapping on the navbar menu */
let handleMoveMenu = (e) => {
  e.preventDefault();
  const menuLi = e.target;
  console.log(menuLi);

  if (menuLi.classList.contains('navbar__menu__item')) { //menuLi.nodeName === 'LI'
    let menuPosition = menuLi.dataset.link;
    let target = document.querySelector(`${menuPosition}`);
    console.log(target);
    target.scrollIntoView({ 'behavior': 'smooth' });
  }
}

navbarMenu.addEventListener('click', handleMoveMenu);
navbarMenu.addEventListener('click', handleMoveMenu);