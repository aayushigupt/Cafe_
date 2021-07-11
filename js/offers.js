gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".offers-section", {
    backgroundColor: gsap.getProperty("html", "--black")
}, {
    scrollTrigger: {
        trigger: ".color-light",
        scrub: true,

    },
    backgroundColor: gsap.getProperty("html", "--brown")
});

gsap.timeline().fromTo(".heading", {
    y: -5000,
    duration: 6,
}, {
    y: 0,
}).fromTo(".off", {
    x: 5000,
    duration: 3,
}, {
    x: 0,
}).fromTo(".pl-5", {
    y: 5000,
}, {
    y:0
})