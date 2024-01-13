// eslint-disable-next-line import/no-extraneous-dependencies
import Swiper, { Autoplay, Navigation } from 'swiper';

const sliderMarquee = document.querySelector('.slider-marquee');
if (sliderMarquee) {
  const speed = parseInt(sliderMarquee.dataset.sliderSpeed, 10);
  // eslint-disable-next-line no-unused-vars
  const marqueeSlider = new Swiper('.slider-marquee', {
    modules: [Autoplay],
    wrapperClass: 'slider-marquee-wrapper',
    slideClass: 'slider-marquee-slide',
    centeredSlides: true,
    speed,
    autoplay: {
      delay: 5,
    },
    slidesPerView: 'auto',
    loop: true,
    watchSlidesProgress: true,
    grabCursor: true,
  });
}

const defaultSliders = document.querySelectorAll('.slider-default');
defaultSliders.forEach(slider => {
  if (slider) {
    const slidesAmount = slider.dataset.slidesPerView;

    // eslint-disable-next-line no-unused-vars
    const defaultSLider = new Swiper(slider, {
      modules: [Autoplay, Navigation],
      wrapperClass: 'slider-default-wrapper',
      slideClass: 'slider-default-slide',
      spaceBetween: 20,
      speed: 900,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      slidesPerView: slidesAmount,
      grabCursor: true,
      navigation: {
        prevEl: slider.parentNode.querySelector('.prev-slide'),
        nextEl: slider.parentNode.querySelector('.next-slide'),
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 1.4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: slidesAmount,
          spaceBetween: 20,
        },
      },
    });
  }
});
