
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/productSlice"

export const store =configureStore({
    reducer:{
        product: productReducer,
    }
})


