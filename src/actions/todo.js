import * as types from '../types/todo';


const todos = {
  '1': {
    name: '1',
    id: '1',
    description: '1',
    done: false,
  },
  '2': {
    name: '2',
    id: '2',
    description: '2',
    done: false,
  }
};


export const createTodo = payload => ({
  type: types.CREATE_TODO,
  payload,
});
export const updateTodo = payload => ({
  type: types.UPDATE_TODO,

});
export const deleteTodo = { type: types.DELETE_TODO };


export const loadTodos = dispatch => {
  dispatch({ type: types.LOAD_TODOS });
  setTimeout(() => {
    dispatch({ type: 'LOAD_TODOS_SUCCESS', payload: todos })
  }, 1000);
};