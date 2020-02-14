import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "router";
import { makeStyles } from "@material-ui/core/styles";

import SideBar from "components/sidebar";
import Header from "components/header";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  },
  container: {
    minHeight: "100vh",
    display: "flex",
    width: "100%"
  }
}));

const App = props => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <div className={classes.container}>
          <SideBar />
          <main>
            <Router />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
