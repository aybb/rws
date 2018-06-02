import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import { IndexPage } from './pages/index';
import { TodoPage } from './pages/todo';


const routes = [
  {
    path: '/',
    component: IndexPage,
    exact: true,
  },
  {
    path: '/todo',
    component: TodoPage,
  },
];


export const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      {
        routes.map((route, idx) => (
          <Route
            key={idx}
            {...route}
          />
        ))
      }
    </React.Fragment>
  </BrowserRouter>
);