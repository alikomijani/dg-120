import QueryProvider from "./providers/QueryProvider";
import Routes from "./widgets/routes";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryProvider>
          <Routes />
        </QueryProvider>
      </PersistGate>
    </Provider>
  );
}
