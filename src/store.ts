import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cart.slice";
import authReducer from "./features/auth/auth.slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
