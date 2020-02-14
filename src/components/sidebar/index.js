import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Chart from "@material-ui/icons/BarChart";
import Home from "@material-ui/icons/Home";
import List from "@material-ui/core/List";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: "20%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    height: "90vh",
    margin: "20px 20px 0 20px",
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

const SideBar = () => {
  const classes = useStyles();

  const productInfo = {
    title: "Shark Ninja",
    subtitle:
      "Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System",
    img: "https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg",
    tags: ["Pantry", "Obsolete", "Blender", "Lightning Deal"]
  };

  return (
    <div className={classes.drawer} data-test="component-sidebar">
      <div className={classes.product}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={productInfo.img}
            alt={productInfo.title}
          />
        </div>
        <div className={classes.title}>{productInfo.title}</div>
        <div className={classes.subtitle}>{productInfo.subtitle}</div>
      </div>
      <Divider />
      <div className={classes.tags}>
        {productInfo.tags.map((t, k) => {
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
    </div>
  );
};

export default SideBar;
