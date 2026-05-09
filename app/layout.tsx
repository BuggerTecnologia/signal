import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Praxia Consultoria | Diagnóstico. Execução. Resultado.',
  description: 'Consultoria estratégica para empresas brasileiras R$5-20M. Método SIGNAL: do diagnóstico ao resultado em 90 dias com IA e consultores que ficam até funcionar.',
  keywords: 'consultoria, estratégia, gestão, diagnóstico, execução, PME, Brasil',
  authors: [{ name: 'Praxia Consultoria' }],
  openGraph: {
    title: 'Praxia Consultoria',
    description: 'Sua empresa cresceu. Sua gestão não. O método Praxia transforma negócios em sistemas profissionais.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://praxia.com.br',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praxia Consultoria',
    description: 'Diagnóstico com clareza. Execução com método. Sustentar com governança.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F4F1EB" />
      </head>
      <body>
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
