'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    number: 1,
    title: 'Dono é o gargalo das decisões',
    description: 'Não é que você não consiga delegar. É que não existe matriz de alçada documentada.',
    costs: [
      '35% do seu tempo em decisões que qualquer gerente saberia tomar',
      '12% dos pedidos perdidos por demora de aprovação',
      'Empresa trava em R$15-20M — nunca passa'
    ],
    solution: 'Estrutura de alçada clara + auditoria de decisões críticas',
    color: 'accent-sky',
    barColor: '#7CB4D6',
  },
  {
    number: 2,
    title: 'KPIs não viram ação',
    description: 'Crescimento de 75% em faturamento. Mas margem caiu de 10% para 4%. Ninguém vê isso acontecer até é tarde.',
    costs: [
      'Lucro absoluto sobre 12-18 meses depois cai abruptamente',
      'Você descobre quando está em endividamento rápido',
      'Perda de R$1.5M-3M em lucro que você não vê vindo'
    ],
    solution: 'Painel de saúde financeira em tempo real + ritual semanal',
    color: 'accent-amber',
    barColor: '#BA7517',
  },
  {
    number: 3,
    title: 'Consultoria virou relatório de prateleira',
    description: 'O diagnóstico é perfeito. Mas não foi feito para sua realidade operacional específica.',
    costs: [
      'Recomendações exigem investimento que você não tem',
      'Recomendações exigem tempo que seu time não tem',
      'Zero implementado. Confiança abaixo. Dinheiro gasto fora.'
    ],
    solution: 'Implantação com time seu + responsável claro + 60 dias pós-projeto',
    color: 'accent-green',
    barColor: '#0F6E56',
  },
]

export default function ProblemSection() {
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -4 }}
              className="relative bg-canvas-paper border border-line rounded-lg overflow-hidden transition-all duration-300 hover:shadow-cardHover"
            >
              {/* Top colored bar */}
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: problem.barColor }}
              />

              <div className="p-8">
                {/* Number and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 text-canvas font-semibold text-base"
                    style={{ backgroundColor: problem.barColor }}
                  >
                    {problem.number}
                  </div>
                  <h3 className="text-lg font-semibold text-ink leading-tight">
                    {problem.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-ink-muted mb-6 leading-relaxed">
                  {problem.description}
                </p>

                {/* O custo real */}
                <div className="mb-6 pb-6 border-b border-line">
                  <p className="text-xs font-semibold text-ink mb-3 uppercase tracking-wide">O custo real:</p>
                  <ul className="space-y-2">
                    {problem.costs.map((cost, i) => (
                      <li key={i} className="text-xs text-ink-muted leading-relaxed flex gap-2">
                        <span className="text-accent-green font-bold">•</span>
                        <span>{cost}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solução Praxia */}
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: `${problem.barColor}10` }}
                >
                  <p className="text-xs font-semibold mb-2" style={{ color: problem.barColor }}>
                    Solução Praxia:
                  </p>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {problem.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
