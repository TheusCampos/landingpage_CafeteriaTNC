/* ============================================
   HOME PAGE - Inicialização e Orquestração
   ============================================ */

import {
  initScrollReveal,
  initNavbarEffects,
  initNavbarContrast,
  initSmoothScroll,
  initCounters,
  initMenuFilters,
  initLazyLoading,
  initButtonRipple,
  initFormValidation,
  initScrollProgress,
  initPerformanceMonitoring
} from '../global/utils.js';

/* ============================================
   DOM READY - Inicialização Otimizada
   ============================================ */

function domReady(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

/* ============================================
   INIT ALL - Inicializa Todas as Funcionalidades
   ============================================ */

function initAll() {
  // Performance mark
  performance.mark('init-start');
  
  // Core features
  initScrollReveal();
  initNavbarEffects();
  initNavbarContrast();
  initSmoothScroll();
  initScrollProgress();
  
  // Interactive features
  initCounters();
  initMenuFilters();
  initButtonRipple();
  initFormValidation();
  
  // Performance features
  initLazyLoading();
  
  // Monitoring
  if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
    initPerformanceMonitoring();
  }
  
  // Performance measure
  performance.mark('init-end');
  performance.measure('init-duration', 'init-start', 'init-end');
  
  // Log initialization time
  const measure = performance.getEntriesByName('init-duration')[0];
  console.log(`✨ Cafeteria TNC initialized in ${measure.duration.toFixed(2)}ms`);
  
  // Add loaded class to body
  document.body.classList.add('loaded');
}

/* ============================================
   ADICIONAL: Efeitos Especiais
   ============================================ */

function initSpecialEffects() {
  // Cursor personalizado (opcional)
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  
  // Hover em elementos interativos
  const interactiveElements = document.querySelectorAll('a, button, .category-card, .product-card');
  
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
    });
  });
}

/* ============================================
   EASTER EGG: Konami Code
   ============================================ */

function initEasterEgg() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;
  
  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      
      if (konamiIndex === konamiCode.length) {
        // Easter egg ativado!
        document.body.style.animation = 'rainbow 2s linear infinite';
        console.log('☕ Você descobriu o segredo da Cafeteria TNC!');
        konamiIndex = 0;
        
        setTimeout(() => {
          document.body.style.animation = '';
        }, 5000);
      }
    } else {
      konamiIndex = 0;
    }
  });
}

/* ============================================
   INICIALIZAÇÃO
   ============================================ */

domReady(() => {
  initAll();
  
  // Features opcionais
  if (window.innerWidth > 1024) {
    initSpecialEffects();
  }
  
  // Easter egg
  initEasterEgg();
});

// Export para uso externo se necessário
export { initAll };