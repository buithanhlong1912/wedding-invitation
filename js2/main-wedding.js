// AOS

//AOS ANIMATION
AOS.init();
// SCROLLREVEA
var swiper1 = new Swiper(".album-slide", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
  },
});

// FANCY BOX
Fancybox.bind("[data-fancybox]", {});

//AUDIO
$(".toggleAudio").on("click", function () {
  let audio = $("#audio")[0];
  let icon = $(this).find("i");
  if (audio.paused) {
    icon.removeClass("ri-volume-mute-fill");
    icon.toggleClass("ri-volume-up-fill");
    audio.play();
  } else {
    icon.removeClass("ri-volume-up-fill");
    icon.toggleClass("ri-volume-mute-fill");
    audio.pause();
  }
});
