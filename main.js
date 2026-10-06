/**
 * ==========================================================================
 * DEV SAINI - PERSONAL PORTFOLIO JAVASCRIPT (DC UNIVERSE EDITION)
 * Batman & Wayne Tech Experience &bull; Green Lantern Construct Arrows & Audio SFX
 * 1st Year B.Tech CSE Student, JECRC University, Jaipur
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. DC UNIVERSE SYNTHESIZED SOUND EFFECTS ENGINE (Web Audio API)
  // ------------------------------------------------------------------------
  class DCSoundEngine {
    constructor() {
      this.ctx = null;
      this.enabled = true;
      this.initialized = false;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
          this.initialized = true;
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.init();
      this.enabled = !this.enabled;
      return this.enabled;
    }

    // Green Lantern Ring Construct Arrow Energy Beam (Glide + Energy Burst)
    playGreenLanternConstruct(direction = 'down') {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      try {
        const t = this.ctx.currentTime;

        // Main construct laser / energy sweep
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        filter.type = 'bandpass';
        filter.Q.setValueAtTime(3.8, t);

        if (direction === 'down') {
          osc.frequency.setValueAtTime(950, t);
          osc.frequency.exponentialRampToValueAtTime(190, t + 0.5);
          filter.frequency.setValueAtTime(1800, t);
          filter.frequency.exponentialRampToValueAtTime(360, t + 0.5);
        } else {
          osc.frequency.setValueAtTime(190, t);
          osc.frequency.exponentialRampToValueAtTime(1050, t + 0.5);
          filter.frequency.setValueAtTime(360, t);
          filter.frequency.exponentialRampToValueAtTime(2200, t + 0.5);
        }

        gain.gain.setValueAtTime(0.001, t);
        gain.gain.exponentialRampToValueAtTime(0.22, t + 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + 0.5);

        // High crystalline power ring resonance chime
        const ringOsc = this.ctx.createOscillator();
        const ringGain = this.ctx.createGain();
        ringOsc.type = 'sine';
        ringOsc.frequency.setValueAtTime(1480, t);
        ringOsc.frequency.exponentialRampToValueAtTime(740, t + 0.4);

        ringGain.gain.setValueAtTime(0.12, t);
        ringGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);

        ringOsc.connect(ringGain);
        ringGain.connect(this.ctx.destination);
        ringOsc.start(t);
        ringOsc.stop(t + 0.4);
      } catch (err) {
        // Audio policy or context error fallback
      }
    }

    // Wayne Tech / Batcomputer UI Blip
    playWayneTechClick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      try {
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(2100, t);
        osc.frequency.exponentialRampToValueAtTime(700, t + 0.07);

        gain.gain.setValueAtTime(0.15, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + 0.07);
      } catch (e) {}
    }

    // Subtle Hover Blip
    playHoverHum() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      try {
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, t);
        osc.frequency.exponentialRampToValueAtTime(1320, t + 0.035);

        gain.gain.setValueAtTime(0.025, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.035);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + 0.035);
      } catch (e) {}
    }
  }

  const soundEngine = new DCSoundEngine();

  // ------------------------------------------------------------------------
  // 2. GREEN LANTERN ARROW CONSTRUCT ANIMATION SYSTEM (HTML5 Canvas)
  // ------------------------------------------------------------------------
  const canvas = document.getElementById('glArrowCanvas');
  const glHud = document.getElementById('glConstructHud');
  let ctx = null;
  let animId = null;
  let particles = [];
  let arrows = [];
  let rings = [];

  if (canvas) {
    ctx = canvas.getContext('2d');
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  }

  class GLConstructArrow {
    constructor(x, y, targetY, direction = 'down') {
      this.x = x;
      this.y = y;
      this.direction = direction;
      this.speed = direction === 'down' ? 28 : -28;
      this.length = 75;
      this.width = 18;
      this.targetY = targetY;
      this.life = 1;
      this.decay = 0.015;
      this.sparkInterval = 0;
    }

    update() {
      this.y += this.speed;
      this.life -= this.decay;

      // Spawn emerald construct sparks along arrow trail
      this.sparkInterval++;
      if (this.sparkInterval % 2 === 0) {
        particles.push(new GLParticle(
          this.x + (Math.random() - 0.5) * 16,
          this.y + (this.direction === 'down' ? -20 : 20),
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        ));
      }
    }

    draw(ctx) {
      if (!ctx) return;
      ctx.save();
      ctx.translate(this.x, this.y);

      const angle = this.direction === 'down' ? Math.PI : 0;
      ctx.rotate(angle);

      // Outer Green Lantern Aura Glow
      ctx.shadowColor = '#00ff88';
      ctx.shadowBlur = 24;

      // Arrow Construct Body
      ctx.beginPath();
      ctx.moveTo(0, -this.length / 2); // Tip
      ctx.lineTo(this.width, this.length * 0.15); // Right barb
      ctx.lineTo(this.width * 0.45, this.length * 0.05); // Right inner
      ctx.lineTo(this.width * 0.35, this.length / 2); // Right shaft
      ctx.lineTo(-this.width * 0.35, this.length / 2); // Left shaft
      ctx.lineTo(-this.width * 0.45, this.length * 0.05); // Left inner
      ctx.lineTo(-this.width, this.length * 0.15); // Left barb
      ctx.closePath();

      // Crystalline Green Gradient
      const grad = ctx.createLinearGradient(0, -this.length / 2, 0, this.length / 2);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.3, '#00ff88');
      grad.addColorStop(1, 'rgba(5, 150, 105, 0.4)');
      ctx.fillStyle = grad;
      ctx.fill();

      // Edge stroke highlight
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();
    }
  }

  class GLParticle {
    constructor(x, y, vx, vy) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.life = 1;
      this.decay = Math.random() * 0.04 + 0.02;
      this.size = Math.random() * 4 + 2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life -= this.decay;
    }

    draw(ctx) {
      if (!ctx || this.life <= 0) return;
      ctx.save();
      ctx.shadowColor = '#00ff88';
      ctx.shadowBlur = 10;
      ctx.fillStyle = `rgba(0, 255, 136, ${this.life})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  class GLRingShockwave {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = 10;
      this.maxRadius = 140;
      this.life = 1;
    }

    update() {
      this.radius += 8;
      this.life = Math.max(0, 1 - this.radius / this.maxRadius);
    }

    draw(ctx) {
      if (!ctx || this.life <= 0) return;
      ctx.save();
      ctx.shadowColor = '#00ff88';
      ctx.shadowBlur = 15;
      ctx.strokeStyle = `rgba(0, 255, 136, ${this.life * 0.8})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
  }

  function launchGreenLanternTransition(direction = 'down', originX = null) {
    if (!ctx) return;

    soundEngine.playGreenLanternConstruct(direction);

    // Show HUD beacon momentarily
    if (glHud) {
      glHud.classList.add('active');
      setTimeout(() => glHud.classList.remove('active'), 1200);
    }

    const startX = originX || window.innerWidth / 2;
    const startY = direction === 'down' ? 60 : window.innerHeight - 60;
    const targetY = direction === 'down' ? window.innerHeight : 0;

    // Summon ring construct ripple
    rings.push(new GLRingShockwave(startX, startY));

    // Summon volley of 3 Green Lantern construct arrows
    arrows.push(new GLConstructArrow(startX, startY, targetY, direction));
    arrows.push(new GLConstructArrow(startX - 90, startY - (direction === 'down' ? 40 : -40), targetY, direction));
    arrows.push(new GLConstructArrow(startX + 90, startY - (direction === 'down' ? 40 : -40), targetY, direction));

    if (!animId) {
      loopGLAnimation();
    }
  }

  function loopGLAnimation() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update & draw rings
    rings.forEach(r => r.update());
    rings = rings.filter(r => r.life > 0);
    rings.forEach(r => r.draw(ctx));

    // Update & draw particles
    particles.forEach(p => p.update());
    particles = particles.filter(p => p.life > 0);
    particles.forEach(p => p.draw(ctx));

    // Update & draw arrows
    arrows.forEach(a => a.update());
    arrows = arrows.filter(a => a.life > 0 && a.y > -100 && a.y < canvas.height + 100);
    arrows.forEach(a => a.draw(ctx));

    if (arrows.length > 0 || particles.length > 0 || rings.length > 0) {
      animId = requestAnimationFrame(loopGLAnimation);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animId = null;
    }
  }

  // ------------------------------------------------------------------------
  // 3. SOUND CONTROLLER (UI TOGGLE & HOVER EFFECTS)
  // ------------------------------------------------------------------------
  const soundToggle = document.getElementById('soundToggle');
  const soundIconOn = soundToggle ? soundToggle.querySelector('.sound-icon-on') : null;
  const soundIconOff = soundToggle ? soundToggle.querySelector('.sound-icon-off') : null;
  const btnLabelText = soundToggle ? soundToggle.querySelector('.btn-label-text') : null;

  if (soundToggle) {
    soundToggle.classList.add('sound-active');

    soundToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isEnabled = soundEngine.toggle();

      if (isEnabled) {
        soundToggle.classList.add('sound-active');
        if (soundIconOn) soundIconOn.style.display = 'inline-block';
        if (soundIconOff) soundIconOff.style.display = 'none';
        if (btnLabelText) btnLabelText.textContent = 'SFX: ON';
        soundEngine.playWayneTechClick();
      } else {
        soundToggle.classList.remove('sound-active');
        if (soundIconOn) soundIconOn.style.display = 'none';
        if (soundIconOff) soundIconOff.style.display = 'inline-block';
        if (btnLabelText) btnLabelText.textContent = 'SFX: OFF';
      }
    });
  }

  // Add subtle Wayne Tech audio to interactive elements
  const interactiveElements = document.querySelectorAll('.btn, .nav-link, .dc-ctrl-btn, .contact-card-link, .theme-toggle-btn');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      soundEngine.playHoverHum();
    });
    el.addEventListener('click', () => {
      soundEngine.playWayneTechClick();
    });
  });

  // ------------------------------------------------------------------------
  // 4. NAVIGATION & GREEN LANTERN TRANSITION TRIGGERS
  // ------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const navMenu = document.getElementById('navMenu');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');
  const glTriggers = document.querySelectorAll('.gl-trigger, .nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTop');

  function getSectionIndex(id) {
    const list = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
    const idx = list.indexOf(id);
    return idx >= 0 ? idx : 0;
  }

  let currentActiveSection = 'home';

  glTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const href = trigger.getAttribute('href');
      let targetId = trigger.getAttribute('data-target');

      if (!targetId && href && href.startsWith('#')) {
        targetId = href.substring(1);
      }

      if (targetId) {
        const currentIdx = getSectionIndex(currentActiveSection);
        const targetIdx = getSectionIndex(targetId);
        const direction = targetIdx >= currentIdx ? 'down' : 'up';

        const rect = trigger.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;

        launchGreenLanternTransition(direction, originX);
        currentActiveSection = targetId;
      }
    });
  });

  // ------------------------------------------------------------------------
  // 5. MOBILE NAVIGATION MENU TOGGLE
  // ------------------------------------------------------------------------
  function toggleMobileMenu() {
    const isOpen = navMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
    navBackdrop.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    soundEngine.playWayneTechClick();
  }

  function closeMobileMenu() {
    navMenu.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    navBackdrop.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // ------------------------------------------------------------------------
  // 6. THEME TOGGLE (GOTHAM NIGHT / METROPOLIS DAY WITH LOCALSTORAGE)
  // ------------------------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const THEME_KEY = 'dev_saini_dc_theme';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }

  initTheme();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
      soundEngine.playWayneTechClick();
    });
  }

  // ------------------------------------------------------------------------
  // 7. SCROLLSPY (HIGHLIGHT ACTIVE SECTION WHILE SCROLLING)
  // ------------------------------------------------------------------------
  let lastScrolledSection = 'home';

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });

        if (lastScrolledSection !== sectionId) {
          currentActiveSection = sectionId;
          lastScrolledSection = sectionId;
        }
      }
    });

    // Back to top visibility
    if (backToTopBtn) {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // ------------------------------------------------------------------------
  // 8. CONTACT FORM HANDLER (TRANSPARENT CLIENT-SIDE FEEDBACK)
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const resetFormBtn = document.getElementById('resetFormBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('userName');
      const emailInput = document.getElementById('userEmail');
      const messageInput = document.getElementById('userMessage');

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');

      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';

      let isValid = true;

      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        nameInput.focus();
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Please enter your email address.';
        if (isValid) emailInput.focus();
        isValid = false;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        if (isValid) emailInput.focus();
        isValid = false;
      }

      if (!messageInput.value.trim()) {
        messageError.textContent = 'Please enter a message.';
        if (isValid) messageInput.focus();
        isValid = false;
      } else if (messageInput.value.trim().length < 5) {
        messageError.textContent = 'Message should be at least 5 characters long.';
        if (isValid) messageInput.focus();
        isValid = false;
      }

      if (!isValid) return;

      const submitBtn = document.getElementById('submitBtn');
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Transmitting...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
      soundEngine.playWayneTechClick();

      setTimeout(() => {
        contactForm.style.display = 'none';
        formFeedback.style.display = 'block';

        const userNameVal = nameInput.value.trim();
        const feedbackDetails = document.getElementById('feedbackDetails');
        
        feedbackDetails.innerHTML = `
          Transmission received from <strong>${escapeHtml(userNameVal)}</strong>!<br><br>
          <em>Note:</em> Since this portfolio is hosted statically, your message was verified locally. To connect with Dev Saini immediately, reach out directly on LinkedIn or via email:
        `;

        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
        soundEngine.playGreenLanternConstruct('down');
      }, 700);
    });
  }

  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
      contactForm.reset();
      contactForm.style.display = 'block';
      formFeedback.style.display = 'none';
      soundEngine.playWayneTechClick();
    });
  }

  // ------------------------------------------------------------------------
  // 9. PROJECT INFO MODAL HANDLER
  // ------------------------------------------------------------------------
  const projectDemoBtns = document.querySelectorAll('.btn-project-demo');
  const projectModal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function openModal() {
    if (projectModal) {
      projectModal.classList.add('open');
      projectModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      soundEngine.playWayneTechClick();
    }
  }

  function closeModal() {
    if (projectModal) {
      projectModal.classList.remove('open');
      projectModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      soundEngine.playWayneTechClick();
    }
  }

  projectDemoBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeMobileMenu();
    }
  });

  function escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
});
