const burger = document.getElementById('burger');
const menu = document.getElementById('m-menu');
const tab = document.querySelectorAll('.tab');
const cast = document.querySelectorAll('.cast');


for (i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', function () {
    for (let i = 0; i < tab.length; i++) {
      tab[i].classList.toggle('active');
      cast[i].classList.toggle('visible');
    }
  })
}

function openMenu() {
  menu.classList.toggle('is-open');
}

burger.addEventListener('click', openMenu);

window.onload = function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: ".button-next",
        }
      },
    },

    // If we need pagination


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
};





