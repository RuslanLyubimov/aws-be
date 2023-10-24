import products from "../mock-data/mockData.mjs";

const getProductsList = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};

export { getProductsList };
