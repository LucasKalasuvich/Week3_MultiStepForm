import React from "react";
import ReactDOM from "react-dom/client";
import "./style.module.scss";
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Page from "./Store/Page";
import Slice from "./Store/Slice";
import App from './App';


const store = configureStore({
  reducer:{
    page:Page,
    slice:Slice
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
