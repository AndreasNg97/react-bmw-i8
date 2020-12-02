import gsap from 'gsap'

export function boxAndTextReveal(box,text){
    gsap.to( [box, text],{
        duration: 1,
        height: 'auto',
        opacity: 1,
        stagger: 0.7
    })
}