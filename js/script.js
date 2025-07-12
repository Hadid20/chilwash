gsap.registerPlugin(ScrollTrigger);

gsap.to(".oi", {
  x: 700,
  duration: 3,
  ScrollTrigger: {
    trigger: ".oi",
    start: "top center",
  },
});
