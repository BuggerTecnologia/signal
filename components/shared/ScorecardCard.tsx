'use client'

import { motion } from 'framer-motion'

interface Dimension {
  name: string
  value: number
  color: string
  label?: string
}

interface ScorecardCardProps {
  dims: Dimension[]
  insight: string
  title?: string
}

export default function ScorecardCard({ dims, insight, title = 'Diagnóstico 5D — SIGNAL' }: ScorecardCardProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-canvas-paper border border-line rounded-lg p-8 shadow-card"
    >
      {/* Título */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-line">
        <h4 className="text-lg font-medium text-ink">{title}</h4>
        <span className="text-xs font-medium text-ink-muted">Ao vivo</span>
      </div>

      {/* Dimensões */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4 mb-6"
      >
        {dims.map((dim, idx) => (
          <motion.div key={idx} variants={item}>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-ink">{dim.name}</label>
              <span className="text-sm font-medium text-ink-muted">{dim.value.toFixed(1)}</span>
            </div>
            <div className="h-1.5 bg-line rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(dim.value / 5) * 100}%` }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 * idx }}
                className="h-full rounded-full"
                style={{ backgroundColor: dim.color }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Insight */}
      <div className="pt-6 border-t border-line">
        <p className="text-sm text-ink-muted leading-relaxed">
          <span className="text-ink font-medium">IA analisa:</span> {insight}
        </p>
      </div>
    </motion.div>
  )
}
