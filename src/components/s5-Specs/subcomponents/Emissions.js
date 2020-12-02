import React from 'react'
import "./subcomponent.css"
import {Row, Col} from 'react-bootstrap'
function Emissions() {
    return (
        <div>
            <h1 className="ml-5 my-3">Forbruk</h1>
            <Row className="pl-5">
                <Col xs={6} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0">CO²-utslipp ved blandet kjøring</p>
                    <p className="font-weight-light m-0">49-48g/km</p>
                </Col>
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">CO²-utslippsklasse</p>
                    <p className="font-weight-light m-0 mb-1">A+</p>
                </Col>
            </Row>
        </div>
    )
}

export default Emissions