import React  from 'react'

const List1 = (props) => {

    return (
        <ul>
          {props.list.map(item => (
            <li
              className={`complete-${item.complete.toString()}`}
              key={item._id}
            >
              <span onClick={() => props.handleComplete(item._id)}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      );
}

export default List1
