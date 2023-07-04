import * as React from "react";

import { cn } from "@/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 mt-6 md:mt-12 w-full rounded-none border-b-[1px] border-gray bg-white px-1 justify-start text-sm outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
