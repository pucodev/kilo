import React from 'react'

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Field content, usually an input and related elements */
  children: React.ReactNode
  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * Field container.
 *
 * @remarks
 * Groups inputs, labels, and help text under a single wrapper.
 *
 * @example
 * ```tsx
 * <Field>
 *   <FieldLabel htmlFor="email">Email</FieldLabel>
 *   <Input id="email" type="email"/>
 *   <FieldHelpText>Please enter a valid email address.</FieldHelpText>
 * </Field>
 * ```
 */
export function Field({ className, children, ...props }: FieldProps) {
  return (
    <div className={`field ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

interface FieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Label text */
  children: React.ReactNode
  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * Field label.
 *
 * @remarks
 * Used to label inputs inside a `Field`.
 * Supports native `<label>` props like `htmlFor`.
 *
 * @example
 * ```tsx
 * <FieldLabel htmlFor="username">Username</FieldLabel>
 * ```
 */
export function FieldLabel({ className, children, ...props }: FieldLabelProps) {
  return (
    <label className={`label ${className || ''}`} {...props}>
      {children}
    </label>
  )
}

interface FieldHelpTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Help text content */
  children: React.ReactNode
  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * Help text for a field.
 *
 * @remarks
 * Displays supplementary instructions or error messages below a field.
 *
 * @example
 * ```tsx
 * <FieldHelpText>Password must be at least 8 characters long.</FieldHelpText>
 * ```
 */
export function FieldHelpText({
  className,
  children,
  ...props
}: FieldHelpTextProps) {
  return (
    <span className={`help ${className || ''}`} {...props}>
      {children}
    </span>
  )
}

export default {
  Field,
  FieldLabel,
  FieldHelpText,
}
