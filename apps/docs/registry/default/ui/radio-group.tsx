"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cva, type VariantProps } from "class-variance-authority"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const radioGroupItemVariants = cva(
  "size-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-current disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      color: {
        default:
          "[&[data-state=checked]]:bg-primary-500 [&[data-state=checked]]:border-primary-500 text-white",
        warning:
          "[&[data-state=checked]]:bg-warning-500 [&[data-state=checked]]:border-warning-500 text-white",
        success:
          "[&[data-state=checked]]:bg-success-500 [&[data-state=checked]]:border-success-500 text-white",
        error:
          "[&[data-state=checked]]:bg-error-500 [&[data-state=checked]]:border-error-500 text-white",
        secondary:
          "[&[data-state=checked]]:bg-secondary-500 [&[data-state=checked]]:border-secondary-500 text-white",
      },
    },

    defaultVariants: {
      color: "default",
    },
  }
)

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

type RadioGroupItemProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
> &
  VariantProps<typeof radioGroupItemVariants> & {
    icon?: React.ReactNode
    color?: "primary" | "warning" | "success" | "error" | "secondary"
  }

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, icon, color, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioGroupItemVariants({ color }), className, color)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        {icon ? icon : <Circle className="size-1.5 fill-current text-white" />}
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
