gsap.registerPlugin(ScrollTrigger)

gsap.to('.first', {
    scrollTrigger: {
        trigger: '.page1_container',
        start: 'top top',
        scrub: 2,
    },
    x: 2000,
    duration: 2,
})

gsap.to('.second', {
    scrollTrigger: {
        trigger: '.page1_container',
        start: 'top top',
        scrub: 2,
    },
    x: -2000,
    duration: 2,
})
