import React from 'react'

import { Icon } from './Icon'
import type { Color } from './types'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Content of the button */
  children: React.ReactNode

  /** Visual color style of the button */
  color?: Color

  /** Whether the button should use an outlined style */
  outlined?: boolean

  /** Whether the button should use a tonal style */
  tonal?: boolean

  /** Size of the button */
  size?: 'sm' | 'md' | 'lg'

  /** Whether the button has fully rounded corners */
  rounded?: boolean
}

/**
 * A reusable button component with support for different colors, styles and sizes.
 *
 * @remarks
 * This component extends the native `HTMLButtonElement` props, so you can pass
 * all standard button attributes (e.g. `onClick`, `disabled`, `type`).
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Button color="primary" onClick={() => alert('Clicked!')}>
 *   Click me
 * </Button>
 * ```
 *
 * @example
 * Outlined and rounded:
 * ```tsx
 * <Button color="primary" outlined rounded>
 *   Rounded Outline
 * </Button>
 * ```
 */
export function Button({
  children,
  color,
  outlined,
  tonal,
  size,
  rounded,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn ${color ? `is-${color}` : ''} ${tonal ? 'is-tonal' : ''} ${outlined ? 'is-outlined' : ''} ${size ? `is-${size}` : ''} ${rounded ? 'is-rounded' : ''} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

interface ButtonIconProps {
  /** Icon name or identifier compatible with Iconify */
  icon: string
}

/**
 * A button-compatible icon component using Iconify.
 *
 * @example
 * ```tsx
 * <ButtonIcon icon="mdi:home" />
 * ```
 */
export function ButtonIcon({ icon, ...props }: ButtonIconProps) {
  return <Icon icon={icon} {...props}></Icon>
}

export default {
  Button,
  ButtonIcon,
}
