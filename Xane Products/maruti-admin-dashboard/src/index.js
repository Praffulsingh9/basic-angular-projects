import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "./layouts/Auth/Auth";
import AdminLayout from "./layouts/Admin/Admin";
import { Provider } from "react-redux";
import { configureStore } from "./store/store";
import { App } from "./containers/App/App";

import "./assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "./assets/scss/black-dashboard-pro-react.scss?v=1.1.0";
import "./assets/demo/demo.css";

const hist = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={hist}>
      <App hist={hist}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
