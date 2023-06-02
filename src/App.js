import React, { useState } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import FormInput from './components/FormInput';
import Accord from './components/Accord';
import { questions } from './data';

const App = () => {
    
    const [data, setData] = useState(questions);

    // to add item to array
    const onAddItem = () => {
        localStorage.setItem("items" ,JSON.stringify([...questions]))
        setData([...questions])
        notify("items Added" , "Success")
    }

    // to delete all items
    const deleteAllItems = () => {
        localStorage.removeItem("items")
        questions.splice(0,questions.length)
        setData(questions);
        notify("items Deleted" , "Warning")

    }

    // to delete one item from array
    const deleteOneItem = (dataItems) => {
        localStorage.setItem("items" ,JSON.stringify([...dataItems]))
        setData([...dataItems]);
        if (dataItems.length <= 0) {
            deleteAllItems();
        }
        notify("One Item Deleted" , "Error")

    }
    // to Push Notifacation
    const notify = (message, type) => {
        if(type==="Success"){
            toast.success(message)
        }
        else if(type==="Error"){
            toast.error(message)
        }
        else if(type==="Warning"){
            toast.warning(message)
        }
    };
    return (
        <div className="font color-body text-center">
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col sm="4" className="fs-3">
                        <div className="text-center">Common Questions And Answers</div>
                    </Col>
                    <Col sm="8">
                        <FormInput onAddItem={onAddItem} notify={notify} />
                        <Accord data={data} deleteOneItem={deleteOneItem} />
                        {localStorage.getItem("items") !==null && <button className="buttonStyle w-100" onClick={deleteAllItems}>Delete All</button>}
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </div>
    )
}

export default App;