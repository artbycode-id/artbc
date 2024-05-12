import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-8",
      lg: "size-16",
      xl: "size-24",
    },
    variant: {
      light: "text-white",
      primary: "text-primary-500",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
})

export interface SpinnerProps
  extends React.SVGAttributes<SVGSVGElement>,
    VariantProps<typeof spinnerVariants> {}

export const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <>
        <svg
          className={spinnerVariants({ variant, size, className })}
          viewBox="0 0 24 24"
          fill="none"
          ref={ref}
          {...props}
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span className="sr-only">Loading</span>
      </>
    )
  }
)
