import React, { useState } from "react";
import { IoLogIn } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/Inputs/TextInput";

interface LoginFormProps {
  error: string;
  onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ error, onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-4 text-primary">
        <TextInput
          type="text"
          placeholder="Username"
          icon={<FaUser />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="Password"
          icon={<FaLock />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <span className="text-xs text-red-500">{error}</span>
      <div className="flex items-center justify-end">
        <div className="text-sm">
          <a href="#" className="text-primary hover:text-muted-foreground">
            Forgot your password?
          </a>
        </div>
      </div>
      <Button
        type="submit"
        className="w-full py-2.5 bg-primary text-primary-foreground hover:bg-secondary"
      >
        <IoLogIn />
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;
