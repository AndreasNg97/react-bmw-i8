import React from 'react'
import {Row, Col} from 'react-bootstrap'

function Range() {
    return (
        <div>
            <h1 className="ml-5 my-3">Rekkevidde</h1>
            <Row className="pl-5">
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">Maks rekkevidde</p>
                    <p className="font-weight-light m-0 mb-1">600km</p>
                </Col>
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">Elektrisk rekkevidde</p>
                    <p className="font-weight-light m-0 mb-1">52-53km</p>
                </Col>
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">Litiumionbatteri</p>
                    <p className="font-weight-light m-0 mb-1">11.6kWh</p>
                </Col>
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">Ladetid</p>
                    <p className="font-weight-light m-0 mb-1">2.4 timer</p>
                </Col>
            </Row>
        </div>
    )
}

export default Range