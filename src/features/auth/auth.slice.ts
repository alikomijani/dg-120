import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse } from "../../api/auth";

const initialValue: LoginResponse & { isLogin: boolean } = {
  tokens: {
    refreshToken: "",
    accessToken: "",
  },
  user: {
    email: "",
    id: "",
  },
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {
    login: (state, action: PayloadAction<LoginResponse>) => {
      const { user, tokens } = action.payload;
      state.isLogin = true;
      state.user.email = user.email;
      state.user.id = user.id;
      state.tokens.accessToken = tokens.accessToken;
      state.tokens.refreshToken = tokens.refreshToken;
    },
    logout: (state) => {
      state.isLogin = false;
      state.user.email = "";
      state.user.id = "";
      state.tokens.accessToken = "";
      state.tokens.refreshToken = "";
    },
    refreshToken: (state, action: PayloadAction<string>) => {
      state.tokens.accessToken = action.payload;
    },
  },
  selectors: {
    userSelector: (state) => state.user,
    tokensSelector: (state) => state.tokens,
    isLoginSelector: (state) => state.isLogin,
  },
});
export const { login, logout, refreshToken } = authSlice.actions;
export const { isLoginSelector, tokensSelector, userSelector } =
  authSlice.selectors;
export default authSlice.reducer;
