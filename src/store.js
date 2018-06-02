import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { reducer } from './reducers/todo';


export const store = createStore(reducer, applyMiddleware(createLogger(), thunkMiddleware));