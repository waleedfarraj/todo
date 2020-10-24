import React, { useContext, useState } from 'react';
import { AuthContext } from './context.js';

import { Form, Col, Button } from "react-bootstrap";

const Login = () => {

    const context = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        context.login(username, password);
    };

    return (
        <>
        <center>
        <h3><b>Login</b></h3>
        <Form data-testid="login-form" className="col-lg-6 offset-lg-3" onSubmit={handleSubmit}>
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
            <Button type="submit" variant="primary" className="mr-sm-4 submit-btn" size="md">Login</Button>
            <Button variant="info" onClick={() => context.setSwitchToSignup(true)}>Signup</Button>
            </Form.Row>
          </Form>
          </center>
        </>
    );
};

export default Login;