gsap.registerPlugin(ScrollTrigger);

gsap.fromTo( ".offers-section", {
    backgroundColor: gsap.getProperty("html", "--black")
  }, {
    scrollTrigger: {
      trigger: ".color-light",
      scrub: true,
     
    },
    backgroundColor: gsap.getProperty("html", "--brown")
  });