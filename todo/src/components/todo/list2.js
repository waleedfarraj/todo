import React from 'react'
import { ListGroup, Card, Button} from 'react-bootstrap'
import './todo.scss'

const List1 = (props) => {





  return (
    <ListGroup className="ListGroup" variant="flush">
      {props.list.map(item => (
        <Card style={{ width: '15rem', height: '10rem' }}>
          <Card.Header id='card-header'>
          <Button variant={!item.complete ? "success": "danger"} onClick={() => props.handleComplete(item._id)} className={`listGroupsItem complete-${item.complete.toString()}`}>{ !item.complete ? "pending": "completed"}</Button>
          <h4>{item.assignee}</h4> 
          </Card.Header>
          
          <Card.Body>
            {/* <ListGroup.Item className={`listGroupItem complete-${item.complete.toString()}`} */}
              {/* key={item._id} > */}
              
              <span onClick={() => props.handleComplete(item._id)}>
                {item.text}
              </span>
            {/* </ListGroup.Item> */}
            <Button  onClick={()=> props.deleteTask(item._id)} variant='light' style={{color:"red"}} >X</Button>
          </Card.Body>
        </Card>
      ))}
    </ListGroup>
  );
}


export default List1
