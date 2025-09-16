import React from 'react'

interface CheckboxFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Elements inside the field, typically a `Checkbox` and a `CheckboxLabel` */
  children: React.ReactNode

  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * A container for grouping a checkbox and its label.
 *
 * @remarks
 * This component helps with consistent styling of checkbox fields.
 * Typically, it wraps a `Checkbox` and a `CheckboxLabel`.
 *
 * @example
 * ```tsx
 * <CheckboxField>
 *   <Checkbox id="accept" />
 *   <CheckboxLabel htmlFor="accept">I accept the terms</CheckboxLabel>
 * </CheckboxField>
 * ```
 */
export function CheckboxField({
  children,
  className,
  ...props
}: CheckboxFieldProps) {
  return (
    <div className={`field checkbox ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * A styled checkbox input.
 *
 * @remarks
 * This component extends the native `HTMLInputElement` props.
 * It always renders with `type="checkbox"`.
 *
 * @example
 * ```tsx
 * <Checkbox id="newsletter" defaultChecked />
 * ```
 */
export function Checkbox({ ...props }: CheckboxProps) {
  return <input type="checkbox" {...props} />
}

interface CheckboxLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Label text or elements associated with the checkbox */
  children: React.ReactNode
}

/**
 * Label for a checkbox input.
 *
 * @example
 * ```tsx
 * <Checkbox id="subscribe" />
 * <CheckboxLabel htmlFor="subscribe">Subscribe to newsletter</CheckboxLabel>
 * ```
 */
export function CheckboxLabel({ children, ...props }: CheckboxLabelProps) {
  return <label {...props}>{children}</label>
}

export default {
  Checkbox,
  CheckboxField,
  CheckboxLabel,
}
