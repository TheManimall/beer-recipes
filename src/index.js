import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';

import App from './App';
import rootReducer from './reducers/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(
      thunk
    ),
  ),
);

const providerDOM = (
  <Provider store={store}>
      <App />
  </Provider>
);
render(
  providerDOM,
  document.getElementById('root'),
);

