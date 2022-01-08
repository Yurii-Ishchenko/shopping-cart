import { productInterface } from './products-types';

export const getAllProducts = (state: productInterface[]) => state;
export const getAllProductsQuantity = (state: productInterface[]) => {
  const allProducts = getAllProducts(state);

  return allProducts.reduce((acc, product) => product.quantity + acc, 0);
};

export const getProductsWithoutPapaya = (state: productInterface[]) => {
  const products = getAllProducts(state);
  return products.filter(product => product.title !== 'Papaya');
};

export const getPapaya = (state: productInterface[]) => {
  const products = getAllProducts(state);
  return products.find(product => product.title === 'Papaya');
};
export const getPapayaPrice = (state: productInterface[]) => {
  const papaya = getPapaya(state);
  return papaya
    ? papaya.quantity * papaya.price - Math.floor(papaya.quantity / 3) * 5
    : 0;
};

export const getTotalProductPriceWithoutPapaya = (
  state: productInterface[],
) => {
  const productsWithoutPapaya = getProductsWithoutPapaya(state);
  return productsWithoutPapaya.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );
};
export const getTotalProductPrice = (state: productInterface[]) => {
  const totalProductPriceWithoutPapaya =
    getTotalProductPriceWithoutPapaya(state);
  const papayaPrice = getPapayaPrice(state);
  return totalProductPriceWithoutPapaya + papayaPrice;
};
