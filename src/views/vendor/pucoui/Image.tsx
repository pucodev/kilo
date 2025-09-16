import React from 'react'

import type { ImageRatio, ImageSize } from './types'

interface ImageProps extends React.HTMLAttributes<HTMLElement> {
  /** Allowed sizes: 16 | 24 | 32 | 48 | 64 | 96 | 128 */
  size?: ImageSize
  /** Aspect ratio: '1 1' | '5 4' | '4 3' | '3 2' | '5 3' | '16 9' | '2 1' | '3 1' | '4 5' | '3 4' | '2 3' | '3 5' | '9 16' | '1 2' */
  ratio?: ImageRatio
  /** Image source URL. */
  src?: string
  /** Alternative text for the image. */
  alt?: string
  /** Additional CSS classes for custom styling. */
  className?: string
  /** Custom children to render inside the `<figure>`. */
  children?: React.ReactNode
}

/**
 * Responsive image component with support for `size`, `ratio` and fallbacks.
 *
 * @remarks
 * - If `src` is provided, an `<img>` element is rendered.
 * - If `children` are provided, they are rendered inside the `<figure>`.
 * - The `ratio` prop can be either a string like `"16 9"` (converted to `is-16by9`)
 *   or a shorthand like `"1by1"`.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Image src="/avatar.png" alt="User avatar" size={64} />
 * ```
 *
 * With ratio:
 * ```tsx
 * <Image src="/cover.jpg" ratio="16 9" />
 * ```
 *
 * With custom content:
 * ```tsx
 * <Image>
 *   <ImageFallback>No image available</ImageFallback>
 * </Image>
 * ```
 */
export function Image({
  size,
  ratio,
  src,
  alt,
  className,
  children,
  ...props
}: ImageProps) {
  let ratioClass
  if (ratio) {
    const ratios = ratio.split(' ')
    if (ratios.length === 2) {
      ratioClass = `is-${ratios[0]}by${ratios[1]}`
    } else {
      ratioClass = `is-${ratio}`
    }
  }

  return (
    <figure
      className={`image ${size ? `is-size-${size}` : ''} ${ratioClass || ''} ${
        className || ''
      }`}
      {...props}
    >
      {children}
      {src ? <img src={src} alt={alt || ''} /> : <></>}
    </figure>
  )
}

interface ImageFallbackProps {
  /** Content to render when no image is available. */
  children: React.ReactNode
}

/**
 * Fallback container for `Image`.
 *
 * @remarks
 * Use inside `Image` when the `src` is not available or fails to load.
 *
 * @example
 * ```tsx
 * <Image>
 *   <ImageFallback>No preview available</ImageFallback>
 * </Image>
 * ```
 */
export function ImageFallback({ children }: ImageFallbackProps) {
  return <div className="fallback">{children}</div>
}

export default {
  Image,
  ImageFallback,
}
