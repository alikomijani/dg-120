import { Comment } from "../type";
import {
  getProducts,
  getCategoryByID,
  getProductByID,
  getProductComments,
  getCategories,
  createComment,
} from "./api";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";

export function useProducts(params?: { categoryId: string }) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => getProducts(params),
  });
}
export function useCategoriesQuery() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
}
export function useCategory(categoryID: string) {
  return useQuery({
    queryKey: ["categories", categoryID],
    queryFn: () => getCategoryByID(categoryID),
  });
}

export function useProduct(productID: string) {
  return useQuery({
    queryKey: ["products", productID],
    queryFn: () => getProductByID(productID),
  });
}

export function useProductCommentsQuery(
  productId: string,
  options?: UseQueryOptions<Comment[], Error, Comment[], string[]>
) {
  return useQuery({
    queryKey: ["comments", productId],
    queryFn: () => getProductComments({ productId }),
    enabled: !!productId,
    ...options,
  });
}

export function useCommentMutation(
  options?: UseMutationOptions<Comment, Error, Omit<Comment, "id">, unknown>
) {
  const queryClient = useQueryClient();
  const { onSuccess, ...rest } = options || {};
  return useMutation({
    mutationFn: createComment,
    onSuccess(data, variable, context) {
      queryClient.setQueryData<Comment[]>(
        ["comments", data.productId],
        (existData) => {
          if (!existData) {
            return existData;
          }
          return [data, ...existData];
        }
      );
      onSuccess?.(data, variable, context);
    },
    ...rest,
  });
}
