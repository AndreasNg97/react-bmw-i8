import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Performance() {
    return (
        <div>
            <h1 className="ml-5 my-3">Kjøreytelse</h1>
            <Row className="pl-5">
                <Col xs={12} className="mb-3">
                    <h5 className="border-bottom d-inline-block">Topphastighet</h5>
                </Col>
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">Hybrid kjøring</p>
                    <p className="font-weight-light m-0 mb-1">250km/t</p>
                </Col>
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">Elektrisk kjøring</p>
                    <p className="font-weight-light m-0 mb-1">120km/t</p>
                </Col>

                <Col xs={12} className="mb-3">
                    <h5 className="border-bottom d-inline-block">Akselerasjon</h5>
                </Col>
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">0-100km/t</p>
                    <p className="font-weight-light m-0 mb-1">4.4s</p>
                </Col>
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">0-60km/t Elektrisk kjøring</p>
                    <p className="font-weight-light m-0 mb-1">4.5s</p>
                </Col>
                
                <Col xs={12} className="mb-3">
                    <h5 className="border-bottom d-inline-block">Elastisitet 80-120km/t</h5>
                </Col>
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">4.gir</p>
                    <p className="font-weight-light m-0 mb-1">3.4s</p>
                </Col>
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">5.gir</p>
                    <p className="font-weight-light m-0 mb-1">4.0s</p>
                </Col>
            </Row>
        </div>
    )
}

export default Performance