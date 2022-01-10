import { productInterface } from './products-types';

export const getAllProducts = (state: productInterface[]) => state;
export const getAllProductsQuantity = (state: productInterface[]) => {
  const allProducts = getAllProducts(state);

  return allProducts.reduce((acc, product) => product.quantity + acc, 0);
};

export const getTotalProductPrice = (state: productInterface[]) => {
  const allProducts = getAllProducts(state);
  return allProducts.reduce(
    (acc, product) =>
      product.promotion
        ? product.quantity * product.price -
          Math.floor(product.quantity / product.promotion.discountedKg) *
            product.promotion.discountQantity +
          acc
        : product.quantity * product.price + acc,
    0,
  );
};
