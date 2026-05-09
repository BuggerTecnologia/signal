# PRAXIS Consulting - Landing Page

Landing page premium para PRAXIS Consulting focada em execução de estratégia, governança e eficiência operacional.

## 🎨 Design System

- **Estilo**: Minimalista Premium + Neo-Brutalism + Glassmorphism
- **Fundo**: Escuro (Navy #0B1C2C)
- **Acentos**: Azul (#3B82F6)
- **Tipografia**: Crimson Text (headings), Inter (body), Sora (alternativo)

## 🚀 Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.3
- **Animações**: Framer Motion 10.16
- **Linguagem**: TypeScript
- **Fonts**: Google Fonts (Inter, Sora, Crimson Text)

## 📁 Estrutura do Projeto

```
/
├── app/
│   ├── layout.tsx        # Layout raiz
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos globais
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx    # Navegação
│   │   └── Footer.tsx    # Rodapé
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── ValuePropositionSection.tsx
│       ├── ServicesSection.tsx
│       ├── CasesSection.tsx
│       └── CTASection.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🔧 Instalação

1. **Instalar dependências**:
```bash
npm install
```

2. **Rodar servidor de desenvolvimento**:
```bash
npm run dev
```

3. **Abrir no navegador**:
```
http://localhost:3000
```

## 🏗️ Build para Produção

```bash
npm run build
npm run start
```

## ✨ Seções Principais

### 1. Hero Section
- Headline principal com gradient
- Subheadline institucional
- 2 CTAs (principal e secundária)
- Stats com glassmorphism

### 2. Problem Section
- "A Verdade Incômoda"
- 4 problemas com impacto quantificado
- Cards com efeito hover

### 3. Value Proposition
- Headline: "Não vendemos horas de consultoria. Protegemos a sua decisão."
- 4 Pilares:
  - Arquitetura de Estratégia
  - Engenharia de Receita
  - Eficiência Sistêmica
  - Governança de Projetos

### 4. Services
- PRAXIS Assessment
- PRAXIS Mentoria
- PRAXIS Projetos
- Highlights e CTAs individuais

### 5. Cases
- 3 estudos de caso
- Resultados quantificados
- Métricas por projeto

### 6. CTA Final
- Chamada para ação forte
- Informações de contato
- Agenda de reunião

## 🎭 Efeitos Visuais

- **Glassmorphism**: Cards com blur e transparência
- **Gradients**: Backgrounds e CTAs com gradientes
- **Hover Effects**: Animações suaves ao passar o mouse
- **Scroll Animations**: Fade-in e slide-up ao entrar em view
- **Micro-interações**: Botões com glow e feedback visual

## 📱 Responsividade

- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Menu hambúrguer em mobile com animação
- Tipografia escalável

## 🔄 Componentes Reutilizáveis

- `glass` e `glass-hover`: Classes para efeito glassmorphism
- Motion variants: Animações padronizadas com Framer Motion
- Button styles: Gradientes e estados hover
- Grid layouts: Responsivos e bem espaçados

## 🎯 Performance

- Next.js otimizado com Image Optimization
- Lazy loading de componentes
- CSS minificado via Tailwind
- JavaScript modular e tree-shakeable

## 📧 SEO

Meta tags configuradas em `layout.tsx`:
- Title e description
- Open Graph tags
- Viewport meta tag

## 🚀 Deploy

Pronto para deploy em:
- **Vercel** (recomendado)
- **Netlify**
- **AWS Amplify**

## 📝 Customização

### Cores
Edite em `tailwind.config.js`:
```javascript
colors: {
  navy: '#0B1C2C',
  accent: '#3B82F6',
  // ...
}
```

### Tipografia
Edite em `globals.css` e `tailwind.config.js`

### Conteúdo
Edite diretamente nos arquivos `.tsx` em `components/sections/`

## 🤝 Suporte

Para dúvidas sobre customização, contate: rafaelstinglin@gmail.com

---

Desenvolvido com ❤️ por PRAXIS Consulting
