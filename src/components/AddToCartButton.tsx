import { Button } from "flowbite-react";
import { Minus, Plus, Trash } from "lucide-react";
import { Product } from "../type";
import {
  addToCart,
  removeFromCart,
  getProductInCart,
} from "../features/cart/cart.slice";
import { useAppSelector, useAppDispatch } from "../hooks";

type Props = { product: Product };

function AddToCartButton({ product }: Props) {
  const cartItem = useAppSelector((state) =>
    getProductInCart(state, product.id)
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      {cartItem ? (
        <Button.Group dir="ltr">
          <Button
            size="sm"
            color="gray"
            onClick={() => dispatch(removeFromCart(product))}
          >
            {cartItem.count > 1 ? <Minus /> : <Trash />}
          </Button>
          <Button size="sm" color="gray">
            {cartItem.count}
          </Button>
          <Button
            onClick={() => dispatch(addToCart(product))}
            size="sm"
            color="gray"
          >
            <Plus />
          </Button>
        </Button.Group>
      ) : (
        <Button onClick={() => dispatch(addToCart(product))}>
          افزودن به سبد خرید
        </Button>
      )}
    </div>
  );
}

export default AddToCartButton;
