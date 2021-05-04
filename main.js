'use strict';

/*
  1. navbar 구현해야 될 것
    1-1. 화면 맨 위에서 scroll시 navbar backgroun-color 변경, font-color 변경
    1-2. 해당 메뉴 클릭시, 해당 위치로 이동 --> 스크롤 이벤트
  2. scrolling되면 home을 조금씩 투명하게 만들기 --> fade
  3. 화면을 scrolling하면 오른쪽 하단에 화살표 버튼을 만들어서 화면의 어느 영역에서든지 해당 버튼을 클릭하면, 맨 위로 올라가는 이벤트 적용하기
  4. 프로젝트에서 카테고리 버튼을 누르면 원하는 아이템 보여주기
    전체적인 애니메이션이 일어나고, 필터링된 아이템들만 보여야 된다.
  5. navbar에서 메뉴 클릭 시 해당 메뉴 background-color 변경, border 변경
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

/* html data를 이용해서 프로젝트 필터링하기 */
/* work__categories안에 있는 버튼이 클릭되면, 버튼이 갖고있는 data-filter값에 따라서 그 data-type에 해당하는 요소만 보여주기 */
/* Project */
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

let handleViewProject = (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  if (filter === null) {
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode; // target의 nodeName이 BUTTON이면 그대로 이 타겟을 사용하고, 아니면 span태그라는 얘기니까 그 타겟의 부모 노드를 쓴다.
  target.classList.add('selected');

  projectContainer.classList.add('animation-out');

  setTimeout(() => {
    // project마다 돌면서 project들을 안보이게 하기
    projects.forEach((project) => {
      // 전부다 이거나 filter와 data-type이 일치하면
      if (filter === '*' || filter === project.dataset.type) {
        // 기본적으로는 다 보여지는데 클릭 할 때 filter가 맞으면 안 보여지는 클래스는 빼기
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('animation-out');
  }, 300);
}

/* menu, project click border */
let handleClickBorder = (e) => {
  // 클릭된 .categories__btn / navbar__menu__item 

}

/* scrollIntoView 기능 따로 함수로 정의 */
let scrollIntoView = (selector) => {
  const scrollContactMe = document.querySelector(selector);
  scrollContactMe.scrollIntoView({ 'behavior': 'smooth' });
}

navbarMenu.addEventListener('click', handleMoveMenu);
contactBtn.addEventListener('click', handleMoveContact);
workBtnContainer.addEventListener('click', handleViewProject);