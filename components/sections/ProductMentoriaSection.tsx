'use client'

import { motion } from 'framer-motion'
import ProductBlock from '@/components/shared/ProductBlock'

const benefits = [
  'Diagnóstico validado com seu time de gestão — não só com você',
  'Cockpit de Gestão personalizado com os KPIs que importam',
  'Sistema de reuniões redesenhado: menos reunião, mais decisão',
  'OKRs trimestrais acompanhados e revisados a cada 2 semanas',
  'Playbook do time de gestão: "como gerenciamos aqui"',
  'Canal dedicado com consultor + suporte assíncrono em 24h',
]

const MentoriaVisual = () => (
  <div className="bg-canvas-paper border border-line rounded-lg p-8 shadow-card space-y-6">
    {/* Timeline */}
    <div className="space-y-6">
      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-signal-strategy text-canvas font-medium flex items-center justify-center text-sm">M1</div>
          <div className="w-1 h-12 bg-signal-strategy/30 my-2" />
        </div>
        <div>
          <p className="font-medium text-ink">Setup & Diagnóstico</p>
          <p className="text-xs text-ink-muted mt-1">Kickoff com time, análise inicial e mapeamento de processo</p>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-signal-growth text-canvas font-medium flex items-center justify-center text-sm">M2</div>
          <div className="w-1 h-12 bg-signal-growth/30 my-2" />
        </div>
        <div>
          <p className="font-medium text-ink">Execução & Implantação</p>
          <p className="text-xs text-ink-muted mt-1">Sessões bi-semanais, hands-on nos processos, ajustes rápidos</p>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-signal-governance text-canvas font-medium flex items-center justify-center text-sm">M3</div>
        </div>
        <div>
          <p className="font-medium text-ink">Aceleração & Sustentação</p>
          <p className="text-xs text-ink-muted mt-1">Consolidação de resultados, treinamento final, handover</p>
        </div>
      </div>
    </div>

    {/* KPI Cards */}
    <div className="pt-6 border-t border-line grid grid-cols-2 gap-4">
      <div className="bg-canvas-warm rounded-lg p-4 text-center border border-line">
        <div className="text-2xl font-medium text-ink mb-1">9.5h</div>
        <div className="text-xs text-ink-muted">consultoria/mês</div>
      </div>
      <div className="bg-canvas-warm rounded-lg p-4 text-center border border-line">
        <div className="text-2xl font-medium text-ink mb-1">24h</div>
        <div className="text-xs text-ink-muted">resposta canal</div>
      </div>
      <div className="bg-canvas-warm rounded-lg p-4 text-center border border-line">
        <div className="text-2xl font-medium text-ink mb-1">3</div>
        <div className="text-xs text-ink-muted">sessões/mês</div>
      </div>
      <div className="bg-canvas-warm rounded-lg p-4 text-center border border-line">
        <div className="text-2xl font-medium text-ink mb-1">6</div>
        <div className="text-xs text-ink-muted">entregáveis</div>
      </div>
    </div>
  </div>
)

export default function ProductMentoriaSection() {
  return (
    <section id="mentoria" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-canvas-warm">
      <div className="max-w-7xl mx-auto">
        <ProductBlock
          number={2}
          tag="Acompanhamento"
          title="Mentoria Praxia"
          subtitle="Execute com um consultor ao seu lado"
          description="Você já sabe o que precisa mudar. Agora precisa de alguém que garanta que vai acontecer. Com a Mentoria, um consultor sênior acompanha você e seu time por no mínimo 3 meses — com horas alocadas, rituais implantados e accountability real sobre os resultados."
          forWho="Empresários que têm o diagnóstico mas travam na execução. Que precisam de alguém que obrigue o ritmo, capacite o time e entregue artefatos que o curso não cobre."
          benefits={benefits}
          ctaText="Conhecer a Mentoria"
          visual={<MentoriaVisual />}
          reverse={true}
        />
      </div>
    </section>
  )
}
