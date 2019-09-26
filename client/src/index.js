import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Auth from './Auth';
import store from "./Store/store";

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <Auth />
    </Provider>
  </BrowserRouter>
);
ReactDOM.render(app, document.getElementById("root"));


