import React, { ComponentProps } from "react";
import { Input } from "@/components/ui/input";

interface InputFieldProps extends ComponentProps<typeof Input> {
  icon: React.ReactNode;
  error?: string;
}

export const TextInput: React.FC<InputFieldProps> = ({
  icon,
  error,
  ...props
}) => (
  <div>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <Input
        className="block w-full pl-10 pr-3 py-2.5 border focus:outline-none focus:ring focus:ring-primary"
        {...props}
      />
    </div>
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
);
