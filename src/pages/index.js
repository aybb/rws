import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../components/button';
import { Display } from '../components/display';


export class IndexPage extends React.Component {

  state = {
    counter: 0,
  };

  increment = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  decrement = () => {
    this.setState(({ counter }) => ({
      counter: counter - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter value {this.state.counter}</h1>
        <Button
          onClick={this.increment}
          label='Increment'
        />
        <Button
          onClick={this.decrement}
          label='Decrement'
        />
      </div>
    );
  }
}