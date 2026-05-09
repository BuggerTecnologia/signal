'use client'

import { motion } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

const faqs = [
  {
    question: 'Por onde devo começar?',
    answer: 'Se você ainda não tem clareza sobre o principal gargalo da sua empresa, comece pelo SIGNAL. O curso entrega o diagnóstico e o roadmap. A partir daí, você decide se quer executar sozinho, com acompanhamento (Mentoria) ou com um consultor implantando (Projetos).',
  },
  {
    question: 'Preciso ter feito o curso para contratar a Mentoria ou Projetos?',
    answer: 'Não necessariamente. Se você já tem um diagnóstico claro da empresa, podemos iniciar diretamente. Em muitos casos, fazemos uma avaliação inicial de 1h para entender o momento e recomendar o melhor ponto de entrada.',
  },
  {
    question: 'O SIGNAL usa Inteligência Artificial — preciso saber usar IA?',
    answer: 'Não. O curso ensina do zero como configurar e usar o Claude como ferramenta de análise. Você recebe os prompts prontos para cada etapa. Se sabe usar WhatsApp, consegue usar o método.',
  },
  {
    question: 'Quanto tempo leva para ver resultado?',
    answer: 'O SIGNAL entrega diagnóstico e plano em 6 semanas. Projetos de implantação entregam resultados mensuráveis entre 60 e 180 dias dependendo da complexidade. A Mentoria começa a gerar resultado operacional a partir do segundo mês.',
  },
  {
    question: 'A Praxia atende em todo o Brasil?',
    answer: 'Sim. O SIGNAL é 100% online. A Mentoria é conduzida de forma remota com sessões ao vivo. Projetos de implantação incluem presença in-company para fases críticas — negociamos a logística conforme o escopo.',
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-ink mb-4">
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
                  <Accordion.Trigger className="w-full flex items-center justify-between py-6 px-4 sm:px-6 hover:bg-canvas-paper transition-colors group text-left rounded-md">
                    <span className="font-medium text-ink group-hover:text-ink-mid transition-colors text-lg">
                      {faq.question}
                    </span>
                    <ChevronDownIcon className="w-5 h-5 text-ink-muted flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-4 sm:px-6 pb-6 pt-2 text-ink-muted leading-relaxed">
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
