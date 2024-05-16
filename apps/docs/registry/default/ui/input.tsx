"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const types = {
  file: "block cursor-pointer p-0 py-0 file:mr-5 file:cursor-pointer file:bg-primary-500 file:px-3 file:py-2.5 file:hover:bg-primary-400 file:disabled:cursor-not-allowed file:disabled:bg-gray-200 file:disabled:text-gray-600 file:text-white file:hover:transition file:hover:ease-in-out file:hover:duration-300 text-sm file:border-0",
}

const inputVariants = cva(
  "aria-[invalid=true]:border-error-500 focus:aria-[invalid=true]:ring-error-500 focus:ring-primary-500 h-10 w-full p-3 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-50",
  {
    variants: {
      variant: {
        default: "bg-background border-input border",
        filled: "border-none bg-gray-100",
      },
      size: {
        default: "h-10 text-base placeholder:text-sm",
        xs: "h-8 text-sm placeholder:text-sm",
        md: "h-10 text-lg placeholder:text-base",
        lg: "h-12 text-xl placeholder:text-lg",
        xl: "h-14 text-2xl placeholder:text-xl",
      },
      radius: {
        default: "rounded-lg",
        rounded: "rounded",
        sm: "rounded-sm",
        md: "rounded-md",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  }
)

type InputHTMLAttributesWithoutSize = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
>

export interface InputProps
  extends InputHTMLAttributesWithoutSize,
    VariantProps<typeof inputVariants> {
  leftSection?: React.ReactNode
  rightSection?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      radius,
      type,
      leftSection,
      rightSection,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative">
        {leftSection && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3">
            {leftSection}
          </div>
        )}

        <input
          type={type}
          className={cn(
            inputVariants({ variant, size, radius }),
            leftSection && "pl-10",
            rightSection && "pr-10",
            type && types[type as keyof typeof types],
            className
          )}
          ref={ref}
          {...props}
        />

        {rightSection && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            {rightSection}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
