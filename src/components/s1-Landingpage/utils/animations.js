import gsap from 'gsap'


export const backgroundReveal = (bg) => {
    gsap.from( bg,{
        duration: 1,
        opacity: 0,
        ease: 'power3.easeIn'
    })
}

export const textReveal = (text1, text2) => {
    gsap.from([text1, text2], {
        duration: 0.8,
        opacity: 0,
        x: -100,
        ease: 'power3.easeIn',
        stagger: {
            amount: 0.3
        }
    })
}

export const logoReveal = (logo) => {
    gsap.from(logo, {
        duration: 0.8,
        opacity: 0,
        x: 100,
        ease: 'power3.easeIn'
    })
}
