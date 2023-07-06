$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
  });

  let ham = document.querySelector(".hamberger");
  let time = document.querySelector(".times");
  let mobile = document.querySelector(".mobile-nav");

  ham.addEventListener("click", function () {
    mobile.classList.add("open");
  });

  time.addEventListener("click", function () {
    mobile.classList.remove("open");
  });
});
