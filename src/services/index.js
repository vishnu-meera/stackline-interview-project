const axios = require("axios");

export async function getProduct() {
  let response = await axios.get("http://localhost:4001/products");
  console.log(response);
  return response.data[0];
}
