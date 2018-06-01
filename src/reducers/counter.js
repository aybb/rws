import * as types from '../types/counter';

const INITIAL_STATE = {
  counter: 0,
};


export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case types.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};