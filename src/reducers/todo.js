import uuid from 'uuid';

import * as types from '../types/todo';


const INITIAL_STATE = {
  todos: {},
};


export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_TODO:
      const todoId = uuid.v4();
      return {
        ...state,
        todos: {
          ...state.todos,
          [todoId]: {
            ...action.payload,
            id: todoId,
          },
        },
      };
    case types.UPDATE_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: action.payload,
        },
      };
    case types.DELETE_TODO:
      const todos = { ...state.todos };
      delete todos[action.payload.id];
      return {
        ...state,
        todos,
      };
    default:
      return state;
  }
};