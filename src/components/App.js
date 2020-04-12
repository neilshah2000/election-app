import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout";

export default function App() {

  return (
    <HashRouter>
      <Switch>
        <Route path='*' component={Layout} />
      </Switch>
    </HashRouter>
  );

}
