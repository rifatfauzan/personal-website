"use client"

import * as React from "react"

export interface ToastProps {
  id?: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export type ToastActionElement = React.ReactElement

export const Toast = React.forwardRef<
  React.ElementRef<"div">,
  ToastProps
>(({ id, title, description, action, open, onOpenChange, ...props }, ref) => {
  return (
    <div 
      ref={ref} 
      id={id}
      role="alert"
      aria-live="assertive"
      {...props}
    >
      {title && <div>{title}</div>}
      {description && <div>{description}</div>}
      {action}
    </div>
  )
})
Toast.displayName = "Toast"