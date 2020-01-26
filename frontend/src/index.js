import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
// Para el build LOCAL!!! usar HashRouter en lugar de BrowseRouter.
import { BrowserRouter as Router } from 'react-router-dom';

const rootEl = document.getElementById('app');

render(
  <Router>
    <App />
  </Router>,
  rootEl
);

if (module.hot) {
  module.hot.accept();
}
