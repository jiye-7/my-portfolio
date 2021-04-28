'use strict';

/*
  1. navbar 구현해야 될 것
    1-1. 화면 맨 위에서 scroll시 navbar backgroun-color 변경, font-color 변경
    1-2. 해당 메뉴 클릭시, 해당 위치로 이동 --> 스크롤 이벤트
*/

const navbar = document.querySelector('#navbar');
const navbarMenu = document.querySelector('.navbar__menu');
const contactBtn = document.querySelector('.home__contact');

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
const handleMoveMenu = (e) => {
  const menuLi = e.target;
  const link = menuLi.dataset.link;

  if (link === null || link === undefined) {
    return;
  }
  // 이동하고자하는 section의 id를 잘 받아왔 때 실행
  scrollIntoView(link);
  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({ 'behavior': 'smooth' });

  /* if (menuLi.classList.contains('navbar__menu__item')) { //menuLi.nodeName === 'LI'
      let menuPosition = menuLi.dataset.link;
      let target = document.querySelector(`${menuPosition}`);
      console.log(target);
      target.scrollIntoView({ 'behavior': 'smooth' });
    } */
}

/* Handle click on "contact me" button on home */
const handleMoveContact = (e) => {
  scrollIntoView('#contact')
}

let scrollIntoView = (selector) => {
  const scrollContactMe = document.querySelector(selector);
  scrollContactMe.scrollIntoView({ 'behavior': 'smooth' });
}

navbarMenu.addEventListener('click', handleMoveMenu);
contactBtn.addEventListener('click', handleMoveContact);