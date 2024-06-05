"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sliderRangeVariants = cva("absolute h-full", {
  variants: {
    color: {
      default: "bg-primary-500",
      warning: "bg-warning-500",
      success: "bg-success-500",
      error: "bg-error-500",
      secondary: "bg-secondary-500",
    },
  },
  defaultVariants: {
    color: "default",
  },
})

const sliderThumbVariants = cva(
  "bg-background ring-offset-background block size-5 cursor-pointer border-4 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 [&[data-disabled]]:cursor-not-allowed",
  {
    variants: {
      color: {
        default: "border-primary-500 focus-visible:ring-primary-500",
        warning: "border-warning-500 focus-visible:ring-warning-500",
        success: "border-success-500 focus-visible:ring-success-500",
        error: "border-error-500 focus-visible:ring-error-500",
        secondary: "border-secondary-500 focus-visible:ring-secondary-500",
      },
      radius: {
        default: "rounded-full",
        rounded: "rounded",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      color: "default",
      radius: "default",
    },
  }
)

type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> &
  VariantProps<typeof sliderRangeVariants> & {
    color?: "default" | "warning" | "success" | "error" | "secondary"
  } & VariantProps<typeof sliderThumbVariants> & {
    color?: "default" | "warning" | "success" | "error" | "secondary"
  }

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, color, radius, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center [&[data-disabled]]:cursor-not-allowed [&[data-disabled]]:opacity-50",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow cursor-pointer overflow-hidden rounded-full bg-gray-200 [&[data-disabled]]:cursor-not-allowed">
      <SliderPrimitive.Range className={cn(sliderRangeVariants({ color }))} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(sliderThumbVariants({ color, radius }))}
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
