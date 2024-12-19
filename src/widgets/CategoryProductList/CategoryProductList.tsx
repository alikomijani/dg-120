import { Category } from "../../type";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../api/query";

type Props = {
  category: Category;
};

function CategoryProductList({ category }: Props) {
  const {
    data: products,
    isError,
    isPending,
  } = useProducts({
    categoryId: category.id,
  });
  if (isPending) {
    return <>loading</>;
  }
  if (isError) {
    return <>error</>;
  }
  return (
    <div className="border rounded-md p-2 shadow-md" key={category.id}>
      <h2>{category.label}</h2>
      <div className="flex mt-2 p-2 gap-4 overflow-auto *:flex-shrink-0">
        {products?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProductList;
