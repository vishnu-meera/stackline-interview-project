import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Spinner from "hoc/spinner";
import Table from "./items/Table";
import Chart from "./items/Chart";
import { SalesTableCoulmns } from "utils/constants";
import { getLastEntryOfMonth } from "utils/functions";

const useStyles = makeStyles(theme => ({
  productview: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: "15px"
  },
  chart: {
    backgroundColor: "#fff",
    width: "100%",
    boxShadow: "2px 1px 4px -2px rgba(0,0,0,0.72)",
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px"
  },
  chartName: {
    padding: "10px"
  }
}));

const ProductView = ({ product }) => {
  const {
    data: { id, sales }
  } = product;
  const classes = useStyles();

  return (
    <div className={classes.productview} data-test="component-productview">
      {product.data && id ? (
        <React.Fragment>
          <div className={classes.chart}>
            <div className={classes.chartName}>Retail Sales</div>
            <Chart data={getLastEntryOfMonth(sales)} />
          </div>
          <Table columns={SalesTableCoulmns} rows={sales} />
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
