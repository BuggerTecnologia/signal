'use client'

import { motion } from 'framer-motion'

const PHONE = '5541988033251'

function whatsappUrl(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
}

const ctas = [
  {
    label: 'Diagnóstico com Método SIGNAL',
    message: 'Olá, gostaria de começar meu diagnóstico SIGNAL gratuito',
    primary: true,
  },
  {
    label: 'Mentoria Praxia',
    message: 'Olá, gostaria de saber mais sobre a Mentoria Praxia',
    primary: false,
  },
  {
    label: 'Projeto de Implantação',
    message: 'Olá, gostaria de saber mais sobre os Projetos de Implantação Praxia',
    primary: false,
  },
]

export default function CTAFinalSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-canvas overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center space-y-10 sm:space-y-12"
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
            {ctas.map((cta) => (
              <motion.a
                key={cta.label}
                href={whatsappUrl(cta.message)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                className={
                  cta.primary
                    ? 'px-6 sm:px-8 py-3 sm:py-3.5 rounded-md bg-ink hover:bg-ink-mid text-canvas font-medium text-sm sm:text-base transition-colors duration-300 cursor-pointer'
                    : 'px-6 sm:px-8 py-3 sm:py-3.5 rounded-md border border-line hover:bg-canvas-warm text-ink font-medium text-sm sm:text-base transition-colors duration-300 cursor-pointer'
                }
              >
                {cta.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm text-ink-muted"
          >
            Incerto sobre o melhor caminho?{' '}
            <a
              href={whatsappUrl('Olá, gostaria de conversar com um especialista para entender qual solução Praxia é ideal para minha empresa')}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-ink transition-colors"
            >
              Converse com um especialista.
            </a>{' '}
            Indicaremos a trajetória ideal para seu momento.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
