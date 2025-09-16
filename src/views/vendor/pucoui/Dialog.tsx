import React from 'react'

import { Icon } from './Icon'

interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Footer content, usually actions like buttons */
  children: React.ReactNode
  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * Dialog footer section.
 *
 * @remarks
 * Typically used to render action buttons (e.g. "Cancel", "Confirm").
 *
 * @example
 * ```tsx
 * <DialogFooter>
 *   <button className="btn">Cancel</button>
 *   <button className="btn is-primary">Save</button>
 * </DialogFooter>
 * ```
 */
export function DialogFooter({
  children,
  className,
  ...props
}: DialogFooterProps) {
  return (
    <footer className={`dialog-footer ${className || ''}`} {...props}>
      {children}
    </footer>
  )
}

interface DialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Main body content */
  children: React.ReactNode
  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * Dialog body section.
 *
 * @remarks
 * Used to render the main content of the dialog.
 *
 * @example
 * ```tsx
 * <DialogBody>
 *   <p>This is the dialog content.</p>
 * </DialogBody>
 * ```
 */
export function DialogBody({ children, className, ...props }: DialogBodyProps) {
  return (
    <section className={`dialog-body ${className || ''}`} {...props}>
      {children}
    </section>
  )
}

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Header content, usually a title */
  children: React.ReactNode
  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * Dialog header section with title and close button.
 *
 * @remarks
 * Contains the dialog title and a built-in close button.
 * The close button currently has no handler, so you need to bind it externally.
 *
 * @example
 * ```tsx
 * <DialogHeader>
 *   Dialog Title
 * </DialogHeader>
 * ```
 */
export function DialogHeader({
  children,
  className,
  ...props
}: DialogHeaderProps) {
  return (
    <header className={`dialog-header ${className || ''}`} {...props}>
      <div className="dialog-title">{children}</div>
      <button className="btn is-close">
        <Icon icon="mdi:close" />
      </button>
    </header>
  )
}

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Inner content of the dialog (header, body, footer) */
  children: React.ReactNode
  /** Additional CSS classes for custom styling */
  className?: string
}

/**
 * Wrapper for the dialog card content.
 *
 * @remarks
 * This component groups the header, body, and footer sections.
 *
 * @example
 * ```tsx
 * <DialogContent>
 *   <DialogHeader>Title</DialogHeader>
 *   <DialogBody>Some text</DialogBody>
 *   <DialogFooter>
 *     <button className="btn">Close</button>
 *   </DialogFooter>
 * </DialogContent>
 * ```
 */
export function DialogContent({
  children,
  className,
  ...props
}: DialogContentProps) {
  return (
    <div className={`dialog-card ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Dialog content including `DialogContent` */
  children: React.ReactNode
  /** Additional CSS classes for custom styling */
  className?: string
  /** Whether the dialog is visible */
  isActive?: boolean
  /** Centers the dialog vertically */
  isCentered?: boolean
  /** Makes the dialog body scrollable if content overflows */
  isScrollable?: boolean
}

/**
 * Main dialog container with overlay.
 *
 * @remarks
 * The dialog is controlled via the `isActive` prop.
 * Combine with `DialogContent`, `DialogHeader`, `DialogBody`, and `DialogFooter`
 * to build structured dialogs.
 *
 * @example
 * ```tsx
 * <Dialog isActive isCentered>
 *   <DialogContent>
 *     <DialogHeader>Confirm Action</DialogHeader>
 *     <DialogBody>
 *       <p>Are you sure you want to continue?</p>
 *     </DialogBody>
 *     <DialogFooter>
 *       <button className="btn">Cancel</button>
 *       <button className="btn is-primary">Confirm</button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
export function Dialog({
  children,
  className,
  isActive,
  isCentered,
  isScrollable,
  ...props
}: DialogProps) {
  return (
    <div
      className={`dialog ${isScrollable ? 'dialog-scrollable' : ''} ${
        isCentered ? 'dialog-centered' : ''
      } ${isActive ? 'is-active' : ''} ${className || ''}`}
      {...props}
    >
      {/* <div className="dialog-bg"></div> */}
      <div className="dialog-overlay">{children}</div>
    </div>
  )
}

export default {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
}
