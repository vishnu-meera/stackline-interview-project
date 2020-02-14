import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Spinner from "hoc/spinner";
import Table from "./items/Table";
import Chart from "./items/Chart";
import { SalesTableCoulmns } from "utils/constants";
import moment from "moment";
const useStyles = makeStyles(theme => ({
  productview: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    justifyContent: "space-around",
    alignItems: "center"
  },
  chart: {
    backgroundColor: "#fff",
    width: "100%",
    boxShadow: "2px 1px 4px -2px rgba(0,0,0,0.72)",
    display: "flex",
    flexDirection: "column"
  },
  chartName: {
    padding: "10px"
  }
}));

const getModifiedData = sales => {
  return sales.map(obj => {
    return {
      ...obj,
      retail: "$" + obj.retailSales,
      wholesale: "$" + obj.wholesaleSales,
      month: moment(obj.weekEnding).format("MMM"),
      margin: "$" + obj.retailerMargin
    };
  });
};

const ProductView = ({ product }) => {
  const {
    data: { id, sales }
  } = product;
  console.log("product : ", id);
  const classes = useStyles();

  return (
    <div className={classes.productview} data-test="component-productview">
      {product.data && id ? (
        <React.Fragment>
          <div className={classes.chart}>
            <div className={classes.chartName}>Retail Sales</div>
            <Chart data={getModifiedData(sales)} />
          </div>
          <Table columns={SalesTableCoulmns} rows={getModifiedData(sales)} />
        </React.Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  product: state.product
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
