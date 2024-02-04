import { Button, Form } from "react-bootstrap";

export default function RegisterForm({email,setEmail,username,setUsername,password,setPassword, handleRegistration}) {


  return (
    <Form onSubmit={handleRegistration}>
        <Form.Label>Register Page</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}