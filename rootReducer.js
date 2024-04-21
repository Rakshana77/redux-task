// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from "./features/productsSlice"; // Import your products reducer
import cartReducer from './features/cartSlice'; // Import your cart reducer

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  // Add more reducers as needed
});

export default rootReducer;
