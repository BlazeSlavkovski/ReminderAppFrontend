import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect,useState } from 'react';

export default function NavBar({handleLogout,userDetails}) {
    
    const [navDetails, setNavDetails] = useState(userDetails)
    useEffect(()=> {    
        setNavDetails(userDetails)
    },[userDetails])
    return (
    <Navbar className="bg-body-tertiary justify-content-between px-4 py-2">
      <Form.Label>Reminder App</Form.Label>
      {navDetails && <div className="d-inline gap-3">
        <Form.Label className='px-2'>Welcome {navDetails?.name}</Form.Label>
        <Button variant="secondary" onClick={e => handleLogout(e)}>Logout</Button>   
      </div>}
      
    </Navbar>
  );
}

