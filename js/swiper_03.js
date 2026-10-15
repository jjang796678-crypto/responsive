// 비주얼 스와이퍼
const visualSw = new Swiper(".visualSwiper" , { 
loop:true,
autoplay: {
  delay: 2500,
  disableOnInteraction: false,
},
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
}) ; 
// product list
const proSw = new Swiper(".proSwiper" , { 
    slidesPerView: 3,
    spaceBetween: 30,
    
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
})