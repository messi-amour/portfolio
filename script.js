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

  // ── EN / FR language toggle ─────────────────────────────
  const translations = {
    en: {
      't-title': 'Messi Amour — Full-Stack Developer & Tech Entrepreneur',
      't-meta-desc': 'Self-taught full-stack developer and tech entrepreneur based in Brazzaville. Designs, codes and deploys complete products solo: MESSIA (AI assistant) and SmartSchool Africa (school SaaS). Available for internship, freelance or product collaboration.',
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
      't-nav-contact': 'Contact',

      't-eyebrow': 'Brazzaville, Congo — available immediately',
      't-badge': 'Currently building SmartSchool Africa',
      't-h1': 'I build software products,<br>from first commit <em>to first users.</em>',
      't-lead': "Self-taught full-stack developer and tech entrepreneur. On my own, I've designed, coded and deployed two complete products — an AI assistant and a SaaS platform — from the first spec to the first real users. Today, I'm looking for a team or a project where I can put that energy to work starting tomorrow.",
      't-pill1': 'Full-stack developer internship',
      't-pill2': 'Freelance mission',
      't-pill3': 'Product / startup collaboration',
      't-cta-work': "Let's work together →",
      't-cta-cv-1': 'Download CV ↓',
      't-cta-cv-2': 'Download CV ↓',

      't-about-title': 'About <em>me</em>',
      't-about-p1': "My name is <strong>Messi Amour</strong>. I don't just learn to code — I ship. My projects aren't academic exercises: they're real applications, built for real users, with the technical and product trade-offs that requires.",
      't-about-p2': "What sets me apart is <strong>full ownership</strong> of the entire chain: I design the architecture, write the code, deploy it, test it with real users, and iterate on feedback. That's exactly what I want to bring to a team — not just execute a task, but understand the product and push it forward.",
      't-about-p3': "My drive comes from a simple conviction: <strong>innovation is a necessity for Africa</strong>, not an imported luxury. I build with that idea in mind, and I'm now looking for an environment where I can put it to work on something bigger than myself.",
      't-stat1-lbl': 'Products in active development',
      't-stat2-lbl': 'From backend to user interface',

      't-process-title': 'How I <em>work</em>',
      't-process1-h': 'Scoping',
      't-process1-p': "I clarify the real problem before writing a single line of code: target users, real constraints, and defining a useful v1.",
      't-process2-h': 'Architecture',
      't-process2-p': 'I choose the stack and data structure based on the product, not out of habit — thinking about deployment and costs from day one.',
      't-process3-h': 'Build',
      't-process3-p': 'I code, deploy early and often, and keep a working version live rather than a project that only exists on my machine.',
      't-process4-h': 'Iteration',
      't-process4-p': 'I put the product in front of real users, gather feedback, and adjust — the product keeps evolving after the first launch.',

      't-formation-title': 'Education',
      't-f1-status': 'ongoing',
      't-f1-role': 'Computer Science Degree',
      't-f1-p': 'First year of the program, alongside developing MESSIA and SmartSchool Africa. Planning to continue into L2 Computer Science in 2027.',
      't-f2-status': '6 months',
      't-f2-role': 'Intensive training',
      't-f2-h': 'Programming — ACSI',
      't-f2-p': 'Six-month intensive programming training, the foundation of the technical skills later developed self-taught on real projects.',
      't-f3-status': 'obtained',
      't-f3-role': 'High School Diploma',

      't-log-title': 'Build <em>log</em>',
      't-log1-status': 'in beta testing',
      't-log1-role': 'Conversational AI assistant',
      't-log1-p': 'Full conversational assistant built solo: real-time streaming, 4 personas, slash shortcuts, web search, voice command, user memory. End-to-end serverless architecture, from authentication to continuous deployment.',
      't-log1-link': 'View product ↗',
      't-log2-status': 'in development',
      't-log2-role': 'Multi-tenant SaaS',
      't-log2-p': 'School management platform for institutions across Central Africa: per-school data isolation, automatically generated PDF report cards, full grade and enrollment management. Backend validated across six modules; React frontend in progress.',

      't-skills-title': 'Technical <em>skills</em>',
      't-skills-h1': 'Languages',
      't-skills-h2': 'Frameworks & Tools',
      't-skills-h3': 'Infrastructure',
      't-skills-h3-li5': 'API & AI Integration',
      't-skills-lang-h4': 'Spoken languages',
      't-skills-lang1': 'French — fluent',
      't-skills-lang2': 'Lingala — native',
      't-skills-lang3': 'English — technical / reading',

      't-opp-title': 'What I\'m <em>looking for</em>',
      't-opp1-h': 'Full-stack developer internship',
      't-opp1-p': "A technical team where I can learn fast, contribute to a real product, and come away with more engineering rigor than I have today.",
      't-opp2-h': 'Freelance mission',
      't-opp2-p': "A web, AI or business product project to design and deliver end to end — as I've already done for MESSIA and SmartSchool Africa.",
      't-opp3-h': 'Product / startup collaboration',
      't-opp3-p': "A team or founder looking for a developer who can think product, not just execute tickets.",

      't-contact-h2': "Let's build something together.",
      't-contact-p': "I'm available immediately for an internship, a freelance mission, or a product collaboration. If my profile matches what you're looking for, let's not waste time — write to me.",

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
  let currentLang = localStorage.getItem('site-lang') || 'fr';

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
    localStorage.setItem('site-lang', lang);
    currentLang = lang;
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'fr' : 'en');
    });
  }

  // Apply saved preference on load (defaults to French, the site's authored language)
  if (currentLang === 'en') applyLang('en');
});
