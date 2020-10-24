import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../../hooks/useAjax';

import './todo.scss';

const todoAPI = 'https://to-do-adnan.herokuapp.com/api/v1/items';


const ToDo = () => {

  const [list, setList] = useState([]);
  const [axiosApiInstance] = useAjax();
  const [page, setPage] = useState(0);
  const [results, setResults] = useState([]); // allResults
  const [elementsPerPage, setElementsPerPage] = useState(5); // default 5 elements per Page
  const [showCompleted, setShowCompleted] = useState(true);
  const [sortBy, setSortBy] = useState("difficulty");

  useEffect(() => {
    console.log('component did moount!');
    _getTodoItems();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const list = results.slice(((page - 1) * elementsPerPage), page * elementsPerPage);
    setList(list);
  }, [elementsPerPage, page, results])

  useEffect(() => {
    setResults(_sortResultItems([...results]));
    // eslint-disable-next-line
  }, [sortBy])

  useEffect(() => {
    if(!showCompleted){
      setResults(results.filter(listItem => listItem.complete !== true));
    } else {
      _getTodoItems();
    }
    // eslint-disable-next-line
  }, [showCompleted])

  const _sortResultItems = (items) => { // sortedItems desc
    return items.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1)
  };

  const _getTodoItems = () => {
    axiosApiInstance(todoAPI, "get")
      .then(({ data }) => {
        const sortedItems = _sortResultItems(data.results);
        setResults(sortedItems);
        if(page === 0) setPage(1);
      })
      .catch(console.error);
  };

  const _addItem = (item) => {
    item.due = new Date();
    axiosApiInstance(
      todoAPI,
      'post',
      item
    ).then(({ data: savedItem }) => {
        setResults(_sortResultItems([...results, savedItem]))
      })
      .catch(console.error);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      axiosApiInstance(url, "put", item)
        .then(() => {
          setList(list.map(listItem => listItem._id === item._id ? item : listItem));
        })
        .catch(console.error);
    }
  };

  const _deleteItem = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      let url = `${todoAPI}/${id}`;

      axiosApiInstance(url, "delete")
        .then(() => {
          setResults(results.filter(listItem => listItem._id !== item._id));
        })
        .catch(console.error);
    }
  };

  const _renderPagesNumber = () => {
    const buttons = [];
    for (let i = 1; i <= Math.ceil(results.length / elementsPerPage); i++) {
      buttons.push(<button style={{background: page === i ? "green" : ""}} onClick={ () => setPage(i)} key={i}>{i}</button>)
    }
    return buttons;
  }

  return (
    <>
      <header data-testid="itemsHeader">
        <h2>
          There are {results.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            deleteItem={_deleteItem}
            handleComplete={_toggleComplete}
          />
        </div>
        <div>
          <button hidden={page === 1} onClick={() =>setPage(page - 1)}>prev</button>
          { _renderPagesNumber()  }
          <button hidden={page === Math.ceil(results.length / elementsPerPage)} onClick={() =>setPage(page + 1)}>next</button>

          <br/>
          <br/>

          <label>elementsPerPage</label>
          &nbsp;
          &nbsp;
          <select data-testid="elementsPerPage" defaultValue={5} onChange={(e) => setElementsPerPage(e.target.value)}>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={7}>7</option>
          </select>
          <br/>
          <label>Sort By</label>
          &nbsp;
          &nbsp;
          <select data-testid="sortBy" defaultValue="difficulty" onChange={(e) => setSortBy(e.target.value)}>
            <option value="difficulty">difficulty</option>
            <option value="complete">complete</option>
          </select>
          <br/>
          <label>hideCompleted</label>
          <button data-testid="hideCompleted" onClick={() => setShowCompleted(!showCompleted)}>{showCompleted + ""}</button>
        </div>
      </section>
    </>
  );
};

export default ToDo;