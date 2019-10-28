import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import './css/index.scss';
import store from "./store";
import { Provider } from "react-redux";
import { setConfig } from 'react-hot-loader';

ReactDOM.render((
       <Provider store={store}>
        <App />
    </Provider>
  ), document.getElementById('app'))
 
 if (module.hot) {
 module.hot.accept();
 }