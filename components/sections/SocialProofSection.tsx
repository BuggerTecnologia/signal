'use client'

import { motion } from 'framer-motion'

const results = [
  { value: 'R$ 1.2M', label: 'custo médio de gargalos identificados em R$10-20M' },
  { value: '67%', label: 'redução de decisões centralizadas no dono' },
  { value: '3.8×', label: 'ROI médio de projetos de implantação de processo' },
  { value: '90 dias', label: 'para transformar diagnóstico em resultado medido' },
]

const testimonials = [
  {
    quote: 'Sabia que tinha problema de gestão. Descobrir que custava R$900 mil por ano foi o choque. O SIGNAL mostrou exatamente onde sangrávamos e o plano para parar.',
    name: 'Marcelo Ribeiro',
    company: 'Distribuidora · R$14M/ano',
  },
  {
    quote: 'Tinha diagnóstico e plano. Faltava execução porque o operacional consumia tudo. A Mentoria com consultor alocado foi o diferencial que faltava.',
    name: 'Ana Ferreira',
    company: 'Clínica de Estética · R$8M/ano',
  },
  {
    quote: 'Consultoria anterior ficou apenas no relatório. O projeto Praxia foi diferente: o consultor trabalhou na operação até o processo estar pronto e sustentável.',
    name: 'Carlos Pires',
    company: 'Franqueado · 4 unidades',
  },
]

export default function SocialProofSection() {
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
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-canvas">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-ink-muted mb-4 uppercase">Resultados</p>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-medium text-ink mb-4">
            Método aplicado.
            <br />
            <span className="text-ink-muted">Número medido.</span>
          </h2>
        </motion.div>

        {/* Results cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-20"
        >
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -4 }}
              className="bg-canvas-paper border border-line rounded-lg p-3 sm:p-4 lg:p-6 text-center shadow-card hover:shadow-cardHover transition-all"
            >
              <div className="text-2xl sm:text-3xl font-medium text-ink mb-2">
                {result.value}
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {result.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-medium text-ink text-center mb-12">Histórias reais</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -4 }}
                className="bg-canvas-paper border border-line rounded-lg p-4 sm:p-6 lg:p-8 shadow-card hover:shadow-cardHover transition-all"
              >
                <p className="text-base sm:text-lg text-ink-muted mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-line pt-6">
                  <p className="font-medium text-ink">{testimonial.name}</p>
                  <p className="text-xs text-ink-muted mt-1">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
