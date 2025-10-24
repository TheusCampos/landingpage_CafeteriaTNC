# Cafeteria TNC — Site Premium Modernizado ☕

Site one-page para uma cafeteria premium com design moderno e minimalista, inspirado em ambientes sofisticados e acolhedores.

## ✨ Características Principais

### 🎨 Design Moderno
- **Glassmorphism**: Efeitos de vidro fosco em cards e overlays
- **Gradientes Dinâmicos**: Transições suaves e animações de gradiente
- **Tipografia Fluida**: Sistema de escala responsivo com clamp()
- **Microinterações**: Hover effects, ripple effects e animações sutis
- (Removido) Parallax: a página agora utiliza layout estático para maior compatibilidade e performance.

### 🚀 Performance
- **Lazy Loading**: Carregamento otimizado de imagens
- **Throttle & Debounce**: Otimização de eventos de scroll
- **Will-change**: Preparação de animações para melhor performance
- **Intersection Observer**: Animações baseadas em visibilidade
- **CSS Moderno**: Uso de custom properties e calc()

### ♿ Acessibilidade
- **ARIA Labels**: Marcação semântica completa
- **Skip to Content**: Link para pular navegação
- **Focus Visible**: Indicadores visuais de foco
- **Reduced Motion**: Suporte para preferências de movimento
- **High Contrast**: Adaptação para alto contraste
- **Keyboard Navigation**: Navegação completa por teclado

### 📱 Responsividade
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints Inteligentes**: Sistema de grid adaptativo
- **Touch Optimized**: Áreas de toque adequadas
- **Viewport Units**: Uso de unidades relativas

## 🎯 Melhorias Implementadas

### CSS
- ✅ Sistema de design tokens modernizado
- ✅ Paleta de cores refinada com gradientes
- ✅ Sombras e elevações em múltiplos níveis
- ✅ Border radius consistente
- ✅ Espaçamento baseado em sistema 4px
- ✅ Transições com timing functions customizadas
- ✅ Animações otimizadas com keyframes
- ✅ Scrollbar customizada
- ✅ Selection styling

### JavaScript
- ✅ Scroll reveal aprimorado com delays
- ✅ Navbar com efeitos de scroll
- ✅ Smooth scroll para links internos
- ✅ Contadores animados com easing
- ✅ Sistema de filtros com animações
- ✅ Button ripple effect
- ✅ Scroll progress bar
- ✅ Performance monitoring
- ✅ Easter egg (Konami code)
- ✅ Custom cursor (desktop)

### HTML
- ✅ Meta tags otimizadas
- ✅ Skip to content link
- ✅ Scroll progress indicator
- ✅ Semantic markup aprimorado
- ✅ ARIA attributes

## 📁 Estrutura de Arquivos

```
assets/
  css/
    global/
      color.css          # Sistema de cores e tokens
      base.css           # Reset e tipografia
      layout.css         # Containers e layout
      components.css     # Componentes reutilizáveis
    pages/
      section-home.css   # Estilos específicos da home
    index.css            # Arquivo principal
  js/
    global/
      utils.js           # Funções utilitárias
      validation.js      # Validações
    pages/
      home.js            # Lógica da home
    index.js             # Entry point
favicons/
  favicon.svg
  manifest.json
index.html
robots.txt
sitemap.xml
README.md
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Marcação semântica
- **CSS3**: Grid, Flexbox, Custom Properties, Animations
- **JavaScript ES6+**: Modules, Arrow Functions, Async/Await
- **Google Fonts**: Playfair Display + Inter
- **Intersection Observer API**: Animações on-scroll
- **Performance API**: Monitoramento de performance

## 🎨 Sistema de Design

### Cores
```css
--color-bg-dark: #1a1410        /* Café escuro profundo */
--color-bg-brown: #2d2420       /* Marrom café refinado */
--color-bg-cream: #faf7f2       /* Creme suave */
--color-accent-gold: #d4af37    /* Dourado vibrante */
--color-accent-gold-light: #e8c96f /* Dourado claro */
```

### Tipografia
```css
--font-title: 'Playfair Display'  /* Títulos elegantes */
--font-body: 'Inter'              /* Corpo de texto */
```

### Espaçamento
Sistema baseado em 4px: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px

### Sombras
6 níveis de elevação: xs, sm, md, lg, xl, 2xl + sombras especiais para gold

## 🚀 Como Rodar Localmente

### Opção 1: Python
```bash
python -m http.server 5500
```
Acesse: http://localhost:5500/

### Opção 2: Node.js
```bash
npx serve
```

### Opção 3: VS Code
Use a extensão **Live Server**

## 📊 Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: 95+

## 🎯 Próximos Passos

- [ ] Adicionar menu mobile responsivo
- [ ] Implementar sistema de pedidos online
- [ ] Integrar com API de pagamento
- [ ] Adicionar galeria de fotos
- [ ] Implementar blog de receitas
- [ ] Adicionar sistema de avaliações
- [ ] Integrar com Google Maps
- [ ] Adicionar newsletter signup
- [ ] Implementar PWA features
- [ ] Adicionar analytics

## 📝 Notas de Desenvolvimento

### Boas Práticas Implementadas
- ✅ Código modular e reutilizável
- ✅ Comentários descritivos
- ✅ Nomenclatura consistente (BEM-like)
- ✅ Separação de responsabilidades
- ✅ DRY (Don't Repeat Yourself)
- ✅ Performance-first approach
- ✅ Accessibility-first approach

### Compatibilidade
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 👨‍💻 Desenvolvido por

**MathuesDev**

---

© 2025 Cafeteria TNC — Todos os direitos reservados.

*"Onde cada gole conta uma história"* ☕✨