import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategorySingle from "./pages/category/[categoryId]/Page";
import ProductSingle from "./pages/products/[productId]/Page";
import Layout from "./widgets/layout/Layout";
import CartProvider from "./contexts/cart.context";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="categories/:categoryId" element={<CategorySingle />} />
            <Route path="products/:productId" element={<ProductSingle />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}
