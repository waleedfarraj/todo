import React, { useState, useEffect } from 'react'
import TodoForm from './form1.js';
import TodoList from './list1.js';
import {Alert} from 'react-bootstrap'
import './todo.scss';

 function Todo1(props) {
   
    const [list, setlist] = useState([]);
  
    useEffect(() => {
        document.title = `${list.filter(item => !item.complete).length} remanis`;
      },[list]);
    const addItem = (item) => {
        item._id = Math.random();
        item.complete = false;
        setlist([...list, item] );
    };

    
    
    useEffect (() => {
       
            let list= [
                { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
                { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
                { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
                { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
                { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
            ];
           console.log('lissssssssssss',list)
            setlist(list)
            
  
       
    },[])
    const  toggleComplete = id => {
        
        let item = list.filter(i => i._id === id)[0] || {};

        if (item._id) {
            item.complete = !item.complete;
            let mylist = list.map(listItem => listItem._id === item._id ? item : listItem);
            setlist( mylist );
        }

    };
    return (
        
        <>
            <header>
            <Alert variant='primary'>
                    There are {list.filter(item => !item.complete).length} Items To Complete       
                               </Alert>
                
            </header>

            <section className="todo">

                <div>
                    <TodoForm handleSubmit={addItem} />
                </div>

                <div>
                    <TodoList
                        list={list}
                        handleComplete={toggleComplete}
                    />
                </div>
            </section>

        </>

    )
}
export default Todo1;
