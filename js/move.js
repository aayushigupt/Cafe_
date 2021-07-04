gsap.registerPlugin(ScrollTrigger);



gsap.fromTo(".img-1", {
    transform: 'scale(1)', transformOrigin: 'center', 
    y : 50,
    
}, {
    scrollTrigger : {
        trigger: ".img-1",
        toggleActions : "restart pause reverse repeat",
     },
    y : 0,
    transform: 'scale(1.1)',
    duration: 2,
})

gsap.fromTo(".img-2", {
    transform: 'scale(1)', transformOrigin: 'center',
    y : -50,
    
}, {
    scrollTrigger : {
        trigger: ".img-1",
        toggleActions : "restart pause reverse",
     },
    y : 0,
    transform: 'scale(1.1)',
    duration: 2,
})

gsap.fromTo(".img-3", {
    transform: 'scale(1)', transformOrigin: 'center'
    
}, {
    scrollTrigger : {
        trigger: ".img-1",
        toggleActions : "restart pause reverse",
     },
     transform: 'scale(1.5)',
    duration: 1,
})



gsap.fromTo(".img-5", {
    transform: 'scale(1)', transformOrigin: 'center'
    
}, {
    scrollTrigger : {
        trigger: ".img-1",
        toggleActions : "restart pause reverse",
     },
     transform: 'scale(1.2)',
    duration: 1,
})




