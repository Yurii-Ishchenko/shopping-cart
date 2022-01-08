export interface productInterface {
  id: string;
  title: string;
  url: string;
  price: number;
  quantity: number;
}
export interface initialProductInterface {
  id: string;
  title: string;
  url: string;
  price: number;
  priceTagsUrl: string | null;
}

export enum productsTypes {
  ADD_PRODUCT_TO_CART = 'products/addProductToCart',
  PRODUCT_INCREMENT = 'products/productIncrement',
  PRODUCT_DECREMENT = 'products/productDecrement',
  DELETE_PRODUCT = 'products/deleteProduct',
  CLEAR_CART = 'products/clearCart',
}

export interface addProductToCartInterface {
  type: productsTypes.ADD_PRODUCT_TO_CART;
  payload: initialProductInterface;
}

export interface productIncrementInterface {
  type: productsTypes.PRODUCT_INCREMENT;
  payload: string;
}

export interface productDecrementInterface {
  type: productsTypes.PRODUCT_DECREMENT;
  payload: string;
}

export interface deleteProductInterface {
  type: productsTypes.DELETE_PRODUCT;
  payload: string;
}

export interface clearCartInterface {
  type: productsTypes.CLEAR_CART;
}
export type productsActionType =
  | addProductToCartInterface
  | productIncrementInterface
  | productDecrementInterface
  | clearCartInterface
  | deleteProductInterface;
