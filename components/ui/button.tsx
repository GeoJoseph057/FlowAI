import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/lib/variants"
import { VariantProps } from "class-variance-authority"

export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    | 'onAnimationStart'
    | 'onAnimationEnd'
    | 'onAnimationIteration'
    | 'onTransitionEnd'
    | 'onDragStart'
    | 'onDragEnd'
    | 'onDrag'
    | 'onDragEnter'
    | 'onDragExit'
    | 'onDragLeave'
    | 'onDragOver'
    | 'onDrop'
  >,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    // Remove ALL conflicting props that might interfere with motion
    const {
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      onTransitionEnd,
      onDragStart,
      onDragEnd,
      onDrag,
      onDragEnter,
      onDragExit,
      onDragLeave,
      onDragOver,
      onDrop,
      ...safeProps
    } = props as any;

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...safeProps} // Only pass the safe props
      >
        {loading && (
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
        )}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = "Button"

export { Button }
