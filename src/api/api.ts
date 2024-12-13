import { Category, Product } from "../type";
import Api from "./base";

export async function getCategories() {
  const res = await Api.get<Category[]>("/categories");
  return res.data;
}
export async function getCategoryByID(id: string) {
  const res = await Api.get<Category>("/categories/" + id);
  return res.data;
}

export async function getProducts(params?: { categoryId?: string }) {
  return (
    await Api.get<Product[]>("/products", {
      params,
    })
  ).data;
}
export async function getProductByID(id: string) {
  const res = await Api.get<Product>("/products/" + id);
  return res.data;
}
