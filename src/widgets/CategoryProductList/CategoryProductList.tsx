import { Category } from "../../type";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../api/query";

type Props = {
  category: Category;
};

function CategoryProductList({ category }: Props) {
  const { products, isErrorProducts, isLoadingProducts } = useProducts({
    categoryId: category.id,
  });
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
