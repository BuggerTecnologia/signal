'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ProductBlockProps {
  number: number
  tag: string
  title: string
  subtitle: string
  description: string
  forWho: string
  benefits: string[]
  ctaText: string
  visual: ReactNode
  reverse?: boolean
  onCtaClick?: () => void
}

export default function ProductBlock({
  number,
  tag,
  title,
  subtitle,
  description,
  forWho,
  benefits,
  ctaText,
  visual,
  reverse = false,
  onCtaClick,
}: ProductBlockProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      className="space-y-8"
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-4">
        <span className="text-4xl font-medium text-ink-muted">{String(number).padStart(2, '0')}</span>
        <span className="inline-block px-3 py-1.5 rounded-full bg-ink/5 text-ink-muted text-xs font-medium uppercase">
          {tag}
        </span>
      </div>

      {/* Title & Subtitle */}
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-ink mb-4">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-ink-muted">
          {subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="text-lg text-ink-muted leading-relaxed max-w-xl">
        {description}
      </p>

      {/* For Who */}
      <div className="border-l border-line bg-canvas-warm pl-6 py-4 rounded-r-lg">
        <p className="text-sm font-medium text-ink mb-2">Para quem é</p>
        <p className="text-ink-muted leading-relaxed">
          {forWho}
        </p>
      </div>

      {/* Benefits */}
      <div className="bg-canvas-warm border border-line rounded-lg p-6 space-y-3">
        <p className="text-sm font-medium text-ink uppercase tracking-wider">Benefícios</p>
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="flex gap-3"
          >
            <span className="text-accent-green font-medium flex-shrink-0 mt-0.5 text-lg">✓</span>
            <span className="text-ink text-sm leading-relaxed font-medium">{benefit}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.button
        onClick={onCtaClick}
        whileHover={{ x: 4 }}
        className="text-ink hover:text-ink-muted font-medium text-lg underline decoration-1 underline-offset-4 transition-colors cursor-pointer"
      >
        {ctaText} →
      </motion.button>
    </motion.div>
  )

  const visualElement = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="h-full"
    >
      {visual}
    </motion.div>
  )

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:auto-cols-max lg:grid-cols-2' : ''}`}>
      {reverse ? (
        <>
          {visualElement}
          {content}
        </>
      ) : (
        <>
          {content}
          {visualElement}
        </>
      )}
    </div>
  )
}
