import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import RegisterAgentPage from "views/RegisterAgentPage/RegisterAgentPage.js";
import ProfileAgentPage from "views/ProfileAgentPage/ProfileAgentPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage.js";
// import ProfileAgentPage from "views/RegisterPage/ProfileAgentPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/register-page" component={RegisterPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/profile-agent-page" component={ProfileAgentPage} />
      <Route path="/register-agent-page" component={RegisterAgentPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
