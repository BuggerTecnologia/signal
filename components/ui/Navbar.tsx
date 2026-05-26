'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Cases', href: '#cases' },
    { label: 'Contato', href: '#contato' },
  ]

  const handleWhatsAppContact = () => {
    const phoneNumber = '5541988033251'
    const message = 'Olá, gostaria de começar meu diagnóstico SIGNAL gratuito'
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <nav className="fixed top-0 w-full z-[999] glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="font-serif text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              PRAXIS
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleWhatsAppContact}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
            >
              Falar com Especialista
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 relative w-8 h-8"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block rounded"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white block rounded"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block rounded"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-navy-light/50 backdrop-blur-md rounded-b-lg"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-300 hover:text-white text-sm font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                handleWhatsAppContact()
                setIsOpen(false)
              }}
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-sm cursor-pointer"
            >
              Falar com Especialista
            </button>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
