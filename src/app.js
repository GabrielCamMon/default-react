import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import AppRouter, { history } from "./routers/AppRouter";
import { Provider } from "react-redux";


import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);



ReactDOM.render(jsx, document.getElementById("app"));

