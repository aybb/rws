import React from 'react';


export const Button = (props) => (
  <button
    onClick={props.onClick}
  >
    {props.label}
  </button>
);
