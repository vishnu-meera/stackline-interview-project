import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Charts from "./components/charts";

const Router = props => (
  <Switch>
    <Route exact={true} path="/charts" component={Charts} />
    <Redirect exact={true} from="/traffic/campaigns" to="/traffic" />
    <Redirect exact={true} from="/" to="/charts" />
  </Switch>
);

export default Router;
