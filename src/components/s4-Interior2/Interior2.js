import React, { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import sophistoInterior2 from './img/sophistoInterior2.jpg'
import sophistoInterior3 from './img/sophistoInterior3.jpg'
import sophistoInterior4 from './img/sophistoInterior4.jpg'
import sophistoInterior5 from './img/sophistoInterior5.jpg'
import './Interior2.css'

function Interior2(){
    const sliderImages=[sophistoInterior2, sophistoInterior3, sophistoInterior4, sophistoInterior5]
    const [sliderCount, setSliderCount] = useState(0)
    let currentImg = sliderImages[sliderCount]

    useEffect(() => {
        if(sliderCount > sliderImages.length -1){
            setSliderCount(0)
        }
        if(sliderCount < 0){
            setSliderCount(sliderImages.length -1)
        }
    },[sliderCount])

    return(
        <div className="vh-100">
            <div className="px-5 pt-3">
                <div className="d-flex mx-5">
                    <button onClick={() => setSliderCount(sliderCount-1)} className="slider-btn align-self-center slider-btn-prv"><h2 style={{fontSize:"1.8rem"}}>&lt;</h2></button>

                    <img className="slider-img" src={currentImg}/>

                    <button onClick={() => setSliderCount(sliderCount+1)} className="slider-btn align-self-center slider-btn-nxt"><h2 style={{fontSize:"1.8rem"}}>&gt;</h2></button>
                </div>

                <div className='d-flex justify-content-center mt-2'>
                    <div className={sliderCount === 0 ? 'mx-1 circle filled' : 'mx-1 circle'}></div>
                    <div className={sliderCount === 1 ? 'mx-1 circle filled' : 'mx-1 circle'}></div>
                    <div className={sliderCount === 2 ? 'mx-1 circle filled' : 'mx-1 circle'}></div>
                    <div className={sliderCount === 3 ? 'mx-1 circle filled' : 'mx-1 circle'}></div>
                </div>
            </div>

            <div className="text-box">
                <Row className="text-container">
                    <Col className="mb-3" xs={12}><h3>MORGENDAGENS KONTROLLROM</h3></Col>
                    <Col className="s4-p-container">
                        <p>BMW i8 Coupé er like unik på innsiden som på utsiden. Et eksempel på det er den eksklusive utstyrsversjonen Accaro amido/E-kobber. De dynamiske linjene i den utvendige designen går igjen inne i kupeen og setter et futuristisk preg på førerplassen. Midtkonsollen og de intuitive betjeningselementene setter føreren i sentrum, slik at du alltid har full oversikt. De nye sportssetene med elektrisk justering gir god sidestøtte og høy komfort. Lskaper en eksklusiv stemning i mørket. Dkonturlinjene i dørene, instrumentpanelet, midtkorattet i enten EfficientDynamics-blått, ravhvitt.</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Interior2