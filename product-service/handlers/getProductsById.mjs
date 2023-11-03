import products from "../mock-data/mockData.mjs";

const getProductsById = async (event) => {
  const { id } = event.pathParameters;
  const findProduct = products.find((product) => product.id === id);

  if (!findProduct) {
    return {
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ message: "Product not found" }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(findProduct),
  };
};

export { getProductsById };
