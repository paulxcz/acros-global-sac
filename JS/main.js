const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    effect: 'slide',
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

  //--------------------------------------------
  const galleryThumbs = new Swiper('.gallery-thumbs', {
    containerModifierClass: 'swiper-container-2',
    SlideClass: 'swiper-slide-2',
    slideActiveClass: 'swiper-slide-2-active',
    spaceBetween: 10,
    slidesPerView: 4,
    loop: false,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
  });
  const galleryTop = new Swiper('.gallery-top', {
    containerModifierClass: 'swiper-container-2',
    SlideClass: 'swiper-slide-2',
    slideActiveClass: 'swiper-slide-2-active',
    spaceBetween: 10,
    loop: false,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  /*BOTON FUNCIONAL*/
  document.querySelector('.menu-btn').addEventListener('click',()=> { 
    document.querySelector('.nav-menu').classList.toggle('show')
});