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
    username: "",
  },
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {
    login: (state, action: PayloadAction<LoginResponse>) => {
      state = { ...action.payload, isLogin: true };
    },
    logout: (state) => {
      state = initialValue;
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
