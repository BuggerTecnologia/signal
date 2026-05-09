'use client'

import { motion } from 'framer-motion'

export default function ValuePropositionSection() {
  const pillars = [
    {
      title: 'Arquitetura de Estratégia',
      description: 'Estruturamos sua visão em planos concretos, mensuráveis e executáveis. Clareza total sobre direção e milestones.',
      icon: '🏗️',
    },
    {
      title: 'Engenharia de Receita',
      description: 'Transformamos estratégia em fluxo de caixa. Aumentamos receita, reduzimos custos e otimizamos margens com método.',
      icon: '💰',
    },
    {
      title: 'Eficiência Sistêmica',
      description: 'Eliminamos desperdício operacional. Processos melhores, pessoas produtivas, tecnologia habilitadora.',
      icon: '⚙️',
    },
    {
      title: 'Governança de Projetos',
      description: 'Entrega no prazo, dentro do orçamento, com qualidade. Accountability clara e decisões informadas.',
      icon: '🎯',
    },
  ]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Não vendemos horas de consultoria.
          </h2>
          <p className="text-2xl font-semibold text-blue-400">
            Protegemos a sua decisão.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group glass glass-hover p-8 rounded-2xl border border-white/10 hover:border-blue-500/50"
            >
              <div className="text-5xl mb-4">{pillar.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-lg">
            Esses 4 pilares formam a base de uma organização que executa e entrega resultados sustentáveis.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
