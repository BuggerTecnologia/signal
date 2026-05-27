'use client'

import { motion } from 'framer-motion'

const dimensions = [
  { letter: 'S', name: 'Strategy', description: 'Clareza estratégica e direção real' },
  { letter: 'I', name: 'Growth', description: 'Crescer com eficiência e rentabilidade' },
  { letter: 'G', name: 'Execution', description: 'Transformar planos em entregas' },
  { letter: 'N', name: 'Governance', description: 'Estrutura de decisão que não depende do dono' },
  { letter: 'A', name: 'Digital', description: 'Tecnologia e dados integrados às decisões' },
  { letter: 'L', name: 'Digital', description: 'Tecnologia e dados integrados às decisões' },
]

const colorMap = [
  '#185FA5',
  '#D85A30',
  '#BA7517',
  '#0F6E56',
  '#534AB7',
]

export default function Method5DSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section id="metodo" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-canvas-warm">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-ink-muted mb-4 uppercase">O Método</p>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-medium text-ink mb-4">
            5 dimensões de maturidade.
            <br />
            <span className="text-ink-muted">Um diagnóstico completo.</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            O SIGNAL identifica exatamente onde está o gargalo — e quanto ele custa. Não por feeling, mas por um framework baseado em padrões internacionais de gestão.
          </p>
        </motion.div>

        {/* Dimensions grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 mb-12"
        >
          {dimensions.slice(0, 5).map((dim, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -4 }}
              className="rounded-lg p-6 text-canvas shadow-card transition-all duration-300 hover:shadow-cardHover"
              style={{ backgroundColor: colorMap[idx] }}
            >
              <div className="text-4xl font-medium mb-3 opacity-80">{dim.letter}</div>
              <h3 className="text-xl font-medium mb-2">{dim.name}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{dim.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-line pt-12 text-center"
        >
          <p className="text-sm text-ink-muted mb-4">Baseado em:</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-ink-muted">
            <span>PMI/PMBOK 7</span>
            <span>•</span>
            <span>Lean Six Sigma DMAIC</span>
            <span>•</span>
            <span>OKR</span>
            <span>•</span>
            <span>PRINCE2</span>
            <span>•</span>
            <span>Kotter 8-Step</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
