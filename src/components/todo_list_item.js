import React from 'react';


export const TodoListItem = (props) => (
  <li>
    <span
      style={{ textDecoration: props.done ? 'line-through' : 'none' }}
    >
      {props.name}
    </span><br />
    {props.description}<br />
    <button onClick={props.onEdit}>Edit</button>
    <button onClick={props.onDelete}>Delete</button>
  </li>
);