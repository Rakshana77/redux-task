
import { createSlice } from '@reduxjs/toolkit';
import jsonData from '../product.json';

const initialState = {
  products: jsonData.products,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const selectAllProducts = state => state.products.products;

export default productsSlice.reducer;
