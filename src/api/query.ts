import { useCallback } from "react";
import { getProducts, getCategoryByID, getProductByID } from "./api";
import { useApi } from "../hooks/useApi";

export function useProducts(params?: { categoryId: string }) {
  const { categoryId } = params || {};
  const getProductsByCategory = useCallback(
    () => getProducts({ categoryId }),
    [categoryId]
  );
  const {
    data: products,
    isError: isErrorProducts,
    isLoading: isLoadingProducts,
  } = useApi(getProductsByCategory);

  return {
    products,
    isErrorProducts,
    isLoadingProducts,
  };
}

export function useCategory(categoryId: string) {
  const useGetCategoryByID = useCallback(
    () => getCategoryByID(categoryId),
    [categoryId]
  );
  const {
    data: category,
    isError: isCategoryError,
    isLoading: isLoadingCategory,
  } = useApi(useGetCategoryByID);

  return {
    category,
    isCategoryError,
    isLoadingCategory,
  };
}

export function useProduct(productId: string) {
  const useGetProductByID = useCallback(
    () => getProductByID(productId),
    [productId]
  );
  const {
    data: product,
    isError: isProductError,
    isLoading: isProductLoading,
  } = useApi(useGetProductByID);

  return {
    product,
    isProductError,
    isProductLoading,
  };
}
