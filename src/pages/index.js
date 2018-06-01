import React from 'react';
import { connect } from 'react-redux';

import { Button } from '../components/button';
import { Display } from '../components/display';

import { increment, decrement } from '../actions/counter';


class IndexPage_ extends React.Component {

  increment = () => {
    this.props.dispatch(increment);
  };

  decrement = () => {
    this.props.dispatch(decrement);
  };

  render() {
    return (
      <div>
        <h1>Counter value:</h1>
        <Display count={this.props.counter}/>
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


export const IndexPage = connect(
  state => ({ counter: state.counter })
)(IndexPage_);