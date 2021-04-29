'use strict';

/*
  1. navbar 구현해야 될 것
    1-1. 화면 맨 위에서 scroll시 navbar backgroun-color 변경, font-color 변경
    1-2. 해당 메뉴 클릭시, 해당 위치로 이동 --> 스크롤 이벤트
  2. scrolling되면 home을 조금씩 투명하게 만들기 --> fade
  3. 화면을 scrolling하면 오르쪽 하단에 화살표 버튼을 만들어서 화면의 어느 영역에서든지 해당 버튼을 클릭하면, 맨 위로 올라가는 이벤트 적용하기
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

  // another anwser
  /* if (menuLi.classList.contains('navbar__menu__item')) { //menuLi.nodeName === 'LI'
      let menuPosition = menuLi.dataset.link;
      let target = document.querySelector(`${menuPosition}`);
      console.log(target);
      target.scrollIntoView({ 'behavior': 'smooth' });
    } */
}

/* Handle click on "contact me" button on home */
const handleMoveContact = (e) => {
  scrollIntoView('#contact');
}

/* Make home slowly fade to transparent as the window scrolls */
const home = document.querySelector('.home__container');
const homeHeigth = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  // console.log(1 - window.scrollY / homeHeigth); // homeHeigth: 712, window.scrollY: 0 --> 0/800 --> 0 ==> 1 - 0 = 1, opacity = 1;
  home.style.opacity = 1 - window.scrollY / homeHeigth;
});

/* Show "arrow up" button when scrolling down */
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeigth / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

/* Handle click on th "arror up" button */
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

/* scrollIntoView 기능 따로 함수로 정의 */
let scrollIntoView = (selector) => {
  const scrollContactMe = document.querySelector(selector);
  scrollContactMe.scrollIntoView({ 'behavior': 'smooth' });
}

navbarMenu.addEventListener('click', handleMoveMenu);
contactBtn.addEventListener('click', handleMoveContact);