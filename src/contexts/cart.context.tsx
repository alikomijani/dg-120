import { createContext, PropsWithChildren, useReducer } from "react";
import { CartAction, cartReducer } from "../reducers/cart.reducer";
import { CartItem } from "../type";

export const CartContext = createContext<{
  cart: CartItem[];
  dispatch: React.Dispatch<CartAction>;
}>({
  cart: [],
  dispatch: () => {},
});

function CartProvider({ children }: PropsWithChildren) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;
