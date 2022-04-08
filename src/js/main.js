import anime from "animejs";

const introAnimation = (function () {
  const paragraphs = document.querySelectorAll(".anim-para");
  
  paragraphs.forEach(function (el) {
    el.innerHTML = el.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="anim-word-outer"><span class="anim-word-inner">$2</span></span>');
  });

  anime.set(".anim-spinner div", {opacity: 0});
  anime.set(".anim-border", {scaleX: 0, transformOrigin: "left center"});
  anime.set(".anim-word-outer", {display: "inline-flex", overflow: "hidden"});
  anime.set(".anim-word-inner", {display: "inline-flex", translateY: "100%"});
  anime.set(".anim-list li", {display: "inline-flex", overflow: "hidden"});
  anime.set(".anim-list li a", {display: "inline-flex", translateY: "100%"});
  
  const introAnimationTimeline = anime
    .timeline({
      loop: false,
      autoplay: false,
    })
    .add({
      targets: ".anim-spinner",
      duration: 1,
      translateX: 0,
      begin: function (anim) {
        anim.animatables.forEach(function (a) {
          anime({
            targets: a.target.children,
            opacity: [0.01, 1],
            duration: 150,
            easing: "linear",
            delay: function (el, i, l) {
              return (a.id * 200) + (600 / l) * i;
            },
          });
        });
      },
    }, 1000)
    .add({
      targets: ".anim-border",
      duration: 1200,
      scaleX: 1,
      delay: anime.stagger(200),
      easing: "easeOutQuart",
    }, 1200)
    .add({
      targets: paragraphs,
      duration: 1,
      translateX: 0,
      begin: function (anim) {
        anim.animatables.forEach(function (a) {
          anime({
            targets: a.target.querySelectorAll(".anim-word-inner"),
            duration: 250,
            translateY: 0,
            delay: anime.stagger(15, {start: a.id * 200}),
            easing: "easeOutQuart",
          });
        });        
      },
    }, 1300)
    .add({
      targets: ".anim-list li a",
      duration: 250,
      translateY: 0,
      easing: "easeOutQuart",
      delay: anime.stagger(50),
    }, 2500);

  return introAnimationTimeline;
})();

window.onload = introAnimation.play();
