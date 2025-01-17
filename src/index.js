import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from './redux/reducers'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers,{},applyMiddleware(promise,thunk, logger))
ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
