'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    number: 1,
    title: 'Receita cresce. Lucro some.',
    description: 'O crescimento via reputação do dono cria uma ilusão. Faturamento sobe enquanto a margem desaba. O negócio piora conforme cresce.',
    costs: [
      'Margem bruta caindo enquanto contador celebra receita',
      'Lucro absoluto colapsa em 12 a 18 meses sem intervenção',
      'Buraco financeiro descoberto apenas em endividamento acelerado',
      'Perda de R$ 1,5M a 3M nunca aparece como problema nos relatórios'
    ],
    solution: 'Painel de saúde financeira com visibilidade de margens por cliente, produto e canal. Decisões semanais baseadas em dados operacionais reais.',
    color: 'accent-amber',
    barColor: '#BA7517',
  },
  {
    number: 2,
    title: 'O diagnóstico foi feito. E ficou no PDF.',
    description: 'Relatório excelente, preciso, caro. Ficou na gaveta. Não por falta de vontade, mas porque o plano não encaixa na realidade operacional da sua empresa.',
    costs: [
      'Recomendações demandam investimentos que a operação não possui hoje',
      'Time não tem capacidade interna para absorver mudança sem suporte especializado',
      'Implementação zero. Confiança interna erodida. Investimento perdido.',
      'Cada mês de atraso custa em oportunidade o equivalente ao próprio diagnóstico'
    ],
    solution: 'Implementação lado a lado com seu time. Consultor alocado na operação. Responsável claro por cada iniciativa com 60 dias de sustentação pós-projeto.',
    color: 'accent-green',
    barColor: '#0F6E56',
  },
  {
    number: 3,
    title: 'Você é bom demais no operacional.',
    description: 'Sem estrutura de decisão documentada, delegar vira caos. Você acaba puxando tudo de volta. A empresa não escala sem você.',
    costs: [
      '35% do tempo do CEO em decisões que qualquer gerente poderia tomar',
      '12% dos pedidos perdidos por gargalo de aprovação',
      'Empresa trava em R$ 15 a 20M porque escala depende unicamente de você',
      'Impossível tirar férias, abrir unidade ou captar investimento sem operação desabar'
    ],
    solution: 'Estrutura de alçada clara com RACI por função. Ritual de decisão que funciona independente da sua presença.',
    color: 'accent-sky',
    barColor: '#7CB4D6',
  },
]

export default function ProblemSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-canvas-warm">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-sm font-medium text-accent-green mb-4 uppercase font-semibold">Onde a maioria falha</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-ink mb-6 max-w-4xl mx-auto">
            3 padrões que impedem escala
          </h2>
          <p className="text-base sm:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Empresas que crescem 5-20x por venda/reputação do dono chegam a um teto. Não é falta de mercado. É falta de estrutura.
          </p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -4 }}
              className="relative bg-canvas-paper border border-line rounded-lg overflow-hidden transition-all duration-300 hover:shadow-cardHover flex flex-col h-full"
            >
              {/* Top colored bar */}
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: problem.barColor }}
              />

              <div className="p-8 flex flex-col flex-grow gap-6">
                {/* Number and Title */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 text-canvas font-semibold text-base"
                    style={{ backgroundColor: problem.barColor }}
                  >
                    {problem.number}
                  </div>
                  <h3 className="text-lg font-semibold text-ink leading-tight">
                    {problem.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-ink-muted leading-relaxed">
                  {problem.description}
                </p>

                {/* O custo real */}
                <div className="pb-6 border-b border-line">
                  <p className="text-xs font-semibold text-ink mb-3 uppercase tracking-wide">O custo real:</p>
                  <ul className="space-y-2">
                    {problem.costs.map((cost, i) => (
                      <li key={i} className="text-xs text-ink-muted leading-relaxed flex gap-2">
                        <span className="text-accent-green font-bold">•</span>
                        <span>{cost}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solução Praxia - pushed to bottom */}
                <div
                  className="p-4 rounded-lg mt-auto"
                  style={{ backgroundColor: `${problem.barColor}10` }}
                >
                  <p className="text-xs font-semibold mb-2" style={{ color: problem.barColor }}>
                    Solução Praxia:
                  </p>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {problem.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
