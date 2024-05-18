"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "focus-visible:ring-primary-500 aria-[invalid=true]:border-error-500 focus-visible:aria-[invalid=true]:ring-error-500 flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-background border-input border",
        filled: "border-none bg-gray-100",
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
      radius: "default",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
