import { Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { questions } from '../data';
function Accord({ data, deleteOneItem }) {
  const dataLocal = JSON.parse(localStorage.getItem("items"));
  const onDeleteItem = (itemID) => {
    if (localStorage.getItem("items")!==null) {
      const index = questions.findIndex((item) => item.id === itemID);
      questions.splice(index, 1);
      deleteOneItem(questions);
    }
  }
  return (
    <Row>
      <Accordion className="my-2">
        {
          localStorage.getItem("items") !==null ? (
          dataLocal.map((que, index) => {
            return(
            <Accordion.Item eventKey={que.id} key={index} className="my-3">
              <Accordion.Header>
                <div className="m-auto">{que.q}</div>
              </Accordion.Header>
              <Accordion.Body className="d-flex justify-content-around align-items-center">
                <div>{que.a}</div>
                <button className="buttonStyle" onClick={()=>onDeleteItem(que.id)}>Delete Question</button>
              </Accordion.Body>
              </Accordion.Item>
            )
          })
        ) : <h1>No Questions Yet</h1>}
      </Accordion>

    </Row>
  );
}

export default Accord;