import React from 'react'

import { Icon } from './Icon'
import type { Color } from './types'

interface BadgeProps {
  /** Content of the badge */
  children: React.ReactNode

  /** Whether the badge should use an outlined style */
  outlined?: boolean

  /** Whether the badge should use a tonal style */
  tonal?: boolean

  /** Visual color style of the badge */
  color?: Color

  /** Renders the badge as a circle */
  circle?: boolean

  /** Size of the badge */
  size?: 'md' | 'lg'
}

/**
 * A badge component used to highlight information, counters, or status.
 *
 * @remarks
 * Badges are typically small UI elements used to display counts or status
 * indicators next to icons, buttons, or text.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Badge color="primary">New</Badge>
 * ```
 *
 * @example
 * Outlined and circular:
 * ```tsx
 * <Badge color="danger" outlined circle>
 *   5
 * </Badge>
 * ```
 *
 * @example
 * Large tonal badge:
 * ```tsx
 * <Badge color="success" tonal size="lg">
 *   Active
 * </Badge>
 * ```
 */
export function Badge({
  children,
  outlined,
  tonal,
  color,
  circle,
  size,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`badge ${color ? `is-${color}` : ''} ${outlined ? 'is-outlined' : ''} ${circle ? 'is-circle' : ''} ${size ? `is-${size}` : ''} ${tonal ? 'is-tonal' : ''}`}
      {...props}
    >
      {children}
    </span>
  )
}

interface BadgeIconProps {
  /** Icon name or identifier compatible with Iconify */
  icon: string
}

/**
 * Renders an icon inside a badge.
 *
 * @example
 * ```tsx
 * <Badge color="info">
 *   <BadgeIcon icon="mdi:star" />
 * </Badge>
 * ```
 */
export function BadgeIcon({ icon, ...props }: BadgeIconProps) {
  return <Icon icon={icon} {...props}></Icon>
}

export default {
  Badge,
  BadgeIcon,
}
