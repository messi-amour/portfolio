// messi-amour portfolio — interactions
document.addEventListener('DOMContentLoaded', () => {
  // Smooth in-page nav (CSS already handles scroll-behavior, this is a fallback for older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // External links and PDFs always open in a new tab, safely
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (/^https?:\/\//i.test(href) || /\.pdf($|\?)/i.test(href)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });

  // Mobile hamburger menu
  const navEl = document.querySelector('nav');
  const navToggle = document.getElementById('navToggle');
  if (navEl && navToggle) {
    const setNav = (open) => {
      navEl.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    };
    navToggle.addEventListener('click', () => setNav(!navEl.classList.contains('open')));
    navEl.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => setNav(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });
    document.addEventListener('click', (e) => { if (!navEl.contains(e.target)) setNav(false); });
    window.matchMedia('(min-width: 761px)').addEventListener('change', () => setNav(false));
  }

  // ── Scroll reveal ────────────────────────────────────────
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  }

  // ── EN / FR language toggle ─────────────────────────────
  const translations = {
    en: {
      "t-title": "Messi Amour — Full-Stack Developer & Tech Entrepreneur",
      "t-meta-desc": "Self-taught full-stack developer and tech entrepreneur in Brazzaville. Creator of MESSIA (AI) and SmartSchool Africa (school SaaS). Available for freelance work.",
      "t-og-title": "Messi Amour — Full-Stack Developer & Tech Entrepreneur",
      "t-og-desc": "AI assistant in production (MESSIA), school SaaS in development (SmartSchool Africa), websites for local businesses. Available for freelance work and product collaborations.",
      "t-og-locale": "en_US",
      "t-tw-title": "Messi Amour — Full-Stack Developer & Tech Entrepreneur",
      "t-tw-desc": "AI assistant (MESSIA) and school SaaS (SmartSchool Africa) designed, coded and deployed solo.",
      "t-nav-about": "About",
      "t-nav-process": "Process",
      "t-nav-formation": "Education",
      "t-nav-log": "Projects",
      "t-nav-skills": "Skills",
      "t-nav-opportunities": "Opportunities",
      "t-nav-contact": "Contact",
      "t-eyebrow": "Brazzaville, Congo — available immediately",
      "t-badge": "Currently building SmartSchool Africa",
      "t-h1": "I design, I code, I ship products.<br><em>Solo at the controls, AI as an accelerator.</em>",
      "t-lead": "Self-taught full-stack developer and tech entrepreneur. I designed, coded and deployed an AI assistant that is now in production, I'm building a SaaS platform for schools in Central Africa, and I create websites for local businesses. I'm looking for freelance missions where I can turn an idea into a live product, fast and cleanly.",
      "t-pill0": "Freelance mission",
      "t-pill1": "Product / startup collaboration",
      "t-pill2": "Full-stack developer internship",
      "t-pill3": "Work-study (Alternance)",
      "t-cta-work": "Let's work together →",
      "t-cta-cv-1": "Download CV ↓",
      "t-cta-cv-2": "Download CV ↓",
      "t-about-eyebrow": "Profile",
      "t-about-title": "About <em>me</em>",
      "t-about-p1": "My name is <strong>Messi Amour</strong>. I don't just learn to code — I ship. My projects aren't academic exercises: they're real applications, built for real users, with the technical and product trade-offs that requires.",
      "t-about-p2": "What sets me apart is <strong>control of the whole chain</strong>: I shape the product, choose the architecture, write and review the code, deploy it and iterate on feedback. I work with AI as an engineering tool: it speeds me up, I make the decisions and I understand every part of the code I ship.",
      "t-about-p3": "My drive comes from a simple conviction: <strong>innovation is a necessity for Africa</strong>, not an imported luxury. I build with that idea in mind, and I'm now looking for an environment where I can put it to work on something bigger than myself.",
      "t-stat1-lbl": "One live, one in development, one coming",
      "t-stat2-lbl": "From backend to user interface",
      "t-process-eyebrow": "Method",
      "t-process-title": "How I <em>work</em>",
      "t-process1-h": "Scoping",
      "t-process1-p": "I clarify the real problem before writing a single line of code: target users, real constraints, and defining a useful v1.",
      "t-process2-h": "Architecture",
      "t-process2-p": "I choose the stack and data structure based on the product, not out of habit — thinking about deployment and costs from day one.",
      "t-process3-h": "Build",
      "t-process3-p": "I code, deploy early and often, and keep a working version live rather than a project that only exists on my machine.",
      "t-process4-h": "Iteration",
      "t-process4-p": "I put the product in front of real users, gather feedback, and adjust — the product keeps evolving after the first launch.",
      "t-formation-eyebrow": "Background",
      "t-formation-title": "Education",
      "t-f1-status": "in progress",
      "t-f1-role": "Computer Science Degree",
      "t-f1-p": "Second year of the degree in progress, run alongside the development of SmartSchool Africa and my freelance projects.",
      "t-f0-status": "completed",
      "t-f0-role": "Computer Science Degree",
      "t-f0-h": "Year 1 Computer Science — IGT",
      "t-f0-p": "First year of the degree completed, run alongside the development of MESSIA and SmartSchool Africa.",
      "t-f2-status": "6 months",
      "t-f2-role": "Intensive training",
      "t-f2-h": "Programming — ACSI",
      "t-f2-p": "Six-month intensive programming training, the foundation of the technical skills later developed self-taught on real projects.",
      "t-f3-status": "obtained",
      "t-f3-role": "High School Diploma",
      "t-nav-services": "Services",
      "t-svc-eyebrow": "Services",
      "t-svc-title": "What I <em>offer</em>",
      "t-svc-note": "Indicative pricing depending on pages and options; a precise quote after a conversation about your needs.",
      "t-svc-cta": "Request a quote →",
      "t-svc1-h": "Showcase site / online shop",
      "t-svc1-p": "A fast, mobile-first website that presents your business and sends customers to WhatsApp to order or book.",
      "t-svc1-f": "Ideal for: shops, restaurants, independents.",
      "t-svc2-h": "Custom web application",
      "t-svc2-p": "A business tool with user accounts, roles and a database: management, tracking, invoicing, dashboards.",
      "t-svc2-f": "Ideal for: SMEs, schools, associations, startups.",
      "t-svc3-h": "AI assistant / chatbot",
      "t-svc3-p": "A French-language conversational assistant for your business: adapted personas, web search, quotas and paid plans as needed.",
      "t-svc3-f": "Ideal for: customer service, digital products, teams.",
      "t-p1-s1": "Home",
      "t-p1-s2": "Conversation",
      "t-p1-s3": "Brand visual (illustration)",
      "t-svc1-price": "From 100,000 FCFA",
      "t-svc2-price": "On quote",
      "t-svc3-price": "On quote",
      "t-skills-eyebrow": "Skills",
      "t-skills-title": "Technical <em>skills</em>",
      "t-skills-h1": "Languages",
      "t-skills-h2": "Frameworks & Tools",
      "t-skills-h3": "Infrastructure",
      "t-skills-h3-li5": "API & AI Integration",
      "t-skills-lang-h4": "Spoken languages",
      "t-skills-lang1": "French — native",
      "t-skills-lang3": "English — intermediate",
      "t-opp-eyebrow": "Opportunities",
      "t-opp-title": "What I'm <em>looking for</em>",
      "t-opp0-h": "Freelance mission",
      "t-opp0-p": "A web, AI or business product project to design and deliver end to end: a showcase website, a custom app, a conversational assistant.",
      "t-opp1-h": "Product / startup collaboration",
      "t-opp1-p": "A team or founder looking for a developer who can think product, not just execute tickets.",
      "t-opp2-h": "Full-stack developer internship",
      "t-opp2-p": "A technical team where I can learn fast, contribute to a real product, and come away with more engineering rigor than I have today.",
      "t-opp3-h": "Work-study (Alternance)",
      "t-opp3-p": "A work-study contract to combine ongoing training with work on a real product, alongside a team willing to invest over time.",
      "t-contact-h2": "Let's build something together.",
      "t-contact-p": "I'm available immediately for a freelance mission, a product collaboration, an internship or a work-study contract. If my profile matches what you're looking for, let's not waste time — write to me.",
      "t-form-label-name": "Name",
      "t-form-label-email": "Email",
      "t-form-label-message": "Message",
      "t-form-submit": "Send →",
      "t-form-or": "or write to me directly",
      "t-footer": "© 2026 Messi Amour · Republic of Congo",
      "t-f1-h": "Year 2 Computer Science — IGT",
      "t-f3-h": "High school diploma",
      "t-skills-h3-li6": "AI-assisted development",
      "t-p1-status": "live",
      "t-p1-role": "Conversational AI assistant",
      "t-p1-k1": "Problem",
      "t-p1-v1": "Offer a fast, French-language AI assistant that works from the first message and can pay for itself.",
      "t-p1-k2": "Solution",
      "t-p1-v2": "Five personas with adaptive temperature, function-calling web search, real-time streaming, conversation memory and voice command, on a serverless architecture. Three-tier freemium (guest, free account, paid plans) with quotas tracked in Supabase and a WhatsApp-based upgrade flow.",
      "t-p1-k3": "Result",
      "t-p1-v3": "Live since late June 2026, beta-tested by around ten users. Groq (LPU) inference: up to ~300 tokens/s, first token under 200 ms.",
      "t-p1-link": "View product ↗",
      "t-p1-code": "Code on GitHub ↗",
      "t-p2-status": "in development — not public",
      "t-p2-role": "Multi-tenant SaaS",
      "t-p2-k1": "Problem",
      "t-p2-v1": "Give schools in Central Africa a single tool to manage students, grades and report cards.",
      "t-p2-k2": "Solution",
      "t-p2-v2": "Per-school data isolation, role-based JWT authentication (six roles), automatically generated PDF report cards. Django/DRF backend, React frontend.",
      "t-p2-k3": "Progress",
      "t-p2-v3": "Backend validated across six modules; frontend being connected to the real backend, with a full demo mode for the remaining modules. Not public, demo on request.",
      "t-p2-link": "Request a demo ↗",
      "t-p3-status": "coming soon",
      "t-p3-role": "Fintech SaaS",
      "t-p3-k1": "Problem",
      "t-p3-v1": "Help SMEs and freelancers in Central Africa invoice in FCFA and track what has been paid, without heavy accounting software.",
      "t-p3-k2": "Planned solution",
      "t-p3-v2": "Invoice creation, payment tracking and automatic reminders for late clients. Freemium model: limited free tier, paid plan for unlimited use.",
      "t-p3-k3": "Status",
      "t-p3-v3": "Specification finalized, MVP in preparation. First customers targeted through my network of SMEs in Pointe-Noire.",
      "t-p4-title": "Showcase websites",
      "t-p4-status": "in progress",
      "t-p4-role": "Websites for local businesses",
      "t-p4-k1": "Problem",
      "t-p4-v1": "Small shops in Brazzaville and Pointe-Noire already sell through WhatsApp, but rarely have a polished online storefront.",
      "t-p4-k2": "Solution",
      "t-p4-v2": "Fast, mobile-first sites: catalogue, FAQ, map, social links, and orders or bookings routed to WhatsApp.",
      "t-p4-k3": "Result",
      "t-p4-v3": "First sites under way: an online fashion shop and a restaurant.",
      "t-p4-code": "Code on GitHub ↗"
}
  };

  // Capture the original French markup for every translatable element so we can toggle back.
  const original = {};
  Object.keys(translations.en).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.tagName === 'META') {
      original[id] = el.getAttribute('content');
    } else {
      original[id] = el.innerHTML;
    }
  });

  const langToggle = document.getElementById('langToggle');
  const htmlEl = document.documentElement;

  // ── Light / dark theme (dark by default, choice saved) ──
  const themeLabels = {
    fr: { light: 'Passer en mode clair', dark: 'Passer en mode sombre' },
    en: { light: 'Switch to light mode', dark: 'Switch to dark mode' }
  };
  function currentTheme() { return htmlEl.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }
  function updateThemeLabel() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const l = htmlEl.getAttribute('lang') === 'en' ? 'en' : 'fr';
    const label = themeLabels[l][currentTheme() === 'dark' ? 'light' : 'dark'];
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  }
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      try { localStorage.setItem('site-theme', next); } catch (e) {}
      updateThemeLabel();
    });
  }

  // The CV download links point to a different file per language.
  const cvHref = { fr: 'cv-messi-amour-fr.pdf', en: 'cv-messi-amour-fr.pdf' };
  const cvLinkIds = ['t-cta-cv-1', 't-cta-cv-2'];

  // Priority for the initial language: explicit ?lang= URL param (e.g. for
  // sharing a direct English link) > a language the visitor already chose
  // manually before (saved in localStorage) > browser/OS language > French
  // (the site's authored default language).
  function detectInitialLang() {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang === 'en' || urlLang === 'fr') return urlLang;

    const saved = localStorage.getItem('site-lang');
    if (saved === 'en' || saved === 'fr') return saved;

    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang && !browserLang.startsWith('fr')) return 'en';

    return 'fr';
  }

  let currentLang = 'fr';

  function applyLang(lang) {
    Object.keys(translations.en).forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const value = lang === 'en' ? translations.en[id] : original[id];
      if (el.tagName === 'META') {
        el.setAttribute('content', value);
      } else {
        el.innerHTML = value;
      }
    });
    htmlEl.setAttribute('lang', lang);
    if (langToggle) langToggle.textContent = lang === 'en' ? 'FR' : 'EN';
    cvLinkIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.setAttribute('href', cvHref[lang]);
    });
    localStorage.setItem('site-lang', lang);
    currentLang = lang;
    updateThemeLabel();
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'fr' : 'en');
    });
  }

  // Apply the detected language on load (French markup is already in place,
  // so applyLang('fr') is a harmless no-op that also syncs the button/localStorage).
  applyLang(detectInitialLang());

  // ── Contact form (Formspree, with a mailto fallback until the endpoint is set) ──
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const CONTACT_EMAIL = 'messiamour034@gmail.com';

  if (contactForm && formStatus) {
    const statusText = {
      fr: {
        sending: 'Envoi en cours…',
        success: 'Message envoyé — je réponds sous 24h.',
        error: "Erreur d'envoi. Écris-moi directement à " + CONTACT_EMAIL + '.',
        missing: 'Renseigne ton nom, un email valide et ton message.',
        mailto: "Ton application mail va s'ouvrir avec le message prérempli."
      },
      en: {
        sending: 'Sending…',
        success: "Message sent — I'll reply within 24h.",
        error: 'Something went wrong. Email me directly at ' + CONTACT_EMAIL + '.',
        missing: 'Enter your name, a valid email and your message.',
        mailto: 'Your mail app will open with the message prefilled.'
      }
    };

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const t = statusText[currentLang] || statusText.fr;
      const data = new FormData(contactForm);
      const name = String(data.get('name') || '').trim();
      const email = String(data.get('email') || '').trim();
      const message = String(data.get('message') || '').trim();

      if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
        formStatus.textContent = t.missing;
        formStatus.className = 'form-status error';
        return;
      }

      if (contactForm.action.includes('YOUR_FORM_ID')) {
        const subject = encodeURIComponent('Contact portfolio — ' + name);
        const body = encodeURIComponent(message + '\n\n' + name + ' (' + email + ')');
        formStatus.textContent = t.mailto;
        formStatus.className = 'form-status success';
        window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + subject + '&body=' + body;
        return;
      }

      formStatus.textContent = t.sending;
      formStatus.className = 'form-status sending';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' }
        });
        if (response.ok) {
          formStatus.textContent = t.success;
          formStatus.className = 'form-status success';
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        formStatus.textContent = t.error;
        formStatus.className = 'form-status error';
      }
    });
  }
});
