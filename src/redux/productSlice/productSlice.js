

import { createSlice } from "@reduxjs/toolkit";


const initialState = []

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    // addProduct(state, action) {
    //   state.push(action.payload)
    // },
    addProduct(state, action) {
      const existingProduct = state.find(product => product.id === action.payload.id);
      if (!existingProduct) {
        state.push(action.payload);
      }
    },
    deleteProduct(state, action) {
      return state.filter(product => product.id !== action.payload);
    },
  },
});

export default product.reducer;

export const { addProduct, deleteProduct} = product.actions;

