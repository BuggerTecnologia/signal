'use client'

import { motion } from 'framer-motion'

export default function CTAFinalSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-canvas overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center space-y-12"
        >
          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-medium text-ink">
            Por onde você quer
            <br />
            <span className="text-ink-muted">começar?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Onde quer que esteja sua empresa. O primeiro passo é clareza. Sobre o problema real, seu custo financeiro e o plano para resolver.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-md bg-ink hover:bg-ink-mid text-canvas font-medium text-sm sm:text-base transition-colors duration-300"
            >
              Diagnóstico com Método SIGNAL
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-md border border-line hover:bg-canvas-warm text-ink font-medium text-sm sm:text-base transition-colors duration-300"
            >
              Mentoria Praxia
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-md border border-line hover:bg-canvas-warm text-ink font-medium text-sm sm:text-base transition-colors duration-300"
            >
              Projeto de Implantação
            </motion.button>
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm text-ink-muted"
          >
            Incerto sobre o melhor caminho? Converse com um especialista. Indicaremos a trajetória ideal para seu momento.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
