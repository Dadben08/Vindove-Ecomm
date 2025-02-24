import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import cartReducer from "../store/cartSlice";
import searchReducer from "../store/SearchSlice"; // Import the search slice

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    search: searchReducer, // Add search reducer
  },
});

export default store;
