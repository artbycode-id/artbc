"use client"

import * as React from "react"
import Select, { Props as SelectProps } from "react-select"

interface ReactSelectProps extends SelectProps {}

export const MultipleSelect = React.forwardRef<any, ReactSelectProps>(
  ({ ...props }, ref) => {
    const customStyles = {
      multiValue: (provided: any) => ({
        ...provided,
        borderRadius: "9999px",
        backgroundColor: "#177f96",
        padding: "2px 8px",
      }),
      multiValueLabel: (provided: any) => ({
        ...provided,
        color: "#FFFFFF",
      }),
      multiValueRemove: (provided: any) => ({
        ...provided,
        borderRadius: "9999px",
        backgroundColor: "#177f96",
        color: "#FFFFFF",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#cbd5e0",
        },
      }),
    }

    return (
      <Select
        className="rounded-lg"
        classNamePrefix="react-select"
        isMulti
        ref={ref}
        styles={customStyles}
        {...props}
      />
    )
  }
)
