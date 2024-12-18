"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'gradient'
  size?: 'default' | 'lg'
  asChild?: boolean
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-md text-sm font-medium transition-all duration-300",
          "before:absolute before:inset-0 before:transition-[transform,opacity] before:duration-300",
          "hover:before:opacity-100",
          "active:scale-95",
          variant === "default" && [
            "bg-primary text-primary-foreground",
            "before:bg-black/10 before:opacity-0 before:translate-y-full",
            "hover:before:translate-y-0",
          ],
          variant === "outline" && [
            "border-2 border-primary text-primary",
            "before:bg-primary before:opacity-0 before:translate-y-full",
            "hover:text-primary-foreground hover:before:translate-y-0",
          ],
          variant === "gradient" && [
            "bg-gradient-to-r from-teal-400 to-blue-500 text-white",
            "before:bg-gradient-to-r before:from-blue-500 before:to-teal-400 before:opacity-0 before:z-0",
            "hover:before:opacity-100",
            "transition-all duration-300 transform hover:scale-105 hover:shadow-lg",
          ],
          size === "default" && "h-10 px-4 py-2",
          size === "lg" && "h-12 px-8 py-3 text-base",
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{props.children}</span>
      </Comp>
    )
  }
)
AnimatedButton.displayName = "AnimatedButton"

