import React from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';

import { createTodo, updateTodo } from '../actions/todo';


const INITIAL_TODO = {
  name: '',
  description: '',
  done: false,
};


class TodoPage_ extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.todoObject || INITIAL_TODO;
  };

  onFieldChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onSubmit = () => {
    let fnToDispatch = createTodo;
    if (this.state.id) {
      fnToDispatch = updateTodo;
    }
    this.props.dispatch(fnToDispatch(this.state));
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div>
          <span>Name</span>
          <input
            value={this.state.name}
            onChange={e => this.onFieldChange('name', e.target.value)}
          />
        </div>
        <div>
          <span>Description</span>
          <input
            value={this.state.description}
            onChange={e => this.onFieldChange('description', e.target.value)}
          />
        </div>
        {
          this.state.id &&
          <div>
            <span>Done</span>
            <input
              type="checkbox"
              checked={this.state.done}
              onChange={() => this.onFieldChange('done', !this.state.done)}
            />
          </div> || null
        }
        <button
          onClick={this.onSubmit}
        >
          Save
        </button>
      </div>
    )
  }
}


const mapStateToProps = (state, { location }) => {
  let todoObject = null;
  const { todoId } = qs.parse(location.search);
  if (todoId) {
    todoObject = state.todos[todoId];
  }
  return { todoObject }
};


export const TodoPage = connect(mapStateToProps)(TodoPage_);