import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

export default function TaskComponent({data,deleteTask,completeTask,onOpenModal}) {
    const [checkValue,setCheckValue] = useState(false)

    const onChange = () => {
        setCheckValue(!checkValue)
    }

    return (
        <Card
          bg='light'
          text={'dark'}
          style={{ width: '25rem' }}
          className="mb-2"
        >
          <Card.Header className='d-flex justify-content-between align-items-center'>
            Complete by {data.completedBy}
            <div>
              {data?.isCompleted? "" :<Button className="me-1"variant="secondary" onClick={() => onOpenModal(data)}>Edit</Button>}
              <Button variant="secondary" onClick={() => deleteTask(data?.id)}>Delete</Button>
            </div>
            
            </Card.Header>
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
                {data.body}
            </Card.Text>
            {!data.isCompleted?
            <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Mark as Complete"
                checked={data.isCompleted}
                onChange={()=>completeTask(data?.id)}
            />:
            <Form.Check // prettier-ignore
                disabled
                type="switch"
                id="custom-switch"
                label="Mark as Complete"
                checked={data.isCompleted}
                onChange={onChange}
            />}
          </Card.Body>
        </Card>
  );
}
