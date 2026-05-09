'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  glow?: boolean
  hover?: boolean
}

export function Card({ children, className = '', glow = false, hover = true }: CardProps) {
  return (
    <motion.div
      className={`
        bg-[#0A1628] border border-[#1A2D45] rounded-2xl p-6
        transition-all duration-300
        ${hover ? 'hover:border-[rgba(0,200,255,0.3)]' : ''}
        ${glow ? 'shadow-[0_0_30px_rgba(0,200,255,0.1)]' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -2, boxShadow: '0 0 30px rgba(0,200,255,0.12)' } : {}}
    >
      {children}
    </motion.div>
  )
}
