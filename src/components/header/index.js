import React from "react";
import AppBar from "@material-ui/core/AppBar";
import stack from "assets/stack.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    backgroundColor: "#FFF",
    color: "#000"
  },
  iconContainer: {
    width: "15%",
    padding: "14px"
  },
  icon: {
    width: "100%",
    height: "auto"
  }
}));

const Header = props => {
  const classes = useStyles();
  return (
    <AppBar data-test="component-header" className={classes.header}>
      <div className={classes.iconContainer}>
        <img src={stack} className={classes.icon} />
      </div>
    </AppBar>
  );
};

export default Header;
