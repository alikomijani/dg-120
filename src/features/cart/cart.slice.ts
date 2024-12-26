import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "../../type";

const initialValue: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (index === -1) {
        state.push({ product: action.payload, count: 1 });
      } else {
        state[index].count += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (state[index].count <= 1) {
        state.splice(index, 1);
      } else {
        state[index].count -= 1;
      }
    },
  },
  selectors: {
    getCart: (state) => state,
    getProductInCart: (state, id: string) =>
      state.find((i) => i.product.id === id),
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { getCart, getProductInCart } = cartSlice.selectors;
export default cartSlice.reducer;
