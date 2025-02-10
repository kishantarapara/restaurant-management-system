import React from "react";
import Logo from "@/components/logo";

const LoginHeader: React.FC = () => (
  <div className="text-center">
    <Logo />
    <h2 className="mt-6 text-3xl font-bold text-primary">Welcome back</h2>
    <p className="mt-2 text-sm text-muted-foreground">
      Please sign in to your account
    </p>
  </div>
);

export default LoginHeader;
