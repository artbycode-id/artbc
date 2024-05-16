import { Registry } from "@/registry/schema"

export const ui: Registry = [
  {
    name: "alert",
    type: "components:ui",
    files: ["ui/alert.tsx"],
  },
  {
    name: "button",
    type: "components:ui",
    files: ["ui/button.tsx"],
  },
  {
    name: "badge",
    type: "components:ui",
    files: ["ui/badge.tsx"],
  },
  {
    name: "label",
    type: "components:ui",
    files: ["ui/label.tsx"],
  },
  {
    name: "card",
    type: "components:ui",
    files: ["ui/card.tsx"],
  },
  {
    name: "accordion",
    type: "components:ui",
    dependencies: ["@radix-ui/react-accordion"],
    files: ["ui/accordion.tsx"],
  },
  {
    name: "input",
    type: "components:ui",
    files: ["ui/input.tsx"],
  },
]
