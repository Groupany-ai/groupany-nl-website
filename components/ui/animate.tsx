'use client'

/**
 * GRO-753: Reusable Framer Motion scroll animation components.
 *
 * Supplements the existing CSS-based useReveal hook with programmatic
 * animation primitives for complex animated sequences.
 *
 * Uses cubic-bezier(0.16, 1, 0.3, 1) — expo-out easing (Anthropic/Linear standard).
 * All animations skip when prefers-reduced-motion is set.
 */
import { useRef } from 'react'
import React from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from 'framer-motion'

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]
const DURATION = 0.5
const STAGGER = 0.1

// ── Base variants ──────────────────────────────────────────────────────────

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE_EXPO } },
}

// ── FadeUp ─────────────────────────────────────────────────────────────────

interface FadeUpProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children?: React.ReactNode
  delay?: number
  distance?: number
  once?: boolean
}

export function FadeUp({ children, delay = 0, distance = 20, once = true, className, ...props }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-8% 0px' })
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration: DURATION, ease: EASE_EXPO, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ── Stagger ────────────────────────────────────────────────────────────────

export function Stagger({ children, once = true, className, ...props }: { children?: React.ReactNode; once?: boolean } & Omit<HTMLMotionProps<'div'>, 'children'>) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-8% 0px' })
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: STAGGER, delayChildren: 0.1 } } }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, ...props }: { children?: React.ReactNode } & Omit<HTMLMotionProps<'div'>, 'children'>) {
  return (
    <motion.div className={className} variants={fadeUpVariants} {...props}>
      {children}
    </motion.div>
  )
}

// ── FadeIn ─────────────────────────────────────────────────────────────────

export function FadeIn({ children, delay = 0, once = true, className, ...props }: { children?: React.ReactNode; delay?: number; once?: boolean } & Omit<HTMLMotionProps<'div'>, 'children'>) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-8% 0px' })
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: DURATION, ease: EASE_EXPO, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ── ScaleIn ────────────────────────────────────────────────────────────────

export function ScaleIn({ children, delay = 0, once = true, className, ...props }: { children?: React.ReactNode; delay?: number; once?: boolean } & Omit<HTMLMotionProps<'div'>, 'children'>) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-8% 0px' })
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: DURATION, ease: EASE_EXPO, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { motion, useInView, useReducedMotion }
