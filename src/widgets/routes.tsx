import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "../pages/Home";
import CategorySingle from "../pages/category/[categoryId]/Page";
import ProductSingle from "../pages/products/[productId]/Page";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ProfileLayout from "./ProfileLayout/ProfileLayout";
type Props = {};

function Routes({}: Props) {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories/:categoryId" element={<CategorySingle />} />
          <Route path="products/:productId" element={<ProductSingle />} />
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
          </Route>
        </Route>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
