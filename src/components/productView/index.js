import React from "react";
import { connect } from "react-redux";

const ProductView = ({ product }) => {
  console.log("product : ", product);
  return <div className="monitor">charts</div>;
};

const mapStateToProps = state => ({
  product: state.product
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
