import {
  productsTypes,
  productsActionType,
  productInterface,
  initialProductInterface,
} from './products-types';

const productsReducer = (
  state: productInterface[] = [],
  action: productsActionType,
): productInterface[] => {
  switch (action.type) {
    case productsTypes.ADD_PRODUCT_TO_CART:
      return [
        ...state,
        {
          ...(action.payload as initialProductInterface),
          quantity: 1,
        },
      ];
    case productsTypes.PRODUCT_INCREMENT:
      return state.map(product =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );
    case productsTypes.PRODUCT_DECREMENT:
      return state.map(product =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      );

    case productsTypes.DELETE_PRODUCT:
      return state.filter(product => product.id !== action.payload);
    case productsTypes.CLEAR_CART:
      return [];
    default:
      return state;
  }
};
export default productsReducer;

export type RootState = ReturnType<typeof productsReducer>;
