import * as React from "react"
import { motion, MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { inputVariants } from "@/lib/variants"
import { VariantProps } from "class-variance-authority"

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof MotionProps>,
    VariantProps<typeof inputVariants> {
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, error, ...props }, ref) => {
    return (
      <div className="relative">
        <motion.input
          className={cn(inputVariants({ variant: error ? "error" : variant, className }))}
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          {...props}
        />
        {error && (
          <motion.p
            className="mt-1 text-sm text-red-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }