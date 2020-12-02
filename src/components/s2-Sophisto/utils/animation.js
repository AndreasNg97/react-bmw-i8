import gsap from 'gsap'

export const scaleImg = (img) => {
    gsap.to(img, {
        duration: 0.8,
        width: 104+'%',
        opacity: 1
    })
}

export const textReveal = (text) => {
    gsap.to(text, {
        duration: 1,
        opacity: 1,
        y: 5+'rem'
    })
}