import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "focus:ring-ring leading-wide inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        filled: "bg-primary-500 border-transparent text-white",
        outline: "border-primary-500 bg-background text-primary-500 border",
        dot: "bg-background text-foreground",
      },
      radius: {
        rounded: "rounded",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      size: {
        default: "px-2.5 py-1 text-xs font-medium",
        sm: "px-3 py-1 text-sm font-medium",
        md: "px-4 py-1 text-base font-medium",
        lg: "px-5 py-1 text-lg font-medium",
        xl: "px-6 py-1 text-xl font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  variant,
  radius,
  size,
  children,
  ...props
}: BadgeProps) {
  if (variant === "dot") {
    return (
      <div
        className={cn(badgeVariants({ radius, size }), className)}
        {...props}
      >
        <div className="flex items-center gap-2">
          <div className="bg-primary-500 size-2 rounded-full" />
          {children}
        </div>
      </div>
    )
  }
  return (
    <div
      className={cn(badgeVariants({ variant, radius, size }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
