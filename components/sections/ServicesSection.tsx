'use client'

import { motion } from 'framer-motion'

export default function ServicesSection() {
  const services = [
    {
      title: 'PRAXIS Assessment',
      description: 'Diagnóstico profundo da sua organização. Identificamos gaps em execução, governança e operações. Mapa claro dos problemas e oportunidades.',
      highlights: ['Análise 360°', 'Identificação de gaps', 'Roadmap de transformação'],
      cta: 'Solicitar Assessment',
    },
    {
      title: 'PRAXIS Mentoria',
      description: 'Acompanhamento personalizado do C-Level. Mentores experientes orientam seu caminho para execução excelente. Accountability com conhecimento prático.',
      highlights: ['Mentores certificados', 'Sessões personalizadas', 'Suporte contínuo'],
      cta: 'Conhecer Programa',
    },
    {
      title: 'PRAXIS Projetos',
      description: 'Execução de transformação end-to-end. Do desenho ao delivery. Nossas equipes trabalham com suas pessoas para garantir sustentabilidade.',
      highlights: ['Execução garantida', 'Equipes dedicadas', 'Metodologia comprovada'],
      cta: 'Discutir Projeto',
    },
  ]

  return (
    <section id="servicos" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Serviços PRAXIS
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Três formas de transformar sua organização
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass glass-hover p-8 rounded-2xl flex flex-col"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-4 font-serif">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 flex-grow">
                {service.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-8 pt-6 border-t border-white/10">
                {service.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/40 hover:to-blue-600/40 text-blue-300 hover:text-blue-200 font-semibold transition-all duration-300 border border-blue-500/30 hover:border-blue-400/60">
                {service.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1">
            Falar com Especialista →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
