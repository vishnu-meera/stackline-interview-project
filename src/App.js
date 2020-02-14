import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "router";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "components/sidebar";
import Header from "components/header";
import { CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import { getData } from "containers/actions";
import "styles/App.css";
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#f8f8ff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  container: {
    display: "flex",
    marginTop: "30px"
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
