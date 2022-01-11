import { productInterface } from './products-types';
import { getPriceFn } from '../../utils/getPriceFn';

export const getAllProducts = (state: productInterface[]) => state;
export const getAllProductsQuantity = (state: productInterface[]) => {
  const allProducts = getAllProducts(state);

  return allProducts.reduce((acc, product) => product.quantity + acc, 0);
};

export const getTotalProductPrice = (state: productInterface[]) => {
  const allProducts = getAllProducts(state);
  return allProducts.reduce((acc, product) => getPriceFn(product) + acc, 0);
};
