"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { X } from "lucide-react"

import { Badge } from "./badge"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "./command"

type Option = {
  value: number
  label: string
}

interface FancyMultiSelectProps {
  options: Option[]
  notFoundMessage?: string
}

export function FancyMultiSelect({
  options,
  notFoundMessage,
}: FancyMultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<Option[]>([])
  const [inputValue, setInputValue] = React.useState("")

  const handleUnselect = React.useCallback((option: Option) => {
    setSelected((prev) => prev.filter((s) => s.value !== option.value))
  }, [])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev]
              newSelected.pop()
              return newSelected
            })
          }
        }
        if (e.key === "Escape") {
          input.blur()
        }
      }
    },
    []
  )

  const selectables = options.filter((option) => !selected.includes(option))

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent"
    >
      <div className="border-input ring-offset-background focus-within:ring-ring group rounded-md border px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {selected.map((option) => {
            return (
              <Badge
                key={option.value}
                variant="default"
                className="bg-primary-500 text-white"
              >
                {option.label}
                <button
                  className="ring-offset-background focus:ring-ring ml-1 rounded-full outline-none focus:ring-2 focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(option)
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onClick={() => handleUnselect(option)}
                >
                  <X className="text-muted-foreground hover:text-error-400 size-3" />
                </button>
              </Badge>
            )
          })}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Select options..."
            className="placeholder:text-muted-foreground ml-2 flex-1 bg-transparent outline-none"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 ? (
          <div className="bg-popover text-popover-foreground animate-in absolute top-0 z-10 w-full rounded-md border shadow-md outline-none">
            <CommandEmpty>
              {notFoundMessage ? notFoundMessage : "Data Not Found"}
            </CommandEmpty>
            <CommandGroup className="h-full overflow-auto">
              <CommandList>
                {selectables.map((option) => {
                  return (
                    <CommandItem
                      key={option.value}
                      onMouseDown={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                      }}
                      onSelect={() => {
                        setInputValue("")
                        setSelected((prev) => [...prev, option])
                      }}
                      className={"cursor-pointer"}
                    >
                      {option.label}
                    </CommandItem>
                  )
                })}
              </CommandList>
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  )
}
