'use client'

import { motion } from 'framer-motion'
import ScorecardCard from '@/components/shared/ScorecardCard'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const dims = [
    { name: 'Strategy', value: 1.8, color: '#185FA5' },
    { name: 'Growth', value: 2.7, color: '#D85A30' },
    { name: 'Execution', value: 2.2, color: '#BA7517' },
    { name: 'Governance', value: 1.2, color: '#0F6E56' },
    { name: 'Digital', value: 1.0, color: '#534AB7' },
  ]

  return (
    <section id="hero" className="relative min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden bg-canvas">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Main headline */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-medium text-ink leading-tight">
              De empresa de dono<br />
              <span className="text-accent-green">para empresa de sistema</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-ink-muted font-normal leading-relaxed max-w-xl"
            >
              Em 90 dias, transformamos gestão amadora em estrutura profissional. ROI medido. Resultado contratado.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="px-8 py-3.5 rounded-md bg-accent-green hover:opacity-90 text-canvas font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                Começar diagnóstico gratuito
              </button>
              <button className="px-8 py-3.5 rounded-md border-2 border-ink hover:bg-canvas-paper text-ink font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                Ver case de sucesso →
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-line"
            >
              <div className="bg-canvas-paper border border-line rounded-lg p-4 text-center hover:border-line-strong transition-colors">
                <div className="text-2xl sm:text-3xl font-medium text-ink mb-1">50+</div>
                <div className="text-xs sm:text-sm text-ink-muted">Empresas<br />transformadas</div>
              </div>
              <div className="bg-canvas-paper border border-line rounded-lg p-4 text-center hover:border-line-strong transition-colors">
                <div className="text-2xl sm:text-3xl font-medium text-ink mb-1">R$ 50M+</div>
                <div className="text-xs sm:text-sm text-ink-muted">Impacto total<br />gerado</div>
              </div>
              <div className="bg-canvas-paper border border-line rounded-lg p-4 text-center hover:border-line-strong transition-colors">
                <div className="text-2xl sm:text-3xl font-medium text-ink mb-1">4.9/5</div>
                <div className="text-xs sm:text-sm text-ink-muted">Satisfaction<br />score</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right visual - Scorecard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <ScorecardCard
              dims={dims}
              insight="Governance e Digital são os gargalos que mais custam. Prioridade: implantar sistema de decisão antes de escalar."
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
