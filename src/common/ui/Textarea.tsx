import * as React from "react";

import { cn } from "@/utils/cn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex mt-6 md:mt-12 h-32 w-full border-b-[1px] border-gray bg-white px-1 justify-start text-sm outline-none resize-none rounded-none",
          className
        )}
        ref={ref}
        minLength={8}
        maxLength={300}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
