import { jwtDecode } from "jwt-decode";
import { LoginResponse } from "@/types";

export const loginUser = (data: LoginResponse) => {
  const decoded = jwtDecode(data.token);
  console.log(decoded);
  localStorage.setItem("auth-token", data.token);
};
