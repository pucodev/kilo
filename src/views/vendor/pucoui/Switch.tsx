import React, { useState } from 'react'

interface SwitchFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Child elements to be rendered inside the field */
  children: React.ReactNode

  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * A wrapper component for grouping a switch input and its control.
 *
 * @remarks
 * This component provides the `field switch` wrapper and extends the native
 * `HTMLDivElement` attributes.
 *
 * @example
 * ```tsx
 * <SwitchField>
 *   <SwitchInput id="notifications" />
 *   <SwitchControl htmlFor="notifications" />
 * </SwitchField>
 * ```
 */
export function SwitchField({
  children,
  className,
  ...props
}: SwitchFieldProps) {
  return (
    <div className={`field switch ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

interface SwitchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Additional CSS classes for custom styling */
  className?: string

  /** Whether the switch is checked initially */
  checked?: boolean

  /** Callback triggered when the checked state changes */
  onCheckedChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * The input element for the switch, rendered as a checkbox with `role="switch"`.
 *
 * @remarks
 * This component manages its own internal state but can be initialized with the `checked` prop.
 * You can listen for state changes with `onCheckedChange`.
 *
 * @example
 * ```tsx
 * <SwitchInput
 *   id="dark-mode"
 *   checked
 *   onCheckedChange={(e) => console.log(e.target.checked)}
 * />
 * ```
 */
export function SwitchInput({
  checked: initialChecked,
  onCheckedChange,
  ...props
}: SwitchInputProps) {
  const [checked, setChecked] = useState(initialChecked ?? false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    onCheckedChange?.(e)
  }

  return (
    <input
      type="checkbox"
      role="switch"
      {...props}
      checked={checked}
      onChange={handleChange}
    />
  )
}

interface SwitchControlProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

/**
 * A visual slider control for the switch.
 *
 * @remarks
 * This component should be associated with a {@link SwitchInput} via the `htmlFor` attribute.
 *
 * @example
 * ```tsx
 * <SwitchInput id="wifi" />
 * <SwitchControl htmlFor="wifi" />
 * ```
 */
export function SwitchControl({ ...props }: SwitchControlProps) {
  return <label className="slider" {...props}></label>
}

interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes for custom styling */
  className?: string

  /** Unique identifier to link the input and control */
  id: string

  /** Whether the switch should be initially checked */
  checked?: boolean
}

/**
 * A full switch component composed of {@link SwitchField}, {@link SwitchInput}, and {@link SwitchControl}.
 *
 * @remarks
 * This is the high-level component you’ll typically use. It accepts the same attributes
 * as a `div`, plus switch-specific props.
 *
 * @example
 * ```tsx
 * <Switch id="email-alerts" checked />
 * ```
 */
export function Switch({ id, className, checked, ...props }: SwitchProps) {
  return (
    <SwitchField className={className} {...props}>
      <SwitchInput id={id} checked={checked} />
      <SwitchControl htmlFor={id} />
    </SwitchField>
  )
}

export default {
  SwitchInput,
  SwitchField,
  SwitchControl,
  Switch,
}
