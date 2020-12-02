import React, { useEffect, useRef } from 'react'
import { Row, Col } from 'react-bootstrap'
import sophisto1 from './img/sophistoEdition.jpg'
import { scaleImg, textReveal } from './utils/animation'
import { useOnScreen } from '../../utils/functions'
import "./Sophisto.css"

function Sophisto() {
    const [setRef, visible] = useOnScreen({ threshold : 1})
    let img1 = useRef(null)
    let text1 = useRef(null)

    function triggerAnimation(){
        if (visible) {
            scaleImg(img1)
            textReveal(text1)
        }
    }

    useEffect(() => {
        triggerAnimation()
    }, [visible])

    return (
        <div ref={setRef} className="Sophisto vh-100 snap">
            <Row className="h-25">
                <Col className="d-flex justify-content-center align-items-center">
                    <h1 style={{fontSize:"3rem"}}>BMW i8 COUPÉ ULTIMATE SOPHISTO EDITION</h1>
                </Col>
            </Row>
            <Row className="h-50">
                <Col xs={8}>
                    <img ref={e => { img1 = e }} src={sophisto1} alt="BMW i8 Sophisto Edition" />
                </Col>
                <Col xs={4} className="d-flex align-items-center pl-0 pr-5">
                    <div ref={e => {text1 = e}} className="s2-p-container pl-3 py-4">
                        <p>
                            Eksepsjonell på alle vis: BMW i8 Ultimate SophistoEdition hever innovativ ytelse og ekstravagant design til neste nivå. Sophisto Edition er begrenset til 200 eksemplarer i hele verden, er tilgjengelig både for BMW i8 Coupé og BMW i8 Roadster og skiller seg fra mengden i sofistogrå med spesielle detaljer og eksklusive lettmetallfelger i E-kobber. De lakkerte bremsekaliperne understreker i tillegg de sportslige egenskapene.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Sophisto