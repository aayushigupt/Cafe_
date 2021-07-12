gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline();
t1.from(".blue", {
    yPercent : -1000,
    duration: 1,
}).from(".pink", {
    xPercent : -100,
    duration: 1
}).from(".purple", {
    xPercent: 500,
    duration: 1,
})

const t2 = gsap.timeline();
t2.from(".orange", {
    xPercent : -100,
    duration: 0
}).from(".green", {
    yPercent : -5000,
    duration: 0
}).from(".red", {
    xPercent: -500,
    duration: 0
})

ScrollTrigger.create({
    trigger: ".panel",
    animation: t2,
 
 
    toggleActions: "play restart complete reverse",
    end :"bottom bottom",
})


ScrollTrigger.create({
    trigger: ".panel-2",
    animation: t1,
    start: "80% bottom",
    end: "bottom bottom",
  
    toggleActions: "play complete reverse reset"
})
