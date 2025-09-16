import React from 'react'

/**
 * Props for the {@link RadioField} component.
 *
 * Extends {@link React.HTMLAttributes} for a `<div>` container.
 */
interface RadioFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content to render inside the radio field container */
  children: React.ReactNode

  /** Additional CSS classes to apply to the container */
  className?: string
}

/**
 * A wrapper component that groups radio buttons and their labels.
 *
 * @remarks
 * This component renders a `<div>` with the base `field radio` class, and accepts
 * all standard `<div>` attributes (e.g. `id`, `style`, `onClick`).
 *
 * @example
 * Basic usage:
 * ```tsx
 * <RadioField>
 *   <Radio id="option1" name="group" value="1" />
 *   <RadioLabel htmlFor="option1">Option 1</RadioLabel>
 * </RadioField>
 * ```
 */
export function RadioField({ children, className, ...props }: RadioFieldProps) {
  return (
    <div className={`field radio ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

/**
 * Props for the {@link Radio} component.
 *
 * Extends {@link React.InputHTMLAttributes} for an `<input>` element.
 */
interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * A styled radio input component.
 *
 * @remarks
 * Renders an `<input type="radio">` element and accepts all standard input attributes
 * such as `name`, `value`, `checked`, and `onChange`.
 *
 * @example
 * ```tsx
 * <Radio id="option1" name="group" value="1" />
 * ```
 */
export function Radio({ ...props }: RadioProps) {
  return <input type="radio" {...props} />
}

/**
 * Props for the {@link RadioLabel} component.
 *
 * Extends {@link React.LabelHTMLAttributes} for a `<label>` element.
 */
interface RadioLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** The text or elements displayed inside the label */
  children: React.ReactNode
}

/**
 * A label component associated with a {@link Radio}.
 *
 * @remarks
 * Renders a `<label>` element and accepts all standard label attributes.
 * Typically used with the `htmlFor` prop to link it to a specific radio input.
 *
 * @example
 * ```tsx
 * <RadioLabel htmlFor="option1">Option 1</RadioLabel>
 * ```
 */
export function RadioLabel({ children, ...props }: RadioLabelProps) {
  return <label {...props}>{children}</label>
}

export default {
  Radio,
  RadioField,
  RadioLabel,
}
