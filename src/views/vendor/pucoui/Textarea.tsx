import React from 'react'

/**
 * Props for the {@link Textarea} component.
 *
 * Extends {@link React.TextareaHTMLAttributes} to include all native
 * `<textarea>` attributes.
 */
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Additional CSS classes to apply to the textarea element */
  className?: string

  /** Placeholder text to display inside the textarea field */
  placeholder?: string
}

/**
 * A styled textarea component.
 *
 * @remarks
 * Renders a standard `<textarea>` element with a base `textarea` class, and supports
 * all native textarea attributes such as `rows`, `cols`, `value`, `defaultValue`,
 * `onChange`, etc.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Textarea placeholder="Write your message..." />
 * ```
 *
 * @example
 * With custom styling and rows:
 * ```tsx
 * <Textarea
 *   placeholder="Enter description"
 *   className="is-primary"
 *   rows={4}
 * />
 * ```
 */
export function Textarea({ className, placeholder, ...props }: TextareaProps) {
  return (
    <textarea
      className={`textarea ${className || ''}`}
      placeholder={placeholder}
      {...props}
    ></textarea>
  )
}

export default {
  Textarea,
}
