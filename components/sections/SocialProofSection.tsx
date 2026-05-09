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
    quote: 'Eu sabia que tinha problema de gestão. Não sabia que estava custando R$900 mil por ano. O SIGNAL me mostrou exatamente onde estava sangrando — e o plano para parar.',
    name: 'Marcelo Ribeiro',
    company: 'Distribuidora · R$14M/ano',
  },
  {
    quote: 'A Mentoria foi o que faltava. Eu tinha o diagnóstico, tinha o plano. Só não executava porque o dia a dia engoliu tudo. Com o consultor ao lado, mudou.',
    name: 'Ana Ferreira',
    company: 'Clínica de Estética · R$8M/ano',
  },
  {
    quote: 'Já tinha feito consultoria antes e ficou só no relatório. O projeto Praxia foi diferente: o consultor ficou dentro da operação até o processo funcionar sozinho.',
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-ink mb-4">
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
              className="bg-canvas-paper border border-line rounded-lg p-6 text-center shadow-card hover:shadow-cardHover transition-all"
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
                className="bg-canvas-paper border border-line rounded-lg p-8 shadow-card hover:shadow-cardHover transition-all"
              >
                <p className="text-lg text-ink-muted mb-6 leading-relaxed italic">
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
