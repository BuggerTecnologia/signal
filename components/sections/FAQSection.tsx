'use client'

import { motion } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

const faqs = [
  {
    question: 'Por onde devo começar?',
    answer: 'Comece pelo Método SIGNAL se não tem clareza sobre o principal gargalo. Entrega diagnóstico e roadmap em 6 semanas. Depois, escolha entre execução própria, acompanhamento via Mentoria ou implementação com especialista (Projetos).',
  },
  {
    question: 'Preciso fazer o Método SIGNAL antes de contratar Mentoria ou Projetos?',
    answer: 'Não obrigatoriamente. Se já tem diagnóstico claro, começamos direto. Fazemos avaliação inicial de 1h para entender o momento e recomendar o melhor ponto de entrada.',
  },
  {
    question: 'Qual a curva de aprendizado do Método SIGNAL?',
    answer: 'É straightforward. Acompanhe a metodologia estruturada passo a passo. Materiais de suporte prontos para cada etapa. Interface simples e intuitiva. Qualquer gestor consegue executar.',
  },
  {
    question: 'Quanto tempo até ter resultado?',
    answer: 'SIGNAL entrega diagnóstico e plano em 6 semanas. Projetos de implantação geram resultados mensuráveis em 60 a 180 dias. Mentoria começa a gerar resultado operacional a partir do 2º mês.',
  },
  {
    question: 'Atendo em qualquer localidade no Brasil?',
    answer: 'Sim. SIGNAL é 100% remoto. Mentoria é remota com sessões ao vivo estruturadas. Projetos incluem presença in-company em fases críticas. Logística negociada conforme escopo.',
  },
]

export default function FAQSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-canvas-warm">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-medium text-ink mb-4">
            Dúvidas frequentes
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <Accordion.Root type="single" collapsible>
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Accordion.Item
                  value={`item-${idx}`}
                  className="border-b border-line last:border-b-0"
                >
                  <Accordion.Trigger className="w-full flex items-center justify-between py-4 sm:py-6 px-4 sm:px-6 hover:bg-canvas-paper transition-colors group text-left rounded-md">
                    <span className="font-medium text-ink group-hover:text-ink-mid transition-colors text-base sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDownIcon className="w-5 h-5 text-ink-muted flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  )
}
