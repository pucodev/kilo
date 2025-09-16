import React from 'react'

import { Icon } from './Icon'
import type { Color } from './types'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual color style of the alert */
  color?: Color

  /** Whether the alert should use a tonal style */
  tonal?: boolean

  /** Removes the default border from the alert */
  borderless?: boolean

  /** Adds a left accent border style to the alert */
  accentBorder?: boolean

  /** Optional icon name to display inside the alert */
  icon?: string
}

/**
 * A styled alert component used to display important messages or notifications.
 *
 * @remarks
 * This component extends the native `HTMLDivElement` props, so you can pass
 * all standard div attributes (e.g. `id`, `role`, `aria-*`).
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Alert color="success">
 *   Operation completed successfully!
 * </Alert>
 * ```
 *
 * @example
 * With tonal style and accent border:
 * ```tsx
 * <Alert color="warning" tonal accentBorder>
 *   Please check your inputs.
 * </Alert>
 * ```
 */
export function Alert({
  children,
  color,
  tonal,
  borderless,
  accentBorder,
  className,
  ...props
}: AlertProps) {
  return (
    <div
      className={`alert ${color ? `is-${color}` : ''} ${tonal ? `is-tonal` : ''} ${borderless ? `is-borderless` : ''} ${accentBorder ? 'is-accent-border' : ''} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

interface AlertIconProps {
  /** Icon name compatible with the `Icon` component */
  icon: string
}

/**
 * Renders an icon inside an alert.
 *
 * @example
 * ```tsx
 * <Alert>
 *   <AlertIcon icon="mdi:alert-circle" />
 *   Something went wrong!
 * </Alert>
 * ```
 */
export function AlertIcon({ icon, ...props }: AlertIconProps) {
  return <Icon icon={icon} {...props}></Icon>
}

interface AlertContentProps {
  /** Main content of the alert */
  children: React.ReactNode
}

/**
 * Wrapper for the main content of an alert.
 *
 * @example
 * ```tsx
 * <Alert>
 *   <AlertContent>
 *     <strong>Heads up!</strong> This is an alert message.
 *   </AlertContent>
 * </Alert>
 * ```
 */
export function AlertContent({ children, ...props }: AlertContentProps) {
  return (
    <div className="alert-content" {...props}>
      {children}
    </div>
  )
}

interface AlertHeaderProps {
  /** Header content, usually a title */
  children: React.ReactNode
}

/**
 * Header section of an alert, typically used for titles.
 */
export function AlertHeader({ children, ...props }: AlertHeaderProps) {
  return (
    <div className="alert-header" {...props}>
      {children}
    </div>
  )
}

interface AlertBodyProps {
  /** Body content of the alert */
  children: React.ReactNode
}

/**
 * Body section of an alert, typically used for descriptive text.
 */
export function AlertBody({ children, ...props }: AlertBodyProps) {
  return (
    <div className="alert-body" {...props}>
      {children}
    </div>
  )
}

export default {
  Alert,
  AlertIcon,
  AlertContent,
}
