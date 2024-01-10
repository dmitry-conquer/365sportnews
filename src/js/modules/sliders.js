// eslint-disable-next-line import/no-extraneous-dependencies
import Swiper, { Autoplay } from 'swiper';

if (document.querySelector('.slider-marquee')) {
  const marqueeSlider = new Swiper('.slider-marquee', {
    modules: [Autoplay],
    wrapperClass: 'slider-marquee-wrapper',
    slideClass: 'slider-marquee-slide',
    centeredSlides: true,
    speed: 4000,
    autoplay: {
      delay: 5,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    slidesPerView: "auto",
    loop: true,
    watchSlidesProgress: true,
    grabCursor: true

    // Breakpoints
    /*
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 0,
            },
            576: {
               slidesPerView: 1,
               spaceBetween: 0,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
         },
         */

    // Events
    /*
         on: {
            // - - - - - - - [custom fraction] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            init: function (swiper) {
              const allSliders = document.querySelector('.slider__all');
              allSliders.innerHTML = swiper.slides.length;
              console.log(allSliders.innerHTML);
            },
            slideChange: function (swiper) {
              const currentSlide = document.querySelector('.slider__current');
              currentSlide.innerHTML = swiper.realIndex + 1;
              console.log(currentSlide.innerHTML);
            },


            // - - - - - - - [tabs] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            init: function(swiper) {
               const captions = document.querySelectorAll('.captions-courses__item');
               captions.forEach((item, index) => {
                  item.addEventListener('click', function(e) {
                     swiper.slideTo(index, 800)
                  });
               })
            },
            slideChange: function(swiper) {
               const captions = document.querySelectorAll('.captions-courses__item');
               captions.forEach((item) => {
                  item.classList.remove('_active');
               })
               captions[swiper.realIndex].classList.add('_active');
            },
         },
            */
  });
  console.log(marqueeSlider);

  // stop slider on mouseenter
  // defaultSlider.el.addEventListener('mouseenter', () => {
  //    defaultSlider.autoplay.stop();
  // });
  // defaultSlider.el.addEventListener('mouseleave', () => {
  //    defaultSlider.autoplay.start();
  // });
}
