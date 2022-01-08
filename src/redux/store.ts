import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products/products-reducer';

export const store = createStore(
  productsReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
