import React from "react";
import stack from "assets/stack.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#FFF",
    color: "#000",
    marginBottom: "10px",
    boxShadow: "2px 1px 4px -2px rgba(0,0,0,0.72)"
  },
  iconContainer: {
    width: "10%",
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
    <div data-test="component-header" className={classes.header}>
      <div className={classes.iconContainer}>
        <img src={stack} className={classes.icon} alt="stackline icon" />
      </div>
    </div>
  );
};

export default Header;
