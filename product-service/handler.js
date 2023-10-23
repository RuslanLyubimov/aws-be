const mockData = require("./mock-data/mockData");

module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(mockData.products),
  };
};
