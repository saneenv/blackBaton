import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import categoryReducer from "./Slices/CategoryImgSlice"; 
import userReducer from "./Slices/UserSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer, 
    user: userReducer,
  },
});

export default Store;
