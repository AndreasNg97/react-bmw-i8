import React, { useEffect, useRef } from 'react'
import {Row, Col} from 'react-bootstrap'
import bmwLogo from './img/BMWlogo.png'
import "./Landingpage.css"
import { backgroundReveal, textReveal, logoReveal } from './utils/animations'

function Landingpage(){
    let landingBackground = useRef(null)
    let landingH1 = useRef(null)
    let landingH3 = useRef(null)
    let landingLogo = useRef(null)

    useEffect(() => {
        backgroundReveal(landingBackground)
        textReveal(landingH1, landingH3)
        logoReveal(landingLogo)
    },[])
    return(
        <div ref={e => { landingBackground = e }} className="Landingpage">
            <Row className="h-75">
                <Col xs={8} className="title-container d-flex justify-content-end align-items-center mb-5 p-5">
                    <div className="text-light mb-5">
                        <h1 ref={e => { landingH1 = e}} style={{fontSize:"3rem"}}>DEN NYE GENERASJONEN AV EN VISJON.</h1>
                        <h3 ref={e => { landingH3 = e}}>Den nye BMW i8 Coupé</h3>
                    </div>
                </Col>
                <Col xs={4} className="d-flex justify-content-end pt-2 px-5">
                    <img ref={e => { landingLogo = e }} src={bmwLogo} className="bmw-logo align-self-start mr-5" alt="BMW Logo"/>
                </Col>
            </Row>
        </div>
    )
}

export default Landingpage