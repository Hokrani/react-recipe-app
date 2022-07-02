import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers, createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import receipeReducer from './Components/reducer';
import Saga from './Components/sagas';

const sagaMiddleware=createSagaMiddleware();
const rootReducer = combineReducers({ receipeReducer });
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(Saga);

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App />
      </Router>,
  </Provider>,
  document.getElementById('root')
);

