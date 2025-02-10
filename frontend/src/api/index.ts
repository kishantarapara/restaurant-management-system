import axiosInstance from "./axiosInstance";

export const login = (username: string, password: string) => {
  return axiosInstance.post("/auth/login", { username, password });
};
