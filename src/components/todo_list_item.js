import React from 'react';


export const TodoListItem = (props) => (
  <li>
    <span
      style={{ textDecoration: props.done ? 'line-through' : 'none' }}
      className='todo-name'
    >
      {props.name}
    </span><br />
    <span className="todo-desc">{props.description}</span><br />
    <button
      onClick={props.onEdit}
      className='todo-edit'
    >
      Edit
    </button>
    <button
      onClick={props.onDelete}
      className='todo-delete'
    >
      Delete
    </button>
  </li>
);