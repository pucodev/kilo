import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content of the card */
  children: React.ReactNode

  /** Additional CSS classes for custom styling */
  className?: string

  /** Whether the card should use an outlined style */
  outlined?: boolean
}

/**
 * A flexible card container component that groups related content and actions.
 *
 * @remarks
 * The `Card` component can be combined with subcomponents such as
 * `CardImage`, `CardBody`, `CardTitle`, `CardContent`, and `CardActions`
 * to build structured UI cards.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Card>
 *   <CardBody>
 *     <CardContent>
 *       Simple card content
 *     </CardContent>
 *   </CardBody>
 * </Card>
 * ```
 *
 * @example
 * Outlined card with title and actions:
 * ```tsx
 * <Card outlined>
 *   <CardBody>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardContent>
 *       This is some card content.
 *     </CardContent>
 *   </CardBody>
 *   <CardActions>
 *     <Button>Action</Button>
 *   </CardActions>
 * </Card>
 * ```
 */
export function Card({ children, className, outlined, ...props }: CardProps) {
  return (
    <div
      className={`card ${className || ''} ${outlined ? 'is-outlined' : ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image source URL */
  src: string

  /** Alternative text for the image */
  alt?: string

  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * A container for an image displayed within a card.
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardImage src="/image.jpg" alt="Preview" />
 * </Card>
 * ```
 */
export function CardImage({ src, alt, className, ...props }: CardImageProps) {
  return (
    <figure className={`image ${className || ''}`} {...props}>
      <img src={src} alt={alt} />
    </figure>
  )
}

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Main body content of the card */
  children: React.ReactNode

  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * Wrapper for the main content inside a card.
 */
export function CardBody({ children, className, ...props }: CardBodyProps) {
  return (
    <div className={`card-body ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Title text or elements for the card */
  children: React.ReactNode

  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * Title section of a card, usually placed inside `CardBody`.
 */
export function CardTitle({ children, className, ...props }: CardTitleProps) {
  return (
    <div className={`card-title ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content of the card */
  children: React.ReactNode

  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * Content area of a card, typically containing text or other components.
 */
export function CardContent({
  children,
  className,
  ...props
}: CardContentProps) {
  return (
    <div className={`card-content ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

interface CardActionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Actions or controls associated with the card */
  children: React.ReactNode

  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * Container for card actions, such as buttons or links.
 */
export function CardActions({
  children,
  className,
  ...props
}: CardActionProps) {
  return (
    <div className={`card-actions ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

export default {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardContent,
  CardActions,
}
