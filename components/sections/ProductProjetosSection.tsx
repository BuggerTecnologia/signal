'use client'

import { motion } from 'framer-motion'
import ProductBlock from '@/components/shared/ProductBlock'

const benefits = [
  'Consultor sênior Praxia alocado (20h/semana) no seu projeto',
  'Framework PMI/DMAIC adaptado para empresas de médio porte',
  '3 categorias: Processo, Governança ou Estrutura Organizacional',
  'Stage Gates formais com critérios objetivos em cada fase',
  'SOP e Standard Work entregues, testados e validados com o time',
  '60 dias de sustentação pós-projeto incluídos no contrato',
]

const ProjetosVisual = () => (
  <div className="bg-canvas-paper border border-line rounded-lg p-8 shadow-card space-y-6">
    {/* Framework phases */}
    <div className="space-y-3">
      {[
        { name: 'Mobilização & Charter', weeks: 'S1–2', active: false },
        { name: 'Define & Measure', weeks: 'S3–4', active: false },
        { name: 'Analyze & Design', weeks: 'S5–7', active: true },
        { name: 'Pilot (Sprints)', weeks: 'S8–11', active: false },
        { name: 'Rollout + Control', weeks: 'S12–22', active: false },
      ].map((phase, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.05 }}
          className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
            phase.active ? 'bg-canvas-warm border border-line' : 'bg-canvas border border-line'
          }`}
        >
          <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 ${phase.active ? 'bg-ink text-canvas' : 'bg-line text-ink-muted'}`}>
            {phase.active ? '◐' : '○'}
          </div>
          <div className="flex-1 flex items-center justify-between">
            <span className="text-sm font-medium text-ink">{phase.name}</span>
            <span className="text-xs text-ink-muted">{phase.weeks}</span>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Note */}
    <div className="pt-4 border-t border-line space-y-3">
      <p className="text-xs text-ink font-medium uppercase">PMI/DMAIC Framework</p>
      <div className="flex gap-2 text-xs text-ink-muted">
        <span>✓</span>
        <span>Sustentação 60 dias incluída</span>
      </div>
      <div className="flex gap-2 text-xs text-ink-muted">
        <span>✓</span>
        <span>Resultado documentado. ROI medido. SOP entregue.</span>
      </div>
    </div>
  </div>
)

export default function ProductProjetosSection() {
  const handleWhatsAppContact = () => {
    const phoneNumber = '5541988033251'
    const message = 'Olá, gostaria de começar meu diagnóstico SIGNAL gratuito'
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="projetos" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <ProductBlock
          number={3}
          tag="Implantação"
          title="Projetos Praxia"
          subtitle="O consultor implanta. Você vê o resultado."
          description="Quando o gargalo exige intervenção especializada, o Praxia implementa. Metodologia PMI/DMAIC, consultores alocados, 6 fases estruturadas. Resultado mensurável com SLA definido. 60 dias de sustentação incluídos."
          forWho="Empresários com diagnóstico claro que precisam de especialista liderando a implantação. Quando o time interno carece de capacidade ou experiência para a transformação."
          benefits={benefits}
          ctaText="Falar sobre Projetos"
          visual={<ProjetosVisual />}
          onCtaClick={handleWhatsAppContact}
        />
      </div>
    </section>
  )
}
