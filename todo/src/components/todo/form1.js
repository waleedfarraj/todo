import React from 'react'
import { useState, useEffect } from 'react'
import { Card,ListGroup,Button, Form } from 'react-bootstrap';

export default function Form1(props) {
    const [item, setItem] = useState({ item: '' })

    const handleInputChange = (e) => {
        console.log(e.target.name, e.target.value)
        setItem({ ...item, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        console.log('item', item)
        console.log('props', props)
        e.preventDefault();
        e.target.reset();
        props.handleSubmit(item)

        setItem(item)




    }
    return (

        <>
            <h3>Add Item</h3>
            <Card style={{ width: '18rem' }}>

                <ListGroup variant="light">
                    <Form onSubmit={handleSubmit}>
                        <Form.Label>
                            <span>To Do Item</span>
                            <Form.Control
                                name="text"
                                placeholder="Add To Do List Item"
                                onChange={handleInputChange}
                            />
                        </Form.Label>
                        <Form.Label>
                            <span>Difficulty Rating</span>
                            <Form.Control defaultValue="1" type="range" min="1" max="20" name="difficulty" onChange={handleInputChange} />
                        </Form.Label>
                        <Form.Label>
                            <span>Assigned To</span>
                            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
                        </Form.Label>
                        <Button variant="primary" type="submit">Add Item</Button >
                    </Form>

                </ListGroup>
            </Card>

        </>
    );



}
