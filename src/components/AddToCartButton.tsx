import { Button } from "flowbite-react";
import { Minus, Plus, Trash } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";
import { Product } from "../type";

type Props = { product: Product };

function AddToCartButton({ product }: Props) {
  const { cart, dispatch } = useContext(CartContext);
  const productCartIndex = cart.findIndex(
    (item) => item.product.id === product.id
  );
  return (
    <div>
      {productCartIndex !== -1 ? (
        <Button.Group dir="ltr">
          <Button
            size="sm"
            color="gray"
            onClick={() => dispatch({ type: "REMOVE", payload: product })}
          >
            {cart[productCartIndex].count > 1 ? <Minus /> : <Trash />}
          </Button>
          <Button size="sm" color="gray">
            {cart[productCartIndex].count}
          </Button>
          <Button
            onClick={() =>
              dispatch({
                type: "ADD",
                payload: product,
              })
            }
            size="sm"
            color="gray"
          >
            <Plus />
          </Button>
        </Button.Group>
      ) : (
        <Button
          onClick={() =>
            dispatch({
              type: "ADD",
              payload: product,
            })
          }
        >
          افزودن به سبد خرید
        </Button>
      )}
    </div>
  );
}

export default AddToCartButton;
