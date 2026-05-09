'use client'

import { motion } from 'framer-motion'

export default function CasesSection() {
  const cases = [
    {
      company: 'Financeira +500M',
      challenge: 'Execução de estratégia de expansão desacelerada',
      result: '45% aumento em receita',
      metrics: [
        { label: 'Receita', value: '+45%' },
        { label: 'Prazo', value: '18 meses' },
        { label: 'Custos', value: '-22%' },
      ],
      methodology: 'Assessment + Mentoria + Projetos',
    },
    {
      company: 'Industria +1B',
      challenge: 'Governança fraca causando retrabalho e atrasos',
      result: '3.2x ROI em transformação',
      metrics: [
        { label: 'Eficiência', value: '+68%' },
        { label: 'Prazo', value: '-35 dias' },
        { label: 'Retrabalho', value: '-80%' },
      ],
      methodology: 'Assessment + Projetos',
    },
    {
      company: 'Serviços +2B',
      challenge: 'Decisões lentas e inconsistentes na liderança',
      result: '92% execução no prazo',
      metrics: [
        { label: 'Time-to-decision', value: '-65%' },
        { label: 'Satisfação', value: '+89%' },
        { label: 'Retenção', value: '+34%' },
      ],
      methodology: 'Mentoria executiva',
    },
  ]

  return (
    <section id="cases" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Resultados que falam
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Histórias reais de transformação e execução excelente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass glass-hover p-8 rounded-2xl flex flex-col border border-white/10"
            >
              {/* Company */}
              <h3 className="text-lg font-semibold text-gray-300 mb-2">
                {caseItem.company}
              </h3>

              {/* Challenge */}
              <p className="text-sm text-gray-400 mb-6 pb-6 border-b border-white/10">
                <span className="font-semibold text-white">Desafio:</span> {caseItem.challenge}
              </p>

              {/* Result headline */}
              <div className="mb-8">
                <p className="text-blue-400 font-semibold text-sm mb-2">RESULTADO</p>
                <h4 className="text-2xl font-bold text-white">
                  {caseItem.result}
                </h4>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-white/10">
                {caseItem.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <p className="text-blue-400 font-bold text-lg mb-1">
                      {metric.value}
                    </p>
                    <p className="text-xs text-gray-400">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Methodology */}
              <p className="text-xs text-gray-400">
                <span className="font-semibold text-white">Metodologia:</span> {caseItem.methodology}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
