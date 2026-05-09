'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-canvas-warm border-t border-line py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-ink flex items-center justify-center">
                <span className="text-canvas font-bold text-sm">Px</span>
              </div>
              <div>
                <p className="text-sm font-bold text-ink">PRAXIA</p>
                <p className="text-xs text-ink-muted font-medium">Consultoria</p>
              </div>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
              Diagnosticar com clareza. Executar com método. Sustentar com governança.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold text-ink uppercase mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#signal" className="text-ink-muted hover:text-ink transition-colors">SIGNAL</a></li>
              <li><a href="#mentoria" className="text-ink-muted hover:text-ink transition-colors">Mentoria</a></li>
              <li><a href="#projetos" className="text-ink-muted hover:text-ink transition-colors">Projetos</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-ink uppercase mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-ink-muted hover:text-ink transition-colors">Sobre</a></li>
              <li><a href="#" className="text-ink-muted hover:text-ink transition-colors">Blog</a></li>
              <li><a href="#" className="text-ink-muted hover:text-ink transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-ink uppercase mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-ink-muted hover:text-ink transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-ink-muted hover:text-ink transition-colors">Termos</a></li>
              <li><a href="#" className="text-ink-muted hover:text-ink transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-line pt-8">
          <p className="text-center text-sm text-ink-muted">
            © {currentYear} PRAXIA Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
