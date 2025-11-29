window.initializeSwiper = () => {
    console.log("Inicializando Swiper...");
    setTimeout(() => {
        new Swiper('.hero-swiper', {
            loop: true,
            autoplay: { delay: 3000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            effect: 'fade'
        });
    }, 100); // 100ms de espera
};
