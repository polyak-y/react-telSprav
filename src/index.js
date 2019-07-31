
import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducers from './store/reducer/rootReducers'
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
