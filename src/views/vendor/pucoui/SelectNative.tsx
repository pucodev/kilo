import React from 'react'

/**
 * Props for the {@link SelectNative} component.
 *
 * Extends {@link React.SelectHTMLAttributes} for a native `<select>` element.
 */
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Additional CSS classes to apply to the select element */
  className?: string

  /** The `<option>` elements or other valid React nodes to render inside the select */
  children: React.ReactNode
}

/**
 * A styled wrapper around the native `<select>` element.
 *
 * @remarks
 * This component automatically applies the `select` base class, and allows
 * custom styles to be added through the `className` prop.
 * It accepts all standard `<select>` attributes such as `defaultValue`, `onChange`, etc.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <SelectNative defaultValue="1">
 *   <option value="1">Option 1</option>
 *   <option value="2">Option 2</option>
 *   <option value="3">Option 3</option>
 * </SelectNative>
 * ```
 *
 * @example
 * With custom class:
 * ```tsx
 * <SelectNative className="my-custom-select">
 *   <option value="a">A</option>
 *   <option value="b">B</option>
 * </SelectNative>
 * ```
 */
export function SelectNative({ className, children, ...props }: SelectProps) {
  return (
    <select className={`select ${className || ''}`} {...props}>
      {children}
    </select>
  )
}

export default {
  SelectNative,
}
