import React from 'react';
import ReactDOM from 'react-dom';
// import App from './container/App';
import Home from './components/Home';
import {Provider, connect} from 'react-redux';
import configureStore from './store/configureStore'
import './assets/css/bootstrap/css/bootstrap.min.css';
import './assets/css/bootstrap/css/bootstrap-grid.min.css';


const store =configureStore();
ReactDOM.render(
  <Provider store={store}>
  <Home />
  </Provider>
  , document.getElementById('root'));
