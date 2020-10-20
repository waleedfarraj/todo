import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';

import { SettingContext } from '../../context/numContext';


function SiteEditor(props) {

    // in function components you can use useContext(context) 
    // you can use any number of contexts here using useContext

    const context = useContext(SettingContext);
    

    return (
        <>
            {/* <Form>
                 <Form.Group >
                    <Form.Label>Sort BY</Form.Label>
                    <Form.Control
                        name="sort"
                        onChange={(e) => {context.setSort(e.target.value) ; console.log(e.target)} } />
                </Form.Group> 
                <Form.Group >
                    <Form.Label>number</Form.Label>
                    <Form.Control placeholder="display X tasks at a time"
                        name="number"
                        onChange={e => context.setNumber(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" placeholder="view complete"
                        name="complete"
                        onChange={e => context.setComplete(e.target.value)} />
                </Form.Group>
               
            </Form> */}
          
            <input
                placeholder="Site Title"
                name="title"
                onChange={(e) => 
                    { console.log('potato',context)
                        context.setSort(e.target.value)}}
            />
            <input
                placeholder="display X tasks at a time"
                name="sort"
                onChange={e => context.setNumber(e.target.value)}
            />

        </>
    )
}


export default SiteEditor;
