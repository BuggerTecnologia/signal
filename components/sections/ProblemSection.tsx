'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    title: 'Dono é o gargalo das decisões',
    description: 'Toda decisão importante passa por você. Sem você, a máquina trava.',
    tag: 'Centralização extrema',
    color: 'accent-sky',
  },
  {
    title: 'KPIs não viram ação',
    description: 'Tem números bonitos, mas execução é caótica. Decisões no feeling.',
    tag: 'Gestão por intuição',
    color: 'accent-amber',
  },
  {
    title: 'Consultoria virou relatório de prateleira',
    description: 'Diagnóstico caro, implementação zero. Nada mudou na prática.',
    tag: 'Impacto zero',
    color: 'accent-green',
  },
]

export default function ProblemSection() {
  const colorMap: { [key: string]: { bg: string; text: string; bar: string } } = {
    'accent-sky': { bg: 'bg-sky-50', text: 'text-sky-600', bar: '#7CB4D6' },
    'accent-amber': { bg: 'bg-amber-50', text: 'text-amber-600', bar: '#BA7517' },
    'accent-green': { bg: 'bg-green-50', text: 'text-green-600', bar: '#0F6E56' },
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-canvas-warm">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-sm font-medium text-accent-green mb-4 uppercase font-semibold">Onde a maioria falha</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-ink mb-6 max-w-4xl mx-auto">
            3 padrões que impedem escala
          </h2>
          <p className="text-base sm:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Empresas que crescem 5-20x por venda/reputação do dono chegam a um teto. Não é falta de mercado. É falta de estrutura.
          </p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {problems.map((problem, idx) => {
            const colors = colorMap[problem.color]
            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -6 }}
                className={`group relative bg-canvas-paper border border-line hover:border-line-strong rounded-lg overflow-hidden transition-all duration-300 hover:shadow-cardHover`}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: colors.bar }}
                />

                <div className="p-8 pl-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}
                      style={{ backgroundColor: colors.bar }}
                    >
                      <span className="text-canvas font-semibold text-lg">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-ink leading-tight">
                        {problem.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-ink-muted mb-6 leading-relaxed">
                    {problem.description}
                  </p>

                  <div className="pt-6 border-t border-line">
                    <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium`} style={{
                      backgroundColor: `${colors.bar}15`,
                      color: colors.bar
                    }}>
                      {problem.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
