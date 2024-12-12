import { useCallback } from "react";
import { getProducts } from "../../api/api";
import { useApi } from "../../hooks/useApi";
import { Category } from "../../type";
import ProductCard from "../../components/ProductCard";

type Props = {
  category: Category;
};

function CategoryProductList({ category }: Props) {
  const getProductsByCategory = useCallback(
    () =>
      getProducts({
        categoryId: category.id,
      }),
    [category.id]
  );
  const {
    data: products,
    isError: isErrorProducts,
    isLoading: isLoadingProducts,
  } = useApi(getProductsByCategory);
  return (
    <div className="border rounded-md p-2 shadow-md" key={category.id}>
      <h2>{category.label}</h2>
      <div className="flex mt-2 p-2 gap-4 overflow-auto *:flex-shrink-0">
        {products
          ?.filter((p) => p.categoryId === category.id)
          .map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
      </div>
    </div>
  );
}

export default CategoryProductList;
