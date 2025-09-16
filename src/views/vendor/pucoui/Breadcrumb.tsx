import React from 'react'

import { Icon } from './Icon'

interface BreadcrumbItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Content of the breadcrumb item */
  children: React.ReactNode

  /** URL to navigate to. If not provided, the item will render as plain text */
  href?: string
}

/**
 * A single item inside a breadcrumb navigation.
 *
 * @remarks
 * This component renders as an anchor tag (`<a>`) if an `href` is provided,
 * otherwise it renders as plain content (useful for the current/active item).
 *
 * @example
 * With link:
 * ```tsx
 * <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
 * ```
 *
 * @example
 * Without link (active item):
 * ```tsx
 * <BreadcrumbItem>Settings</BreadcrumbItem>
 * ```
 */
export function BreadcrumbItem({
  children,
  href,
  ...props
}: BreadcrumbItemProps) {
  return href ? (
    <a href={href} {...props}>
      {children}
    </a>
  ) : (
    <>{children}</>
  )
}

interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * List of breadcrumb items to render.
   *
   * Each item can have:
   * - `icon` — an optional icon name (rendered with the `Icon` component)
   * - `item` — the text label of the breadcrumb
   * - `href` — optional link for navigation
   */
  items: { icon?: string; item?: string; href?: string }[]

  /** Additional CSS classes for the root breadcrumb container */
  className?: string
}

/**
 * A breadcrumb navigation component to display hierarchical navigation paths.
 *
 * @remarks
 * The `Breadcrumb` component is typically used to show the user's location
 * within a website or application. It accepts an array of `items` that may
 * include optional icons, labels, and links.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Breadcrumb
 *   items={[
 *     { item: 'Home', href: '/' },
 *     { item: 'Library', href: '/library' },
 *     { item: 'Data' } // active item (no href)
 *   ]}
 * />
 * ```
 *
 * @example
 * With icons:
 * ```tsx
 * <Breadcrumb
 *   items={[
 *     { icon: 'mdi:home', item: 'Home', href: '/' },
 *     { icon: 'mdi:folder', item: 'Projects', href: '/projects' },
 *     { icon: 'mdi:file', item: 'Report' }
 *   ]}
 * />
 * ```
 */
export function Breadcrumb({ items, className, ...props }: BreadcrumbProps) {
  return (
    <div className={`breadcrumbs ${className || ''}`} {...props}>
      <ol>
        {items.map(item => (
          <li key={item.href || item.item}>
            <BreadcrumbItem href={item.href}>
              {item.icon ? <Icon icon={item.icon} /> : <></>}
              {item.item ? <span>{item.item}</span> : <></>}
            </BreadcrumbItem>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default {
  Breadcrumb,
  BreadcrumbItem,
}
