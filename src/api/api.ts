import { Category, Product } from "../type";
import Api from "./base";

export async function getCategories() {
  return (await Api.get<Category[]>("/categories")).data;
}

export async function getProducts(params?: { categoryId: string }) {
  return (
    await Api.get<Product[]>("/products", {
      params,
    })
  ).data;
}
