'use client'

import { motion } from 'framer-motion'
import ProductBlock from '@/components/shared/ProductBlock'

const benefits = [
  'Diagnóstico 5D completo da sua empresa',
  'TOP 3 gargalos com custo financeiro quantificado',
  'Roadmap Executivo de 90 dias pronto para executar',
  '15 artefatos prontos: brief, scorecard, plano, apresentação para sócios',
  'Suporte direto na aplicação do método na sua realidade',
  'Clareza para decidir o próximo movimento estratégico',
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
    <div className="pt-4 border-t border-line bg-canvas-warm rounded-lg p-4">
      <p className="text-xs text-ink font-medium mb-2">ANÁLISE DO DIAGNÓSTICO</p>
      <p className="text-xs text-ink-muted leading-relaxed">
        Governance é o gargalo crítico. Sem estrutura de decisão, a empresa não conseguirá escalar sem aumentar a dependência do dono.
      </p>
    </div>
  </div>
)

export default function ProductSignalSection() {
  return (
    <section id="signal" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <ProductBlock
          number={1}
          tag="Método de Diagnóstico"
          title="Método SIGNAL"
          subtitle="Diagnostique sua empresa e construa seu roadmap executivo"
          description="Aplique o método SIGNAL na sua empresa e saia com diagnóstico completo em 6 semanas. Gargalos quantificados financeiramente. Roadmap de 90 dias pronto para executar. Você recebe toda a metodologia, artefatos e suporte para implementar a solução na sua realidade."
          forWho="Donos de empresa R$5M a R$20M que sentem que a gestão não acompanhou o crescimento e querem clareza antes de contratar consultoria cara."
          benefits={benefits}
          ctaText="Quero conhecer o Método SIGNAL"
          visual={<SignalVisual />}
        />
      </div>
    </section>
  )
}
