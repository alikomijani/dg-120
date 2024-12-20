import { createContext, PropsWithChildren, useState } from "react";
import { LoginResponse } from "../api/auth";
import { deleteFromStorage, getFromStorage, saveToStorage } from "../utils";

type AuthContextType = Partial<LoginResponse> & {
  login: (data: LoginResponse) => void;
  logout: () => void;
  isLogin: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  tokens: undefined,
  user: undefined,
  login: () => {},
  logout: () => {},
  isLogin: false,
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<Partial<LoginResponse>>(() =>
    getFromStorage("auth", {
      tokens: undefined,
      user: undefined,
    })
  );
  const login = (data: LoginResponse) => {
    setState(data);
    saveToStorage("auth", data);
  };
  const logout = () => {
    setState({ tokens: undefined, user: undefined });
    deleteFromStorage("auth");
  };
  const isLogin = !!state.tokens?.refreshToken;
  return (
    <AuthContext.Provider value={{ ...state, login, logout, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
