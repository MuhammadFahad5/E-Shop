

import { createSlice } from "@reduxjs/toolkit";


const initialState = []

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload)
    },
    deleteProduct(state, action) {
      return state.filter(product => product.id !== action.payload);
      // state.pop()
    },
  },
});

export default product.reducer;

export const { addProduct, deleteProduct} = product.actions;

