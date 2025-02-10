import React, { ComponentProps } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface CheckBoxInputProps extends ComponentProps<typeof Checkbox> {
  label: string;
}

const CheckBoxInput: React.FC<CheckBoxInputProps> = ({ label, ...props }) => {
  return (
    <div className="flex items-center gap-1">
      <Checkbox id="remember-me" {...props} />
      <label
        htmlFor="remember-me"
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBoxInput;
