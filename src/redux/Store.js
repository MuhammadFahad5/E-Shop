// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "@/redux/counterSlice/counterSlice";

// const store = configureStore({
//   reducer: {
//     // states merged
//     counter: counterReducer,
//   },
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/productSlice"

export const store =configureStore({
    reducer:{
        product: productReducer,
    }
})


