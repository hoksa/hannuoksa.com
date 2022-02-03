import anime from "animejs";

const introAnimation = (function () {
  const sphereEl = document.querySelector(".anim-sphere");
  const sectionEl = document.querySelectorAll(".anim-section");

  let introAnimationTimeline = anime
    .timeline({
      loop: false,
      autoplay: false,
      easing: "easeInOutSine",
      duration: 500,
    })
    .add(
      {
        targets: sphereEl,
        clipPath: ["circle(0)", "circle(50%)"],
        easing: "easeInExpo",
        duration: 500,
      },
      500
    )
    .add(
      {
        targets: sphereEl,
        opacity: 0.6,
        clipPath: "circle(48%)",
      },
      1200
    )
    .add(
      {
        targets: sectionEl,
        opacity: [0, 1],
        easing: "easeOutSine",
        delay: anime.stagger(150),
        duration: 750,
      },
      "-=100"
    );

  return introAnimationTimeline;
})();

window.onload = introAnimation.play();
