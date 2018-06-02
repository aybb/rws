import * as types from '../types/todo';


export const createTodo = payload => ({
  type: types.CREATE_TODO,
  payload,
});

export const updateTodo = payload => ({
  type: types.UPDATE_TODO,
  payload,
});

export const deleteTodo = payload => ({
  type: types.DELETE_TODO,
  payload,
});
