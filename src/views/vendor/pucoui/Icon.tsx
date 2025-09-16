import { Icon as Iconify, type IconProps as IconifyProps } from '@iconify/react'

interface IconProps extends IconifyProps {
  /** Name of the icon to render, must be a valid Iconify identifier (e.g., `"mdi:home"`, `"fa-solid:user"`) */
  icon: string
  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * Renders an Iconify icon inside a React component.
 *
 * @remarks
 * This component wraps the [`iconify-icon`](https://docs.iconify.design/icon-components/web-component/) web component,
 * allowing the use of any supported Iconify icon set.
 *
 * It automatically applies the `icon` base class and merges additional custom classes if provided.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Icon icon="mdi:home" />
 * ```
 *
 * With custom styles:
 * ```tsx
 * <Icon icon="mdi:account" className="text-primary" />
 * ```
 */
export function Icon({ icon, className, ...props }: IconProps) {
  return (
    <Iconify
      className={`icon ${className || ''}`}
      icon={icon}
      {...props}
    ></Iconify>
  )
}
