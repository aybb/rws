import React from 'react';
import { Link } from 'react-router-dom';


export class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <h1>TODO list</h1>
        <Link to='/about'>About</Link>
      </div>
    );
  }
}