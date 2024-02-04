import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default function TaskForm({title,setTitle,dueDate,setDueDate,description,setDescription,isComplete,setIsComplete,sendData,isEdit}) {
  
  useEffect(()=> {

  },[])

  return (
    <Form onSubmit={(e) =>sendData(e)}>
      <h3>{isEdit ?'Edit Task':'Create a new Task'}</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Task Title" value={title} onChange={e=>setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 flex-row" controlId="formBasicEmail">
        <div>
            <Form.Label>Due date (YYYY/MM/DD)</Form.Label>
        </div>  
        
        {/* <Form.Control type="text" placeholder="Enter due date for Task"  value={dueDate} onChange={e=>setDueDate(e.target.value)}/> */}
        <DatePicker 
            selected={dueDate} 
            onChange={(date) => setDueDate(date)} 
            dateFormat='YYYY-MM-dd'
            style={{width:'100px'}}
        />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Description of Task"
          style={{ height: '100px', resize:"none" }}
          value={description} onChange={e=>setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Is complete?" checked={isComplete} onChange={() => setIsComplete(!isComplete)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        {isEdit?"Submit Edit": "Create Task"}
      </Button>
    </Form>
  );
}
