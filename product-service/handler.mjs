import { getProductsList as getProductsListHandler } from "./handlers/getProductsList.mjs";
import { getProductsById as getProductsByIdHandler } from "./handlers/getProductsById.mjs";

export const getProductsList = getProductsListHandler;
export const getProductsById = getProductsByIdHandler;
