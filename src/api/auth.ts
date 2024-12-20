import Api from "./base";

export interface LoginData {
  username: string;
  password: string;
}
export interface LoginResponse {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  user: {
    id: string;
    username: string;
    email: string;
  };
}
export async function login(data: LoginData) {
  const res = await Api.post<LoginResponse>(
    "http://localhost:8000/auth/login",
    data
  );
  return res.data;
}
export async function getProfile() {
  const res = await Api.get<LoginResponse["user"]>(
    "http://localhost:8000/auth/profile"
  );
  return res.data;
}
