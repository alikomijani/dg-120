import { Card } from "flowbite-react";
import { Product } from "../type";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <Card
      className="w-[200px]"
      renderImage={() => (
        <img width={200} height={200} src="/images/phone.jpg" alt="image 1" />
      )}
    >
      <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
        {product.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400"></p>
    </Card>
  );
}

export default ProductCard;
