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
      't-title': 'Messi Amour — Full-Stack Developer & Tech Entrepreneur',
      't-meta-desc': 'Self-taught full-stack developer in Brazzaville. Creator of MESSIA (AI) and SmartSchool Africa (school SaaS). Available for internship or freelance.',
      't-og-title': 'Messi Amour — Full-Stack Developer & Tech Entrepreneur',
      't-og-desc': 'AI assistant (MESSIA) and school SaaS (SmartSchool Africa) designed, coded and deployed solo. Available for internship, freelance or product collaboration.',
      't-og-locale': 'en_US',
      't-tw-title': 'Messi Amour — Full-Stack Developer & Tech Entrepreneur',
      't-tw-desc': 'AI assistant (MESSIA) and school SaaS (SmartSchool Africa) designed, coded and deployed solo.',

      't-nav-about': 'About',
      't-nav-process': 'Process',
      't-nav-formation': 'Education',
      't-nav-log': 'Projects',
      't-nav-skills': 'Skills',
      't-nav-opportunities': 'Opportunities',
      't-nav-services': 'SME Services',
      't-nav-contact': 'Contact',

      't-eyebrow': 'Brazzaville, Congo — available immediately',
      't-badge': 'Currently building SmartSchool Africa',
      't-h1': 'I design, I code, I ship products.<br><em>Alone, all the way to the first users.</em>',
      't-lead': "Self-taught full-stack developer and tech entrepreneur. On my own, I've designed, coded and deployed two complete products — an AI assistant and a SaaS platform — from the first spec to the first real users. Today, I'm looking for a team or a project where I can put that energy to work starting tomorrow.",
      't-pill0': 'Work-study (Alternance)',
      't-pill1': 'Full-stack developer internship',
      't-pill2': 'Freelance mission',
      't-pill3': 'Product / startup collaboration',
      't-cta-work': "Let's work together →",
      't-cta-cv-1': 'Download CV ↓',
      't-cta-cv-2': 'Download CV ↓',

      't-about-eyebrow': 'Profile',
      't-about-title': 'About <em>me</em>',
      't-about-p1': "My name is <strong>Messi Amour</strong>. I don't just learn to code — I ship. My projects aren't academic exercises: they're real applications, built for real users, with the technical and product trade-offs that requires.",
      't-about-p2': "What sets me apart is <strong>full ownership</strong> of the entire chain: I design the architecture, write the code, deploy it, test it with real users, and iterate on feedback. That's exactly what I want to bring to a team — not just execute a task, but understand the product and push it forward.",
      't-about-p3': "My drive comes from a simple conviction: <strong>innovation is a necessity for Africa</strong>, not an imported luxury. I build with that idea in mind, and I'm now looking for an environment where I can put it to work on something bigger than myself.",
      't-stat1-lbl': 'One shipped, one in progress',
      't-stat2-lbl': 'From backend to user interface',

      't-process-eyebrow': 'Method',
      't-process-title': 'How I <em>work</em>',
      't-process1-h': 'Scoping',
      't-process1-p': "I clarify the real problem before writing a single line of code: target users, real constraints, and defining a useful v1.",
      't-process2-h': 'Architecture',
      't-process2-p': 'I choose the stack and data structure based on the product, not out of habit — thinking about deployment and costs from day one.',
      't-process3-h': 'Build',
      't-process3-p': 'I code, deploy early and often, and keep a working version live rather than a project that only exists on my machine.',
      't-process4-h': 'Iteration',
      't-process4-p': 'I put the product in front of real users, gather feedback, and adjust — the product keeps evolving after the first launch.',

      't-formation-eyebrow': 'Background',
      't-formation-title': 'Education',
      't-f1-status': 'completed',
      't-f1-role': 'Computer Science Degree',
      't-f1-p': 'First year of the program completed, alongside developing MESSIA and SmartSchool Africa. Planning to continue into L2 Computer Science in France for the 2027 intake, with a Campus France application in preparation.',
      't-f2-status': '6 months',
      't-f2-role': 'Intensive training',
      't-f2-h': 'Programming — ACSI',
      't-f2-p': 'Six-month intensive programming training, the foundation of the technical skills later developed self-taught on real projects.',
      't-f3-status': 'obtained',
      't-f3-role': 'High School Diploma',

      't-log-eyebrow': 'Projects',
      't-log-title': 'Build <em>log</em>',
      't-log1-status': 'completed',
      't-log1-role': 'Conversational AI assistant',
      't-log1-p': 'Full conversational assistant built solo: five personas with adaptive temperature, function-calling web search, real-time streaming, conversation memory, voice command. End-to-end serverless architecture.',
      't-log1-p2': 'Multi-tier freemium monetization system (guest, free account, paid plans) with Supabase-backed quota tracking and a WhatsApp-linked upgrade flow.',
      't-log1-p3': 'Live since late June 2026, beta-tested by around ten users since early July. Groq (LPU) inference: up to ~300 tokens/second, first token in under 200ms.',
      't-log1-link': 'View product ↗',
      't-log2-status': 'in development — not public',
      't-log2-role': 'Multi-tenant SaaS',
      't-log2-p': 'School management platform for institutions across Central Africa: per-school data isolation, role-based JWT authentication, automatically generated PDF report cards. Backend validated across six Django/DRF modules.',
      't-log2-p2': 'React 19 frontend being connected to the real backend: school management and account creation already wired up, six user roles, full demo mode for the remaining modules. Not public yet, available on request.',

      't-skills-eyebrow': 'Skills',
      't-skills-title': 'Technical <em>skills</em>',
      't-skills-h1': 'Languages',
      't-skills-h2': 'Frameworks & Tools',
      't-skills-h3': 'Infrastructure',
      't-skills-h3-li5': 'API & AI Integration',
      't-skills-lang-h4': 'Spoken languages',
      't-skills-lang1': 'French — native',
      't-skills-lang3': 'English — elementary',

      't-opp-eyebrow': 'Opportunities',
      't-opp-title': 'What I\'m <em>looking for</em>',
      't-opp0-h': 'Work-study (Alternance)',
      't-opp0-p': "A work-study contract to combine ongoing training with work on a real product, alongside a team willing to invest over time.",
      't-opp1-h': 'Full-stack developer internship',
      't-opp1-p': "A technical team where I can learn fast, contribute to a real product, and come away with more engineering rigor than I have today.",
      't-opp2-h': 'Freelance mission',
      't-opp2-p': "A web, AI or business product project to design and deliver end to end — as I've already done for MESSIA and SmartSchool Africa.",
      't-opp3-h': 'Product / startup collaboration',
      't-opp3-p': "A team or founder looking for a developer who can think product, not just execute tickets.",

      't-services-tag': 'For local businesses — Pointe-Noire',
      't-services-title': 'Automate your customer service on <em>WhatsApp</em>',
      't-services-intro': "Alongside my SaaS products, I help shops and SMEs in Pointe-Noire automate their customer relationship on WhatsApp — fast setup, near-zero starting cost.",
      't-svc1-h': 'WhatsApp Business chatbot',
      't-svc1-p': "Automatic replies, catalog and order-taking directly inside WhatsApp, so you never miss a customer — even outside business hours.",
      't-svc2-h': 'Reminders & confirmations',
      't-svc2-p': 'Order confirmations, appointment reminders and follow-ups sent automatically through the official WhatsApp Business API.',
      't-svc3-h': 'Fast setup',
      't-svc3-p': 'Live in a matter of days, priced for local business budgets, with support in French through to launch.',
      't-services-cta': "Discuss your needs →",

      't-contact-h2': "Let's build something together.",
      't-contact-p': "I'm available immediately for an internship, a freelance mission, or a product collaboration. If my profile matches what you're looking for, let's not waste time — write to me.",
      't-form-label-name': 'Name',
      't-form-label-email': 'Email',
      't-form-label-message': 'Message',
      't-form-submit': 'Send →',
      't-form-or': 'or write to me directly',

      't-footer': '© 2026 Messi Amour · Republic of Congo'
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

  // The CV download links point to a different file per language.
  const cvHref = { fr: 'cv-messi-amour-fr.pdf', en: 'cv-messi-amour-en.pdf' };
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
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'fr' : 'en');
    });
  }

  // Apply the detected language on load (French markup is already in place,
  // so applyLang('fr') is a harmless no-op that also syncs the button/localStorage).
  applyLang(detectInitialLang());

  // ── Contact form (Formspree) ────────────────────────────
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    const statusText = {
      fr: {
        sending: 'Envoi en cours…',
        success: 'Message envoyé — je réponds sous 24h.',
        error: "Erreur d'envoi. Écris-moi directement à messiamour034@gmail.com.",
        notConfigured: "Le formulaire n'est pas encore branché — écris-moi directement à messiamour034@gmail.com."
      },
      en: {
        sending: 'Sending…',
        success: "Message sent — I'll reply within 24h.",
        error: 'Something went wrong. Email me directly at messiamour034@gmail.com.',
        notConfigured: "The form isn't wired up yet — email me directly at messiamour034@gmail.com."
      }
    };

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const t = statusText[currentLang] || statusText.fr;

      if (contactForm.action.includes('YOUR_FORM_ID')) {
        formStatus.textContent = t.notConfigured;
        formStatus.className = 'form-status error';
        return;
      }

      formStatus.textContent = t.sending;
      formStatus.className = 'form-status sending';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
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
