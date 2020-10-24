import React from 'react';

class TodoList extends React.Component {

  render() {

    return (
      <ul>
        {this.props.list.map(item => (
          <li
            key={item._id}
          >
            <span style={{float: "left", display: "inline"}} onClick={() => this.props.handleComplete(item._id)}>
              <b>text</b> {item.text} &nbsp;
              <b>difficulty</b> {item.difficulty} &nbsp;
              <b>complete</b> &nbsp;
              <b style={{"backgroundColor": item.complete ? "red": "green", "color": "white"}}>{item.complete ? "completed": "pending"}</b>
              <br/>
              <br/>
              <b>assignee</b> {item.assignee}
            </span>
          <button onClick={() => this.props.deleteItem(item._id)}>
          del
          </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;