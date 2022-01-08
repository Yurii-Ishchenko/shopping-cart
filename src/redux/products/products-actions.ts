import {
  productsTypes,
  initialProductInterface,
  addProductToCartInterface,
  productIncrementInterface,
  productDecrementInterface,
  deleteProductInterface,
  clearCartInterface,
} from './products-types';

export const addProductToCart = (
  payload: initialProductInterface,
): addProductToCartInterface => {
  return {
    type: productsTypes.ADD_PRODUCT_TO_CART,
    payload,
  };
};

export const productIncrement = (
  payload: string,
): productIncrementInterface => {
  return {
    type: productsTypes.PRODUCT_INCREMENT,
    payload,
  };
};

export const productDecrement = (
  payload: string,
): productDecrementInterface => {
  return {
    type: productsTypes.PRODUCT_DECREMENT,
    payload,
  };
};

export const deleteProduct = (payload: string): deleteProductInterface => {
  return {
    type: productsTypes.DELETE_PRODUCT,
    payload,
  };
};

export const clearCart = (): clearCartInterface => {
  return {
    type: productsTypes.CLEAR_CART,
  };
};
