import anime from "animejs";

const introAnimation = (function () {
  let introAnimationTimeline = anime
    .timeline({
      loop: false,
      autoplay: false,
    })
    .add({
      targets: ".anim-spinner",
      duration: 1,
      begin: function (anim) {
        anim.animatables.forEach(function (a) {
          console.log(a.target.children.length);
          anime({
            targets: a.target.children,
            opacity: [0.01, 1],
            duration: 1500,
            delay: function (el, i, l) {
              return (500 / l) * i;
            },
          });
        });
      },
    })
    .add({
      targets: "h1",
      duration: 1000,
      opacity: [0.001, 1],
    });

  return introAnimationTimeline;
})();

window.onload = introAnimation.play();
