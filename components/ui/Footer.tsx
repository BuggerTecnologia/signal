'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/10 bg-navy-dark/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div className="md:col-span-1">
            <div className="font-serif text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
              PRAXIS
            </div>
            <p className="text-gray-400 text-sm">
              Estratégia com execução. Execução com governança.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Assessment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Mentoria</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Projetos</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Sobre</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Termos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} PRAXIS Consulting. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
