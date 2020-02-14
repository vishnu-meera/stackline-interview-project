import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Chart from "@material-ui/icons/BarChart";
import Home from "@material-ui/icons/Home";
import List from "@material-ui/core/List";
import { connect } from "react-redux";
import Spinner from "hoc/spinner";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: "22%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    height: "85vh",
    margin: "0 15px 0 15px",
    boxShadow: "2px 1px 4px -2px rgba(0,0,0,0.72)",
    padding: "10px"
  },
  product: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: "10px"
  },
  imageContainer: {
    width: "65%"
  },
  image: {
    width: "100%",
    height: "auto"
  },
  title: {
    fontSize: "18px",
    fontWeight: "700",
    padding: "10px"
  },
  subtitle: {
    fontSize: "12px",
    fontWeight: "400",
    width: "90%",
    color: "#b3aaaa",
    letterSpacing: "1.2px"
  },
  tags: {
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  tag: {
    padding: "5px 10px 5px 10px",
    border: ".01px solid #b3aaaa",
    fontSize: "11px",
    borderRadius: "4px",
    marginRight: "10px",
    marginTop: "10px"
  }
}));

const SideBar = ({ product }) => {
  const { data } = product;
  const classes = useStyles();

  return (
    <div className={classes.drawer} data-test="component-sidebar">
      {data && data.id ? (
        <React.Fragment>
          <div className={classes.product}>
            <div className={classes.imageContainer}>
              <img
                className={classes.image}
                src={data.image}
                alt={product.title}
              />
            </div>
            <div className={classes.title}>{data.title}</div>
            <div className={classes.subtitle}>{data.subtitle}</div>
          </div>
          <Divider />
          <div className={classes.tags}>
            {data.tags.map((t, k) => {
              return (
                <div className={classes.tag} key={k}>
                  {t}
                </div>
              );
            })}
          </div>
          <Divider />
          <List>
            {["Overview", "Sales"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {text === "Overview" ? (
                    <Home style={{ color: "skyblue" }} />
                  ) : (
                    <Chart style={{ color: "skyblue" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </React.Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

// export default SideBar; // for testing without redux

const mapStateToProps = state => ({
  product: state.product
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
