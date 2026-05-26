'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'SIGNAL', href: '#signal' },
    { label: 'Mentoria', href: '#mentoria' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'O Método', href: '#metodo' },
  ]

  const handleWhatsAppContact = () => {
    const phoneNumber = '5541988033251'
    const message = 'Olá, gostaria de começar meu diagnóstico SIGNAL gratuito'
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <nav className="fixed top-0 w-full z-[999] bg-canvas border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-sm bg-ink flex items-center justify-center">
              <span className="text-canvas font-bold text-lg">Px</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-ink">PRAXIA</span>
              <span className="text-xs text-ink-muted font-medium">Consultoria</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink-muted hover:text-ink transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={handleWhatsAppContact}
            className="hidden md:block px-6 py-2.5 rounded-md bg-ink hover:bg-ink-mid text-canvas font-medium text-sm transition-colors duration-300 cursor-pointer"
          >
            Falar com Especialista
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 relative w-6 h-6"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-ink block rounded"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-ink block rounded"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-ink block rounded"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-canvas-warm border-t border-line"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-ink-muted hover:text-ink py-2 transition-colors"
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
              className="w-full px-4 py-2.5 rounded-md bg-ink hover:bg-ink-mid text-canvas font-medium text-sm mt-4 transition-colors cursor-pointer"
            >
              Falar com Especialista
            </button>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
