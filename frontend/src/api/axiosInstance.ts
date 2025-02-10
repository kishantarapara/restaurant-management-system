import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "@/utils/constants";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
});

axiosInstance.interceptors.request.use((req) => {
  console.log(req);
  return req;
});

axiosInstance.interceptors.response.use(
  (req) => req,
  (error: AxiosError) => {
    if (error.response?.data) {
      return {
        status: error.response?.status,
        statusText: error.response?.statusText,
        message: error.response?.data as string,
      };
    }
    return error;
  }
);

export default axiosInstance;
