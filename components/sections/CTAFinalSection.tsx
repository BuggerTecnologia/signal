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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-ink">
            Por onde você quer
            <br />
            <span className="text-ink-muted">começar?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Não importa onde está a empresa agora. O primeiro passo é sempre ter clareza — sobre o problema real, o custo que ele gera e o plano para resolver.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              className="px-8 py-3.5 rounded-md bg-ink hover:bg-ink-mid text-canvas font-medium transition-colors duration-300"
            >
              ① Começar pelo Curso SIGNAL
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              className="px-8 py-3.5 rounded-md border border-line hover:bg-canvas-warm text-ink font-medium transition-colors duration-300"
            >
              ② Quero a Mentoria Praxia
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              className="px-8 py-3.5 rounded-md border border-line hover:bg-canvas-warm text-ink font-medium transition-colors duration-300"
            >
              ③ Preciso de um Projeto
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
            Não tem certeza por onde começar? Fale com um especialista e indicamos o caminho certo para o seu momento.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
