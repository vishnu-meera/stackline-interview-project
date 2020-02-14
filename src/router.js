import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Product from "./components/productView";

const Router = props => (
  <Switch>
    <Route exact={true} path="/sharkninja" component={Product} />
    <Redirect exact={true} from="/" to="/sharkninja" />
  </Switch>
);

export default Router;
