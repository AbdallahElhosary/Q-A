import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

import 'react-toastify/dist/ReactToastify.css';
import { questions } from '../data';
  

function FormInput({ onAddItem , notify}) {
    const [qu, setQu] = useState("");
    const [an, setAn] = useState("");
    // to push data into array
    const AddItem = () => {
        if (qu === "" || an === "") {
            notify("The Field Is Empty" , "Error")
            return;
        }
        questions.push({ id: Math.random(), q: qu, a: an });
        setQu("")
        setAn("")
        onAddItem();
    }
    
    return (
        <Row>
            <Col sm="5">
                <Form.Control type="text" placeholder="Enter Question" value={qu} onChange={(e)=>setQu(e.target.value)} />
            </Col>
            <Col sm="5">
                <Form.Control type="text" placeholder="Enter Answer" value={an} onChange={(e)=>setAn(e.target.value)} />
            </Col>
            <Col sm="2">
                <button className="buttonStyle w-100" type="submit" onClick={AddItem}>
                    Add
                </button>
            </Col>
            
        </Row>
    )
}

export default FormInput