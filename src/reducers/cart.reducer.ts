import { CartItem, Product } from "../type";
import { saveToStorage } from "../utils";

export type CartAction = {
  type: "ADD" | "REMOVE";
  payload: Product;
};
export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  const { type, payload } = action;
  switch (type) {
    case "ADD": {
      const isExist =
        state.findIndex((item) => item.product.id === payload.id) !== -1;
      if (isExist) {
        return saveCartToStorage(
          state.map((item) =>
            item.product.id === payload.id
              ? { ...item, count: item.count + 1 }
              : item
          )
        );
      } else {
        return saveCartToStorage([...state, { product: payload, count: 1 }]);
      }
    }
    case "REMOVE": {
      const item = state.find((item) => item.product.id === payload.id);

      if (!item) {
        throw new Error("wrong product id");
      }
      const shouldRemove = item.count <= 1;
      if (shouldRemove) {
        return saveCartToStorage(
          state.filter((item) => item.product.id !== payload.id)
        );
      }
      return saveCartToStorage(
        state.map((item) =>
          item.product.id === payload.id
            ? { ...item, count: item.count - 1 }
            : item
        )
      );
    }
    default:
      throw new Error("undefined action on cart");
  }
}

function saveCartToStorage(state: CartItem[]): CartItem[] {
  return saveToStorage("cart", state);
}
