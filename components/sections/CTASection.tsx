'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section id="contato" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Pronto para transformar sua organização?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Conversamos sem compromisso sobre seu desafio e como PRAXIS pode ajudar.
          </p>

          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1">
              Falar com Especialista
            </button>
            <button className="px-8 py-4 rounded-xl glass glass-hover text-white font-semibold text-lg">
              Agendar Reunião
            </button>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-12 border-t border-white/10"
          >
            <p className="text-gray-400 mb-4">Ou entre em contato diretamente</p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div>
                <p className="text-gray-500 text-sm mb-1">Email</p>
                <a href="mailto:contato@praxisconsulting.com" className="text-white hover:text-blue-400 transition">
                  contato@praxisconsulting.com
                </a>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10" />
              <div>
                <p className="text-gray-500 text-sm mb-1">Telefone</p>
                <a href="tel:+5511999999999" className="text-white hover:text-blue-400 transition">
                  +55 11 99999-9999
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
