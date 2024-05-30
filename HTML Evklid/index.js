let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let classButton = menu.querySelector('.nav__close');
let menuLinks = menu.querySelectorAll('.nav__link');


burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

  classButton.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })

  menuLinks.forEach(function (element) {
    element.addEventListener('click', function () {

      burger.classList.remove('burger--active');

      menu.classList.remove('header__nav--active');

      document.body.classList.remove('stop-scroll');
    })

});


const searchBtn = document.querySelector('.header__btn');
const searchModal = document.querySelector('.header__search');
const searchCloseBtn = document.querySelector('.header__form--closed');

searchBtn.addEventListener('click', () => {
  searchModal.classList.add('header__search--opened');
});

searchCloseBtn.addEventListener('click', () => {
  searchModal.classList.remove('header__search--opened');
});


const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	slidesPerGroup: 1,

  loop: true,

	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  }
});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});
