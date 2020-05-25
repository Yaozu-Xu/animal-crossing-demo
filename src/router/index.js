import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage/index";
import FishPage from "../pages/FishIndex/index";

export default function router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route exact path="/fish">
          <FishPage />
        </Route>
      </Switch>
    </Router>
  );
}
