"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cva, VariantProps } from "class-variance-authority"
import { Check, Minus } from "lucide-react"

import { cn } from "@/lib/utils"

const checkBoxVariants = cva(
  "ring-offset-background focus-visible:ring-ring data-[state=checked]:text-foreground peer size-4 shrink-0 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      radius: {
        default: "rounded-sm",
        rounded: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      color: {
        default:
          "data-[state=checked]:bg-primary-500 data-[state=checked]:text-white",
        error:
          "data-[state=checked]:bg-error-500 data-[state=checked]:text-white",
        success:
          "data-[state=checked]:bg-success-500 data-[state=checked]:text-white",
        warning:
          "data-[state=checked]:bg-warning-500 data-[state=checked]:text-white",
        secondary:
          "data-[state=checked]:bg-secondary-500 data-[state=checked]:text-white",
      },
    },
    defaultVariants: {
      radius: "default",
      color: "default",
    },
  }
)

interface CheckboxProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
      "color"
    >,
    VariantProps<typeof checkBoxVariants> {
  icon?: React.ReactNode
  indeterminate?: boolean
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, radius, color, icon, indeterminate, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkBoxVariants({ radius, color }), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      {indeterminate ? (
        <Minus className="size-4" />
      ) : icon ? (
        icon
      ) : (
        <Check className="size-4" />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
