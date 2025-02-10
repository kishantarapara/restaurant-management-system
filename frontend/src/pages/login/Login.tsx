import React, { useState } from "react";

import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";
import LoginForm from "./LoginForm";
import { login } from "@/api";
import { ApiError, LoginResponse } from "@/types";
import { loginUser } from "@/utils";

const LoginPage: React.FC = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (username: string, password: string) => {
    console.log(username, password);
    try {
      const resp = await login(username, password);
      const data = resp.data as LoginResponse;
      loginUser(data);
    } catch (err) {
      const apiError = err as ApiError;
      if (apiError.message) {
        setError(apiError.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-background">
      <div className="max-w-md w-full space-y-8 bg-card p-10 rounded-lg shadow-lg border border-border">
        <LoginHeader />
        <LoginForm error={error} onSubmit={handleSubmit} />
      </div>
      <LoginFooter />
    </div>
  );
};

export default LoginPage;
