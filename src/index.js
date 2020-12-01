import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// Pages for "Honduras Conecta"
// import Components from "views/Components/Components.js";
import RegisterAgentPage from "views/RegisterAgentPage/RegisterAgentPage.js";
import ProfileAgentPage from "views/ProfileAgentPage/ProfileAgentPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginUserPage from "views/LoginUserPage/LoginUserPage.js";
import LoginAgentPage from "views/LoginAgentPage/LoginAgentPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage.js";
import EditUserPage from "views/EditUserPage/EditUserPage.js";
import EditAgentPage from "views/EditAgentPage/EditAgentPage.js";

// import ProfileAgentPage from "views/RegisterPage/ProfileAgentPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/user/register" component={RegisterPage} />
      <Route path="/user/profile" component={ProfilePage} />
      <Route path="/user/edit" component={EditUserPage} />
      <Route path="/user/login" component={LoginUserPage} />

      <Route path="/agent/register" component={RegisterAgentPage} />
      <Route path="/agent/profile" component={ProfileAgentPage} />
      <Route path="/agent/edit" component={EditAgentPage} />
      <Route path="/agent/login" component={LoginAgentPage} />

      {/* <Route path="/" component={Components} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
