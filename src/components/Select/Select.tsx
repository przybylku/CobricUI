import { useState } from "react";
import { SelectProps } from "./Select.types";
import React from "react";

/**
 * @returns {JSX.Element} Classic Html Select component
 * @author Cobric / przybylku
 */
export default function ClassicSelect({
  name,
  options,
  placeholder,
}: SelectProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <select
      name={name}
      id="cobric-select"
      data-testid="cobric-test-select"
      className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
    >
      {!placeholder && !options && (
        <option value={""} disabled>
          Nothing to select ;c
        </option>
      )}
      {placeholder && (
        <option value={""} disabled selected>
          {placeholder}
        </option>
      )}
      {options &&
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
}

/**
 *
 * @returns {JSX.Element} Custom Select component
 */
export function CustomSelect() {
  return <></>;
}
