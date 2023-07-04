import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition duration-200 rounded-md cursor-pointer disabled:cursor-not-allowed outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-neutral-primary hover:bg-primary/80 disabled:bg-primary/80",
        outline:
          "border border-input bg-background hover:bg-accent disabled:bg-accent",
        ghost:
          "text-neutral-secondary hover:text-gray/50 disabled:text-gray/50",
        icon: "text-black hover:bg-neutral-shadow disabled:bg-neutral-shadow",
        link: "text-primary underline-offset-4 hover:underline disabled:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        full: "min-w-full px-2",
        icon: "p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
