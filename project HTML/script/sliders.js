// hero slider
const heroswiper = new Swiper('.hero-swiper', {
  // Default parameters
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  touchRatio: 0,
  spaceBetween: 0,
  autoplay: {
    delay: 2000,
  },
  speed: 3000,
});

// gallery slider
const galleryswiper = new Swiper('.gallery-swiper', {
  clickable: true,
  grid: {
    rows: 1
  },
  navigation: {
    nextEl: '.right-gallery__next',
    prevEl: '.right-gallery__prev'
  },
  pagination: {
    el: '.right-gallery__swiper-pagination',
    type: 'fraction',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  speed: 500,
  simulateTouch: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 10,
    },
    539: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 10,
    },
    540: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34,
    },
    1190: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34,
    },
    1330: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerColumn: 2,
      grid: {
        rows: 1
      },
      slidesPerGroup: 3,
    }
  }
});

// events slider
const eventSlider = new Swiper(".event__slider", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".event__button-next",
    prevEl: ".event__button-prev"
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  simulateTouch: true,
  slideToClickedSlide: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 27,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    }
  }
});

// partners slider
const partnersSlider = new Swiper(".partners__slider", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".partners__button-next",
    prevEl: ".partners__button-prev"
  },
  simulateTouch: true,
  slideToClickedSlide: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 32,
    },
    992: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    }
  }
});
