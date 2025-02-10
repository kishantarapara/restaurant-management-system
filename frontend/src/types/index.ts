import { AxiosError, HttpStatusCode } from "axios";

export type ApiError =
  | AxiosError
  | {
      status: HttpStatusCode;
      statusText: string;
      message: string;
    };

export interface LoginResponse {
  token: string;
}
