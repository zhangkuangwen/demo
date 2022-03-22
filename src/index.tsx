import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./router"
import store from "./redux/store"
import { Provider } from 'react-redux';
import "./incdx.less"
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
); 