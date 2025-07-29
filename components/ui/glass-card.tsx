"use client"

import * as React from "react"
import { motion, MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof MotionProps> {
  hover?: boolean
  children: React.ReactNode
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl",
        hover && "hover:bg-white/10 hover:border-white/20 hover:scale-105",
        "transition-all duration-300",
        className
      )}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}