'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: 1,
    title: 'Diagnosticar',
    subtitle: 'Avaliar os 5 pilares (Strategy, Growth, Execution, Governance, Digital)',
    impact: 'Identifica R$ de gargalos',
  },
  {
    number: 2,
    title: 'Priorizar',
    subtitle: 'Qual gargalo entrega maior ROI?',
    impact: '90-day roadmap claro',
  },
  {
    number: 3,
    title: 'Planejar',
    subtitle: 'Estruturar a solução com método e responsáveis',
    impact: 'Blueprint executável',
  },
  {
    number: 4,
    title: 'Executar',
    subtitle: 'Implantar, treinar, validar com seu time',
    impact: 'Resultado medido',
  },
  {
    number: 5,
    title: 'Sustentar',
    subtitle: 'Sistema que funciona sem supervisão',
    impact: 'Escalabilidade',
  },
]

export default function BridgeSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-canvas">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-20 sm:mb-24"
        >
          <p className="text-sm font-medium text-accent-green mb-4 uppercase font-semibold">Método em 5 passos</p>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-semibold text-ink mb-6">
            Do diagnóstico ao sistema que escala
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Cada passo tem objetivo claro, entregável medido e impacto financeiro. Não é consultoria teórica. É implementação real.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex-1 w-full flex flex-col items-center">
                <motion.div
                  variants={item}
                  className="w-full flex flex-col items-center text-center px-4 py-6 lg:py-0 lg:px-2"
                >
                  {/* Circle */}
                  <div className="w-16 h-16 rounded-full border-2 border-ink bg-canvas-paper flex items-center justify-center mb-4 relative z-10">
                    <span className="text-2xl font-medium text-ink">{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg font-semibold text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-ink-muted max-w-[220px] leading-relaxed mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-xs font-semibold text-accent-green bg-canvas-warm rounded px-2 py-1 inline-block">
                    {step.impact}
                  </p>
                </motion.div>

                {/* Connector: vertical on mobile, hidden on desktop */}
                {idx < steps.length - 1 && (
                  <div className="flex lg:hidden flex-col items-center py-2">
                    <div className="w-0.5 h-6 bg-line" />
                    <svg className="w-4 h-4 text-ink-muted -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
