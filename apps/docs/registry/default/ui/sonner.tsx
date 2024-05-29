"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-foreground",
          actionButton:
            "group-[.toast]:bg-primary-500 group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-white group-[.toast]:text-foreground",
          icon: "group-data-[type=error]:text-error-500 group-data-[type=success]:text-success-500 group-data-[type=warning]:text-warning-500 group-data-[type=info]:text-blue-500",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
