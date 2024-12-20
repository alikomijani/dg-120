import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";
import { getProfile, login, LoginData, LoginResponse } from "./auth";

export function useLoginMutation(
  options?: UseMutationOptions<LoginResponse, Error, LoginData, unknown>
) {
  return useMutation({
    mutationKey: ["auth"],
    mutationFn: login,
    ...options,
  });
}
export function useProfileQuery() {
  return useQuery({
    queryKey: ["auth"],
    queryFn: getProfile,
  });
}
