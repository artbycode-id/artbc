"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const accordionVariants = cva("px-4", {
  variants: {
    variant: {
      default: "border-input [&>div#accordion-item]:border-b",
      contained: "border-input divide-input divide-y border",
      transparent: "",
    },
    radius: {
      default: "rounded-lg",
      xs: "rounded",
      sm: "rounded-sm",
      md: "rounded-md",
      xl: "rounded-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    radius: "default",
  },
})

type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> &
  VariantProps<typeof accordionVariants>

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, variant, radius, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(accordionVariants({ variant, radius }), className)}
    {...props}
  />
))
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    id="accordion-item"
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  chevronPosition?: "left" | "right"
  rotate?: "45" | "90" | "180"
  icon?: React.ReactNode
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(
  (
    {
      className,
      children,
      chevronPosition = "right",
      rotate = "180",
      icon = <ChevronDown className="size-5" />,
      ...props
    },
    ref
  ) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between py-4 font-medium transition-all data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 [&[data-state=open]>svg]:rotate-180",
          chevronPosition == "left" && "",
          rotate === "45" && `[&[data-state=open]>svg]:rotate-45`,
          rotate === "90" && `[&[data-state=open]>svg]:rotate-90`,
          rotate === "180" && `[&[data-state=open]>svg]:rotate-180`,
          className
        )}
        {...props}
      >
        {chevronPosition === "left" && icon}
        <div
          className={cn("flex-1 text-left", {
            "ml-3": chevronPosition === "left",
          })}
        >
          {children}
        </div>
        {chevronPosition === "right" && icon}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
