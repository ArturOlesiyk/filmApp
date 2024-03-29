import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {Provider} from "react-redux";
import {store} from './store/store'
import {HashRouter} from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
)