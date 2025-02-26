import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import cartReducer from "../store/cartSlice";
import searchReducer from "../store/SearchSlice"; // Import the search slice
import filterReducer from "../store/filterSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    search: searchReducer, // Add search reducer
    filter: filterReducer,
  },
});

export default store;
