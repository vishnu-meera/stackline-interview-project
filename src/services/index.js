const moment = require("moment");
const axios = require("axios");

export async function getProduct(productId) {
  try {
    // const response = await axios.get("http://localhost:4001/product"); // localhost
    const response = await axios.get(
      "https://stackline-api.firebaseapp.com/product"
    );
    const {
      data: { products }
    } = response;
    const product = products.filter(obj => obj.id === productId)[0];
    const { id, title, subtitle, tags, sales, image } = product;
    const salesData = getModifiedData(sales);
    return {
      id,
      title,
      subtitle,
      image,
      tags,
      sales: salesData
    };
  } catch (error) {
    return {
      id: "",
      title: "",
      subtitle: "",
      image: "",
      tags: "",
      sales: [],
      error: error.message
    };
  }
}

const getModifiedData = sales => {
  const returnArr = [];
  const salesArr = sales.slice().sort((a, b) => {
    return new Date(a.weekEnding) - new Date(b.weekEnding);
  });

  for (const obj of salesArr) {
    let month = moment(obj.weekEnding).format("MMM");
    returnArr.push({
      ...obj,
      retail: "$" + obj.retailSales,
      wholesale: "$" + obj.wholesaleSales,
      month,
      margin: "$" + obj.retailerMargin
    });
  }
  return returnArr;
};
