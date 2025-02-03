import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, quantity } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ id, name, price, quantity });
      }
      
      state.totalQuantity += quantity;
      state.totalPrice += price * quantity;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find(item => item.id === id);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
