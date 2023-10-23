import { mockData } from "../mock-data/mockData";

const getProductsList = async (event) => {
  console.log("Event error___ :", event);
  return {
    statusCode: 200,
    body: JSON.stringify(mockData),
  };
};

export { getProductsList as handler };
