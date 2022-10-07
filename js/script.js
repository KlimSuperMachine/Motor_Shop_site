"use strict"

// Спойлер heder ========================================================
const navTitle = document.querySelector('.navigation__title');
const navList = document.querySelector('.navigation__list');

navTitle.addEventListener("click", (e) => {
   navTitle.classList.toggle('active');
   navList.classList.toggle('active');
});

// Слайдер ===============================================================

new Swiper('.products__slider', {
   //стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   //курсор перетаскивания
   grabCursor: true,
   //адаптив
   breakpoints: {
      320: {
         //количество слайдов для показа
         slidesPerView: 1,
         //количество пролистываемых слайдов
         slidesPerGroup: 1,
      },
      450: {
         spaceBetween: 10,
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
      767: {
         spaceBetween: 20,
         slidesPerView: 3,
         slidesPerGroup: 3,
      },
      1170: {
         spaceBetween: 30,
         slidesPerView: 4,
         slidesPerGroup: 4,
      },
   },
   //бесконечный слайдер
   loop: true,
   //скорость 
   speed: 800,

});