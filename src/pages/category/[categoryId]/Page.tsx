import { useCategory, useProducts } from "../../../api/query";
import Container from "../../../components/Container";
import ProductCard from "../../../components/ProductCard";
import { useParams } from "react-router-dom";

const CategorySingle = () => {
  const { categoryId } = useParams();

  const {
    data: category,
    isError: isCategoryError,
    isPending: isLoadingCategory,
  } = useCategory(categoryId!);
  const {
    data: products,
    isPending: isLoadingProducts,
    isError: isErrorProducts,
  } = useProducts({
    categoryId: categoryId!,
  });
  const isError = isErrorProducts || isCategoryError;
  const isLoading = isLoadingCategory || isLoadingProducts;
  return (
    <Container>
      {isError && <div>مشکلی پیش آمده</div>}
      {isLoading && <div>در حال بارگذاری</div>}
      {category?.label} {category?.title}
      <div className="flex gap-2 mt-2">
        {products?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </Container>
  );
};

export default CategorySingle;
