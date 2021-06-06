import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProjectScreen } from "../components/main/ProjectScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={ProjectScreen} />
        </Switch>
      </div>
    </Router>
  );
};
