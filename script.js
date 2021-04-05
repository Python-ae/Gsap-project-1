gsap.from('.header', {duration: 1, y: '-100%', ease: 'bounce'} )
gsap.from('.link', {duration: 1, opacity: 0, delay: 1, stagger: .5})



const timeLine = gsap.timeline({ defaults: {duration: 1}})

timeLine
    .from('.left', { x: '-100%', ease: 'power2.in'})
    .from('.right', { x: '100%', ease: 'power2.in'}, 0)
    .from('.button', { y: 10, opacity: 0, ease: 'power2.in'})
    .to('.footer', { y: 0, ease: 'elastic'}, '<.5') //overflow property needed to remove the scrollbar


const button = document.querySelector('.button')

button.addEventListener('click', () => {
    timeLine.reverse()
})