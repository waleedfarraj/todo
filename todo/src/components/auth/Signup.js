import React, { useContext, useState } from 'react';
import { AuthContext } from './context.js';

import { Form, Col, Button } from "react-bootstrap";

const Signup = () => {

    const context = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        context.signup({ username, password, email, role });
    };

    return (

      <>
      <center>
      <h3><b>Signup</b></h3>
      <Form  className="col-lg-6 offset-lg-3" data-testid="form" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} sm="4">
            <Form.Label>Username</Form.Label>
            <Form.Control
                required
                placeholder='Username'
                name='username'
                type='text'
                onChange={(e) => setUsername(e.target.value)}
                />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} sm="4" >
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              placeholder='password'
              name='password'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
                />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} sm="4" >
            <Form.Label>Email</Form.Label>
            <Form.Control
            required
            className="mr-sm-5"
            placeholder='email'
            name='email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
                />
          </Form.Group>
        </Form.Row>


        <Form.Row>
          <Form.Group as={Col} sm="4" >
            <Form.Label>Role</Form.Label>
            <Form.Control
              required
              className="mr-sm-5"
              placeholder='role'
              name='role'
              type='text'
              onChange={(e) => setRole(e.target.value)}
                />
          </Form.Group>
        </Form.Row>


        <Form.Row>
          <Button type="submit" variant="primary" className="mr-sm-4" size="md">Signup</Button>
          <Button variant="info" onClick={() => context.setSwitchToSignup(false)}>Back to Login</Button>
          </Form.Row>
        </Form>
        </center>
        </>
    );
};

export default Signup;