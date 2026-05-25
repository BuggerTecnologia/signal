'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    title: 'Clareza absoluta',
    description: 'Descubra os 3 gargalos que custam mais caro — em reais, não em feeling'
  },
  {
    title: 'Plano pronto',
    description: 'Roadmap de 90 dias executável para apresentar aos sócios na próxima reunião'
  },
  {
    title: 'Documentação completa',
    description: 'Todos os artefatos prontos (sem precisar refazer do zero): brief, scorecard, plano, slides'
  },
  {
    title: 'Implementação acompanhada',
    description: 'Suporte direto para tirar dúvidas na hora de colocar em prática'
  },
  {
    title: 'Segurança nas decisões',
    description: 'Dados e método para defender suas próximas decisões estratégicas'
  },
  {
    title: 'Framework comprovado',
    description: 'Baseado em PMI/PMBOK, Lean Six Sigma, OKR, PRINCE2 e Kotter 8-Step'
  },
]

const SignalVisual = () => (
  <div className="bg-canvas-paper border border-line rounded-lg p-8 shadow-card space-y-6">
    {/* Title */}
    <div className="flex items-center justify-between pb-4 border-b border-line">
      <h4 className="text-lg font-medium text-ink">Diagnóstico 5D</h4>
      <span className="text-xs font-medium text-ink-muted">PREVIEW</span>
    </div>

    {/* Dimensions */}
    <div className="space-y-4">
      {[
        { name: 'Strategy', value: 1.8, color: '#185FA5' },
        { name: 'Growth', value: 2.7, color: '#D85A30' },
        { name: 'Execution', value: 2.2, color: '#BA7517' },
        { name: 'Governance', value: 1.2, color: '#0F6E56' },
        { name: 'Digital', value: 1.0, color: '#534AB7' },
      ].map((dim, idx) => (
        <div key={idx}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-ink">{dim.name}</span>
            <span className="text-sm font-medium text-ink-muted">{dim.value.toFixed(1)}</span>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${(dim.value / 5) * 100}%` }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 * idx }}
            className="h-1.5 rounded-full"
            style={{ backgroundColor: dim.color }}
          />
        </div>
      ))}
    </div>

    {/* Insight */}
    <div className="pt-4 border-t border-line bg-canvas-warm rounded-lg p-4 mb-4">
      <p className="text-xs text-ink font-medium mb-2">ANÁLISE DO DIAGNÓSTICO</p>
      <p className="text-xs text-ink-muted leading-relaxed">
        Governance é o gargalo crítico. Sem estrutura de decisão, a empresa não conseguirá escalar sem aumentar a dependência do dono.
      </p>
    </div>

    {/* Based on */}
    <div className="pt-4 border-t border-line">
      <p className="text-xs font-semibold text-ink-muted mb-3 uppercase tracking-wide">Baseado em:</p>
      <div className="flex flex-wrap gap-2">
        {['PMI/PMBOK 7', 'Lean Six Sigma DMAIC', 'OKR', 'PRINCE2', 'Kotter 8-Step'].map((framework, idx) => (
          <span key={idx} className="text-xs text-ink-muted bg-canvas rounded px-2.5 py-1.5 border border-line">
            {framework}
          </span>
        ))}
      </div>
    </div>
  </div>
)

export default function ProductSignalSection() {
  return (
    <section id="signal" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-medium text-ink-muted">01</span>
              <span className="inline-block px-3 py-1.5 rounded-full bg-ink/5 text-ink-muted text-xs font-medium uppercase">
                Método de Diagnóstico
              </span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-ink mb-4">
                Método SIGNAL
              </h2>
              <p className="text-lg sm:text-xl text-ink-muted">
                Diagnostique sua empresa e construa seu roadmap executivo
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-ink-muted leading-relaxed max-w-xl">
              Aplique o método SIGNAL na sua empresa e saia com diagnóstico completo em 6 semanas. Gargalos quantificados financeiramente. Roadmap de 90 dias pronto para executar. <span className="text-ink font-medium">Você recebe toda a metodologia, artefatos e suporte para implementar a solução na sua realidade.</span>
            </p>

            {/* Para quem é - SPOTLIGHT */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-accent-green/10 to-accent-green/5 border-2 border-accent-green rounded-xl p-6 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <p className="text-sm font-semibold text-accent-green mb-2 uppercase tracking-wide">Para quem é (O cliente ideal)</p>
                <p className="text-ink font-medium leading-relaxed text-lg">
                  Donos de empresas de <span className="text-accent-green font-bold">R$5M a R$20M</span> que cresceram por venda e reputação pessoal, mas sabem que <span className="text-accent-green font-bold">precisam de estrutura para escalar sem se quebrar</span> — e querem insights antes de contratar consultoria cara.
                </p>
              </div>
            </motion.div>

            {/* Benefits */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-ink uppercase tracking-wider">O que você recebe</p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex gap-4 bg-canvas-paper border border-line rounded-lg p-4 hover:border-line-strong transition-colors"
                  >
                    <span className="text-accent-green font-bold flex-shrink-0 text-xl">✓</span>
                    <div className="flex-1">
                      <p className="text-ink font-semibold text-sm mb-1">{benefit.title}</p>
                      <p className="text-ink-muted text-xs leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ x: 4 }}
              className="text-ink hover:text-ink-muted font-medium text-lg underline decoration-1 underline-offset-4 transition-colors"
            >
              Quero conhecer o Método SIGNAL →
            </motion.button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <SignalVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
