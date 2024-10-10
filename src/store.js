// src/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Named import
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import cartReducer from './reducers/cartReducer';
import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  product: productDetailsReducer,
  cart: cartReducer,
  user: userReducer,
});

// Middleware
const middleware = [thunk];

// Create the store with middleware
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

export default store;
