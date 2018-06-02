import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { TodoListItem } from '../components/todo_list_item';

import { deleteTodo, loadTodos } from '../actions/todo';


export class IndexPage_ extends React.Component {

  componentDidMount() {
    this.props.dispatch(loadTodos);
  };

  onEdit = todoId => {
    this.props.history.push(`/todo?todoId=${todoId}`)
  };

  onDelete = todoId => {
    this.props.dispatch(deleteTodo({ id: todoId }))
  };

  render() {
    const { todos } = this.props;
    return (
      <div>
        <h1>Another TODO list</h1>
        <h3><Link to={'/todo'}>Add todo</Link></h3>
        <ul className='todo-list'>
          {
            Object.keys(todos).map(todoId => (
              <TodoListItem
                key={todoId}
                {...todos[todoId]}
                onEdit={() => this.onEdit(todoId)}
                onDelete={() => this.onDelete(todoId)}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}


export const IndexPage = connect(
  state => ({ todos: state.todos })
)(IndexPage_);