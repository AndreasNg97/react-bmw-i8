import React, { useEffect, useRef } from 'react'
import {Row, Col} from 'react-bootstrap'
import { useOnScreen } from '../../utils/functions'
import { boxAndTextReveal } from './utils/animation'
import './Interior.css'

function Interior(){
    let [setRef, visible] = useOnScreen({ threshold : 1 }) 
    let textBox = useRef(null)
    let text = useRef(null)

    function animationTrigger(){
        if(visible){
            boxAndTextReveal(textBox, text)
        }
    }

    useEffect(() => {
        animationTrigger()
    },[visible])

    return(
        <div ref={setRef} className="Interior d-flex align-items-center vh-100">
            <Row>
                <Col xs={4} className="ml-4">
                    <div ref={e => { textBox = e }} className="s3-p-container px-3 py-4">
                        <p ref={e => { text = e }} style={{opacity:'0'}}>
                            Interiøret understreker også eksklusiviteten til den dynamiske plug-in-hybrid sportsbilen med   interiøret Accaro E-kobber, spesielle funksjoner som keramiske betjeningselementer og markante detaljer som innstegslist med Edition-preg eller <br/> "1 av 200" på merket i midtkonsollen. Denne Edition omfatter et Head-Up Display som holder deg konstant oppdatert mens du er omgitt av stemningen fra lyspakken og den gode lyden fra Harmann Kardon HiFi høyttalersystem. 
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Interior