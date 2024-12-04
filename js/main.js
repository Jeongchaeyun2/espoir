$(".ham").click(function () {
  $(".mgnb_wrap").animate({
    left: "0"
  });
});

$(".mgnb_close").click(function () {
  $(".mgnb_wrap").animate({
    left: "100%"
  });
});

$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
});

$(".gnb>li").hover(function () {
  $(this).find(".depth2").stop().slideToggle();
});

const banner_list = new Swiper('.banner_list', {
  loop: true, //기본값 false, 슬라이드 반복
  navigation: {
    nextEl: ".swiper-button-next", //다음
    prevEl: ".swiper-button-prev", //이전
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const prd_list = new Swiper('.prd_list', {
  // slidesPerView: 4, /* 한 슬라이드에 보여줄 개수 */
  centeredSlides: true, //활성화 된 슬라이드가 가운데
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
  // 반응형 슬라이드 옵션
  breakpoints: {
    0: { //min-width 0-768픽셀 보이는 개수
      slidesPerView: 1.5,
    },
    768: {//768픽셀 이상에서 보이는 개수
      slidesPerView: 2.5,
    },
    1200: { //1200 이상에서 4개
      slidesPerView: 4,
    },
  },
});