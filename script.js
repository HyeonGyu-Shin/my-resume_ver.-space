gsap.registerPlugin(ScrollTrigger)

gsap.to('.first', {
    scrollTrigger: {
        trigger: '.container_1',
        start: 'top top',
        scrub: 2,
    },
    xPercent: 130,
    duration: 2,
})

gsap.to('.second', {
    scrollTrigger: {
        trigger: '.container_1',
        start: 'top top',
        scrub: 2,
    },
    xPercent: -250,
    duration: 2,
})
