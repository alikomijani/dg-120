import { useParams } from "react-router-dom";
import Container from "../../../components/Container";
import { Badge, Card } from "flowbite-react";
import AddToCartButton from "../../../components/AddToCartButton";
import { useProduct } from "../../../api/query";
import CommentsSection from "../../../widgets/CommentsSection";

function ProductSingle() {
  const { productId } = useParams();
  const { data: product, isPending, isError } = useProduct(productId!);
  if (isError) {
    return <h2>خطایی رخ داده است</h2>;
  }
  if (isPending) {
    return <h2>...loading </h2>;
  }
  return (
    <Container>
      <div className="flex mt-5">
        <div className="flex-shrink-0">
          <img className="w-96" src="/images/phone.jpg" alt="" />
        </div>
        <div className="flex-grow">
          <h1 className="font-semibold text-2xl">{product.title}</h1>
          <p className="text-neutral-400">{product.enTitle}</p>
        </div>
        <div className="p-5 pl-0 flex-shrink-0 w-[350px]">
          <Card>
            <div className="flex justify-between items-center">
              <p className="flex-grow">قیمت: </p>
              <div>
                <div className="flex gap-2">
                  <del>{Number(product.price).toLocaleString()}</del>
                  <Badge color="failure">%{product.discount}</Badge>
                </div>
                {productPrice(
                  +product.price,
                  product.discount
                ).toLocaleString()}
              </div>
            </div>
            <AddToCartButton product={product} />
          </Card>
        </div>
      </div>
      <CommentsSection />
    </Container>
  );
}

export default ProductSingle;

const productPrice = (price: number, discount: number) => {
  const discountAmount = (discount * price) / 100;
  return price - discountAmount;
};
