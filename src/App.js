import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "router";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "components/sidebar";
import Header from "components/header";
import { CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import { getData } from "containers/actions";

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

const App = ({ getData }) => {
  const classes = useStyles();
  useEffect(() => {
    getData();
  }, [getData]);
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

const mapStateToProps = state => ({
  product: state.product
});

const mapDispatchToProps = { getData };
export default connect(mapStateToProps, mapDispatchToProps)(App);
