import React, { useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import Motor from './subcomponents/Motor'
import Performance from './subcomponents/Performance'
import Range from './subcomponents/Range'
import Weight from './subcomponents/Weight'
import Emissions from './subcomponents/Emissions'
import "./Specs.css"

function Specs(){
    const [specPage, setSpecPage] = useState(<Motor />)
    console.log()
    return(
        <div className="Specs d-flex justify-content-end">
            <div className="d-flex align-items-center justify-content-end text-light mr-5 mb-5 w-50 h-75">
                <Row className="spec-container h-75 w-75">
                    <Col xs={2} className="border-bottom-orange p-0">
                        <button onClick={() => setSpecPage(<Motor />)} className={specPage.type.name === 'Motor' ? 'specBtns bg-dark' : 'specBtns'}>Motor</button>
                    </Col>
                    <Col xs={3} className="border-bottom-orange p-0">
                        <button onClick={() => setSpecPage(<Performance />)} className={specPage.type.name === 'Performance' ? 'specBtns bg-dark' : 'specBtns'}>Kjøreytelse</button>
                    </Col>
                    <Col xs={2} className="border-bottom-orange p-0">
                        <button onClick={() => setSpecPage(<Range />)} className={specPage.type.name === 'Range' ? 'specBtns bg-dark' : 'specBtns'}>Rekkevidde</button>
                    </Col>
                    <Col xs={2} className="border-bottom-orange p-0">
                        <button onClick={() => setSpecPage(<Weight />)} className={specPage.type.name === 'Weight' ? 'specBtns bg-dark' : 'specBtns'}>Vekt</button>
                    </Col>
                    <Col xs={3} className="border-bottom-orange p-0">
                        <button onClick={() => setSpecPage(<Emissions />)} className={specPage.type.name === 'Emissions' ? 'specBtns bg-dark' : 'specBtns'}>Forbruk</button>
                    </Col>
                    <Col xs={12} className=" h-100 mt-3">
                        {specPage}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Specs