import CartProvider from "./providers/CartProvider";
import QueryProvider from "./providers/QueryProvider";
import Routes from "./widgets/Routes";

export default function App() {
  return (
    <QueryProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </QueryProvider>
  );
}

/// get =>  /api/products => Products[]
/// get =>  /api/products/id => Product

/// post => /api/products => product
/// put => /api/products/1 => product
/// delete => /api/products/1 =>
