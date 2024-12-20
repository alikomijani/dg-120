import { AuthProvider } from "./providers/AuthProvider";
import CartProvider from "./providers/CartProvider";
import QueryProvider from "./providers/QueryProvider";
import Routes from "./widgets/routes";

export default function App() {
  return (
    <AuthProvider>
      <QueryProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </QueryProvider>
    </AuthProvider>
  );
}
