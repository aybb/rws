import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import { IndexPage } from './pages/index';
import { AboutPage } from './pages/about';
import { GreetPage } from './pages/greet';


const routes = [
  {
    path: '/',
    component: IndexPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/greet/:username',
    component: GreetPage,
  },
];


export const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      {
        routes.map((route, idx) => (
          <Route
            exact
            key={idx}
            {...route}
          />
        ))
      }
    </React.Fragment>
  </BrowserRouter>
);