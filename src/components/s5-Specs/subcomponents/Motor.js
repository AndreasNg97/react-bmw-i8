import React from 'react'
import {Row, Col} from 'react-bootstrap'

function Motor(){
    return(
        <div>
            <h1 className="ml-5 my-3">Motor</h1>
            <Row className="pl-5">
                <Col xs={4} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">Systemeffekt</p>
                    <p className="font-weight-light m-0 mb-1">275kW (374hK)</p>
                </Col>
                <Col xs={4} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">EL-motor: effekt</p>
                    <p className="font-weight-light m-0 mb-1">105kW</p>
                </Col>
                <Col xs={4} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">Maks dreiemoment</p>
                    <p className="font-weight-light m-0 mb-1">250nm</p>
                </Col>
                <Col xs={4} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">Sylindre/ventiler</p>
                    <p className="font-weight-light m-0 mb-1">3/4</p>
                </Col>
                <Col xs={4} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">Slagvolum</p>
                    <p className="font-weight-light m-0 mb-1">Slaglengde/boring</p>
                </Col>
            </Row>
        </div>
    )
}

export default Motor