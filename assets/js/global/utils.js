/* ============================================
   UTILITY FUNCTIONS - Modernizado e Otimizado
   ============================================ */

// Seletores otimizados
export function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

export function qsa(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

// Event delegation otimizado
export function on(event, selector, handler, scope = document) {
  scope.addEventListener(event, (e) => {
    const target = e.target.closest(selector);
    if (target) handler(e, target);
  });
}

// Debounce para performance
export function debounce(func, wait = 150) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle para scroll events
export function throttle(func, limit = 100) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/* ============================================
   SCROLL REVEAL - Sistema Aprimorado
   ============================================ */

export function initScrollReveal() {
  const elements = qsa('.reveal');
  
  if (!elements.length) return;
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Adiciona delay baseado no data-delay
        const delay = entry.target.dataset.delay || 0;
        
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, parseInt(delay));
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  elements.forEach((el) => observer.observe(el));
}

/* ============================================
   NAVBAR - Scroll Effects
   ============================================ */

export function initNavbarEffects() {
  const navbar = qs('.navbar');
  if (!navbar) return;
  
  let lastScroll = 0;
  
  const handleScroll = throttle(() => {
    const currentScroll = window.pageYOffset;
    
    // Adiciona classe quando scrollar
    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  }, 100);
  
  window.addEventListener('scroll', handleScroll);
}

/* ============================================
   NAVBAR CONTRAST - Baseado na Seção
   ============================================ */

export function initNavbarContrast() {
  const navbar = qs('.navbar');
  const sections = qsa('section[data-contrast]');
  
  if (!navbar || !sections.length) return;
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '-80px 0px 0px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const contrast = entry.target.getAttribute('data-contrast');
        
        if (contrast === 'light') {
          navbar.classList.add('navbar--invert');
        } else {
          navbar.classList.remove('navbar--invert');
        }
      }
    });
  }, observerOptions);
  
  sections.forEach((sec) => observer.observe(sec));
}

/* ============================================
   SMOOTH SCROLL - Para Links Internos
   ============================================ */

export function initSmoothScroll() {
  const links = qsa('a[href^="#"]');
  
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href === '#') return;
      
      const target = qs(href);
      
      if (target) {
        e.preventDefault();
        
        const offsetTop = target.offsetTop - 80; // navbar height
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Atualiza URL sem scroll
        history.pushState(null, null, href);
      }
    });
  });
}

/* ============================================
   COUNTERS - Animação de Números
   ============================================ */

export function initCounters() {
  const numbers = qsa('.stat__number');
  
  if (!numbers.length) return;
  
  const animateCounter = (el) => {
    const end = parseInt(el.dataset.count, 10) || 0;
    const duration = 1500;
    const startTime = performance.now();
    
    const easeOutQuad = (t) => t * (2 - t);
    
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const value = Math.floor(easedProgress * end);
      
      el.textContent = `+${value}`;
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = `+${end}`;
      }
    };
    
    requestAnimationFrame(step);
  };
  
  const observerOptions = {
    threshold: 0.8
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  numbers.forEach((n) => observer.observe(n));
}

/* ============================================
   MENU FILTERS - Sistema de Filtros
   ============================================ */

export function initMenuFilters() {
  const buttons = qsa('.filter-btn');
  const items = qsa('.menu-item');
  
  if (!buttons.length || !items.length) return;
  
  const setActive = (filter) => {
    // Atualiza botões
    buttons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.filter === filter);
      btn.setAttribute('aria-selected', btn.dataset.filter === filter);
    });
    
    // Filtra items com animação
    items.forEach((item, index) => {
      const category = item.dataset.category;
      const shouldShow = filter === 'all' || category === filter;
      
      if (shouldShow) {
        item.style.display = '';
        setTimeout(() => {
          item.classList.add('is-visible');
        }, index * 50);
      } else {
        item.classList.remove('is-visible');
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  };
  
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      setActive(btn.dataset.filter);
    });
  });
  
  // Inicializa com 'all'
  setActive('all');
}

/* ============================================
   LAZY LOADING - Para Imagens
   ============================================ */

export function initLazyLoading() {
  const images = qsa('img[data-src]');
  
  if (!images.length) return;
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach((img) => imageObserver.observe(img));
}

/* ============================================
   PARALLAX - Removido
   ============================================ */

// Parallax foi removido para garantir layout estático e melhor performance.
export function initParallax() {
  // noop
}

/* ============================================
   BUTTON RIPPLE - Efeito de Clique
   ============================================ */

export function initButtonRipple() {
  const buttons = qsa('.btn');
  
  buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

/* ============================================
   FORM VALIDATION - Feedback Visual
   ============================================ */

export function initFormValidation() {
  const forms = qsa('form');
  
  forms.forEach((form) => {
    const inputs = qsa('input, textarea', form);
    
    inputs.forEach((input) => {
      input.addEventListener('blur', () => {
        if (input.value.trim() !== '') {
          input.classList.add('has-value');
        } else {
          input.classList.remove('has-value');
        }
      });
    });
  });
}

/* ============================================
   SCROLL PROGRESS BAR
   ============================================ */

export function initScrollProgress() {
  const progressBar = qs('.scroll-progress');
  
  if (!progressBar) return;
  
  const updateProgress = throttle(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    progressBar.style.transform = `scaleX(${scrollPercent / 100})`;
    progressBar.setAttribute('aria-valuenow', Math.round(scrollPercent));
  }, 16);
  
  window.addEventListener('scroll', updateProgress);
  updateProgress();
}

/* ============================================
   PERFORMANCE OBSERVER - Monitoramento
   ============================================ */

export function initPerformanceMonitoring() {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log de performance (pode ser enviado para analytics)
        if (entry.duration > 100) {
          console.warn(`Slow operation detected: ${entry.name} took ${entry.duration}ms`);
        }
      }
    });
    
    observer.observe({ entryTypes: ['measure'] });
  }
}