import React from 'react'
import {Row, Col} from 'react-bootstrap'

function Weight(){
    return(
        <div>
            <h1 className="ml-5 my-3">Vekt</h1>
            <Row className="pl-5">
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">Egenvekt(EU)</p>
                    <p className="font-weight-light m-0 mb-1">1610kg</p>
                </Col>
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">Tillatt totalvekt</p>
                    <p className="font-weight-light m-0 mb-1">1920kg</p>
                </Col>
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">Tillatt aksellast foran/bak</p>
                    <p className="font-weight-light m-0 mb-1">920/1040(kg)</p>
                </Col>
                <Col xs={5} className="left-line-orange ml-3 mb-5">
                    <p className="font-weight-bold m-0 mb-1">Bagasjeromsvolum</p>
                    <p className="font-weight-light m-0 mb-1">154L</p>
                </Col>
            </Row>
        </div>
    )
}

export default Weight