const gallary = new Swiper('.gallary', {
    
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    initialSlide: 0,
    spaceBetween: 48,
  
    // If we need pagination
    pagination: {
      el: '.pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },

    breakpoints: {
      1620: {slidesPerView: 2},
      570: {slidesPerView: 2},
      562: {slidesPerView: 1},
      200: {slidesPerView: 1},
    },

  
  });