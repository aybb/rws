import React from 'react';

export const GreetPage = (props) => {
  return (
    <h1>Hi {props.match.params.username}</h1>
  );
};