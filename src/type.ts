export type Category = {
  id: string;
  title: string; // Name of the category
  label: string; // Localized (e.g., Persian) title of the category
};

export type Product = {
  id: string;
  title: string;
  enTitle: string;
  rate: string;
  price: string;
  discount: number;
  views: number;
  categoryId: string; // Links the product to a category
};

export type Comment = {
  id: string;
  text: string;
  user: string;
  postId: string; // Should match the ID of a product
};