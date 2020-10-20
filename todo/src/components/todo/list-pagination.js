import React, { useContext, useEffect } from 'react';
import { SettingContext } from '../../context/numContext';
import { Pagination } from 'react-bootstrap'
import { ListGroup, Card, Button } from 'react-bootstrap'
import './todo.scss'




export default function ListPagination(props) {
    const context = useContext(SettingContext);
    let active = 1;
    let items = [];
    let tasks = []
    let prefrence = context.number
    let pages = Math.ceil(props.list.length / prefrence)
    let lon = props.list.length
    let init = props.list

    const getList =  () => {



        console.log('anyone',props.list)

        // 
        for (let number = 1; number <= pages; number++) {
            console.log(items)
            items.push(
                <Pagination.Item key={number} active={number === active}>
                    {number}
                </Pagination.Item>,
            );
        }
        for (let i = 1 * active; (i % prefrence <= prefrence ) || 1 * active < lon; i++) {
            if(props.list.length === 0 || i === props.list.length ){break}
            console.log('loop', i, props.list, active,'tasks',tasks)
            tasks.push(
                <Card style={{ width: '15rem', height: '10rem' }}>
                    <Card.Header id='card-header'>
                        <Button variant={!props.list[i - 1].complete ? "success" : "danger"} onClick={() => props.handleComplete(props.list[i - 1]._id)} className={`props.listGroupsprops.list[i-1] complete-${props.list[i - 1].complete.toString()}`}>{!props.list[i - 1].complete ? "pending" : "completed"}</Button>
                        <h4>{props.list[i - 1].assignee}</h4>
                    </Card.Header>

                    <Card.Body>
                        <span onClick={() => props.handleComplete(props.list[i - 1]._id)}>
                            {props.list[i - 1].text}
                        </span>
                        <Button onClick={() => props.deleteTask(props.list[i - 1]._id)} variant='light' style={{ color: "red" }} >X</Button>
                    </Card.Body>
                </Card>

            );
        }

    }
    useEffect(()=>getList,[props.list])

    return (
        <div>
            {/* <ListGroup className="ListGroup" variant="flush"> 
                    {tasks}
            </ListGroup> */}
            <br />
            <Pagination>{items}</Pagination>
        </div>
    )
}
