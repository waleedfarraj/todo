import React, { useEffect, useState } from 'react';
import TodoForm from './form2.js';
import TodoList from './list2.js';

import './todo.scss';

const todoAPI = 'http://localhost:3000/api/v1/todo';


const ToDo = () => {
  
  const [list, setList] = useState([]);
  useEffect(() => {
  
    document.title = `${list.filter(item => !item.complete).length} remanis`;
  },[list]);

  const _addItem = (item) => {
    item.due = new Date();
    fetch(todoAPI, {
      url: todoAPI,
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(savedItem => {
        setList([...list, savedItem])
      })
      .catch(console.error);
  };

  const _toggleComplete = id => {
  console.log("toggle");
    let item = list.filter(i => i._id === id)[0] || {};
    
    if (item._id) {
      item.complete = !item.complete;
     
      let url = `${todoAPI}/${id}`;

      fetch(url, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? item : listItem));
        })
        .catch(console.error);
    }
  };
  const _deleteTask = id => {
    console.log("delete");
      let item = list.filter(i => i._id === id)[0] || {};
      
      if (item._id) {
      
        let url = `${todoAPI}/${id}`;
  
        fetch(url, {
          method: 'delete',
          mode: 'cors',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item)
        })
          .then(response => response.json())
          .then(savedItem => {console.log(list)
            list.filter(listItem => listItem._id !== item? item : listItem)}

          )
          .catch(console.error);
      }
      
    };

  const _getTodoItems = () => {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.json())
      .then((data)=> { console.log(data.data)
      setList(data.data)})
      .catch(console.error);
  };

  useEffect(_getTodoItems, []);
  useEffect(_deleteTask);



  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            deleteTask={_deleteTask}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;