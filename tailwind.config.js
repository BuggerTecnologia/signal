/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ─── BACKGROUNDS ─────────────────────────────────
        // Bege quente — assinatura visual do Attio
        canvas: {
          DEFAULT: '#F4F1EB',  // off-white principal
          warm:    '#EDE8DD',  // levemente mais escuro para seções alternadas
          paper:   '#FBF9F4',  // cards e destaques (mais claro)
        },

        // ─── TINTA / TEXTO ───────────────────────────────
        // Preto-grafite quente, nunca puro
        ink: {
          DEFAULT: '#1A1A18',  // texto principal
          mid:     '#3D3D3A',  // texto secundário
          muted:   '#6B6B66',  // texto terciário, legendas
          soft:    '#9B9B96',  // texto desabilitado
        },

        // ─── BORDAS ──────────────────────────────────────
        // Sempre muito sutis — assinatura Attio
        line: {
          DEFAULT: '#E0DCD2',  // borda padrão
          strong:  '#C8C2B5',  // borda em hover
          subtle:  'rgba(26, 26, 24, 0.06)',  // divisores quase invisíveis
        },

        // ─── ACENTOS (uso pontual em ilustrações) ────────
        // Mantidos próximos das cores 5D mas dessaturados
        accent: {
          green: '#0F6E56',  // verde Governance
          rose:  '#D4537E',  // rosa para tags
          sky:   '#7CB4D6',  // azul claro para ilustrações
          amber: '#BA7517',  // âmbar para destaques
        },

        // ─── DIMENSÕES 5D (ilustrações de produto) ───────
        signal: {
          strategy:   '#185FA5',
          growth:     '#D85A30',
          execution:  '#BA7517',
          governance: '#0F6E56',
          digital:    '#534AB7',
        },

        // ─── STATUS ──────────────────────────────────────
        status: {
          success: '#0F6E56',
          warning: '#BA7517',
          danger:  '#A8332A',
        },
      },

      fontFamily: {
        sans: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
        mono: 'Menlo, monospace',
      },

      fontSize: {
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],
        'xl': ['1.25rem', { lineHeight: '1.7' }],
        '2xl': ['1.5rem', { lineHeight: '1.8' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.1' }],
        '5xl': ['3rem', { lineHeight: '1.05' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
      },

      borderRadius: {
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },

      boxShadow: {
        card: '0 1px 2px rgba(26, 26, 24, 0.04), 0 0 0 0.5px rgba(26, 26, 24, 0.08)',
        cardHover: '0 4px 12px rgba(26, 26, 24, 0.08), 0 0 0 0.5px rgba(26, 26, 24, 0.12)',
        none: 'none',
      },

      animation: {
        'fade-in': 'fadeIn 0.7s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
