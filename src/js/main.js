import anime from "animejs";

const introAnimation = (function () {
  const spinnerEl = document.querySelectorAll(".anim-spinner");

  let introAnimationTimeline = anime
    .timeline({
      loop: false,
      autoplay: false,
    })
    .add({
      targets: spinnerEl,
      duration: 0,
      begin: function (anim) {
        console.log("hello");
      },
    });

  return introAnimationTimeline;
})();

window.onload = introAnimation.play();
