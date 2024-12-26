import QueryProvider from "./providers/QueryProvider";
import Routes from "./widgets/routes";
import { Provider } from "react-redux";
import store from "./store";
export default function App() {
  return (
    <Provider store={store}>
      <QueryProvider>
        <Routes />
      </QueryProvider>
    </Provider>
  );
}
