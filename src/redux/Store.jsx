import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import categoryReducer from "./Slices/CategoryImgSlice"; 

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer, 
  },
});

export default Store;
