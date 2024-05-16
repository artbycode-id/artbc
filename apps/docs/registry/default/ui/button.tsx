"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { Spinner } from "./spinner"

const buttonVariants = cva(
  "border-input focus-visible:outline-primary-500 inline-flex items-center justify-center whitespace-nowrap rounded-md border text-sm font-medium focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 enabled:hover:opacity-80  disabled:cursor-not-allowed disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "bg-background border-input",
        filled: "bg-primary-500 border-primary-500 text-white",
        transparent: "text-primary-500 border-none bg-transparent",
        outline: "border-primary-500 text-primary-500 bg-background",
      },
      size: {
        default: "px-4 py-2 text-sm",
        xs: "p-2 text-sm",
        md: "px-6 py-2 text-base",
        lg: "px-8 py-3 text-lg",
        xl: "px-10 py-4 text-xl",
      },
      radius: {
        default: "rounded-md",
        rounded: "rounded",
        sm: "rounded-sm",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      radius: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      className,
      variant,
      size,
      radius,
      loading,
      disabled,
      icon = <Spinner size="sm" className="mr-2 text-current" />,
      children,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : "button"
    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, size, radius }), className)}
        disabled={loading || disabled}
        {...props}
      >
        {loading && icon}
        {children}
      </Component>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
