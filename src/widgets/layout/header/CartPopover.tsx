import { Popover } from "flowbite-react";
import { PropsWithChildren } from "react";
import ProductCard from "../../../components/ProductCard";
import AddToCartButton from "../../../components/AddToCartButton";
import { useAppSelector } from "../../../hooks";
import { getCart } from "../../../features/cart/cart.slice";
function CartPopover({ children }: PropsWithChildren) {
  const cart = useAppSelector(getCart);
  return (
    <Popover
      aria-labelledby="default-popover"
      content={
        <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
          <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
            <h3
              id="default-popover"
              className="font-semibold text-gray-900 dark:text-white"
            >
              سبد خرید
            </h3>
          </div>
          <div className="px-3 py-2">
            {cart.length === 0 && <h1>سبد خرید شما خالی است</h1>}
            {cart.map((cartItem) => (
              <div key={cartItem.product.id}>
                <ProductCard product={cartItem.product} />
                <AddToCartButton product={cartItem.product} />
              </div>
            ))}
          </div>
        </div>
      }
    >
      {children}
    </Popover>
  );
}

export default CartPopover;
