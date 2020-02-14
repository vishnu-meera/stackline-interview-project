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

    return {
      id,
      title,
      subtitle,
      image,
      tags,
      sales
    };
  } catch (error) {
    return {
      id: "",
      title: "",
      subtitle: "",
      image: "",
      tags: "",
      sales: "",
      error: error.message
    };
  }
}
