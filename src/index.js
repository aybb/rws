import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import { Router } from './router';
import { store } from './store';


const App = () => (
  <Provider store={store}>
    <Router/>
  </Provider>
);


render(<App />, document.getElementById('root'));
