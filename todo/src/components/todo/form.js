import React from 'react';
import useForm from '../../hooks/useForm';

import { Button, Form, Col } from "react-bootstrap"

export default (props) => {

const [handleInputChange, handleSubmit] = useForm(props.handleSubmit);

    return (
      <>
      <h2>Add Item:</h2>
      <Form data-testid="form" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>To Do Item</Form.Label>
            <Form.Control type="text" name="text" onChange={handleInputChange} placeholder="Add To Do List Item" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Difficulty Rating</Form.Label>
            <Form.Control defaultValue="2" type="range" min="1" max="5" name="difficulty" varient="primary" onChange={handleInputChange}  />
          </Form.Group>
        </Form.Row>
          <Button varient="primary" type="submit">Add Item</Button>
        </Form>
      </>
    );
  }