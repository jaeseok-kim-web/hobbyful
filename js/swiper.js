new Swiper('.swiper1', {
    navigation: {
        nextEl : '.swiper-button-next', 
		prevEl : '.swiper-button-prev', 
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    autoplay: {
        delay: 3000,
    },
});
new Swiper('.swiper2', {
    slidesPerView : 4,
    spaceBetween : 30,
    loopFillGroupWidthBlank : true,
    loop : true,   
    navigation: {
        nextEl : '.swiper-button-next', 
		prevEl : '.swiper-button-prev', 
    },
});
new Swiper('.swiper3', {
    slidesPerView : 4,
    spaceBetween : 30,
    loopFillGroupWidthBlank : true,
    loop : true, 
    navigation: {
        nextEl : '.swiper-button-next', 
		prevEl : '.swiper-button-prev', 
    },
});

new Swiper('.swiper4', {
    slidesPerView : 4,
    spaceBetween : 30,
    loopFillGroupWidthBlank : true,
    loop : true, 
    navigation: {
        nextEl : '.swiper-button-next', 
		prevEl : '.swiper-button-prev', 
    },
});