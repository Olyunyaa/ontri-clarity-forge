export type Language = "en" | "nl" | "ru";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  nl: "NL",
  ru: "RU",
};

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.services": "Services",
    "nav.whyUs": "Why Us",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Stop Guessing Where AI Fits in Your Business",
    "hero.subtitle": "We audit your operations, identify high-impact opportunities, and help you implement practical AI solutions that your team will actually use.",
    "hero.cta": "Schedule an Intro Meeting",

    // About
    "about.label": "About Us",
    "about.title": "We bring clarity — and work alongside you to implement.",
    "about.p1": "We've spent years building and scaling operations — launching startups, optimizing processes, managing complex projects in private equity. We know how to execute.",
    "about.p2": "We founded Ontrí because we saw companies struggling: knowing AI could help, but overwhelmed by options and unclear on where to start or what would actually work for their business.",
    "about.p3": "We audit your workflows, identify where AI could realistically improve operations — and where it wouldn't. Then we work with your team to select practical tools, set them up, and make sure they're actually used.",
    "about.p4": "You get practical solutions that work — not just plans, but real implementation support.",

    // Services
    "services.label": "What We Do",
    "services.title": "From audit to adoption",
    "services.1.title": "Audit of the Processes",
    "services.1.desc": "We uncover where work slows down, breaks, or gets duplicated — and redesign your core workflows so execution becomes predictable, fast, and scalable.",
    "services.2.title": "AI Strategy → Roadmapping",
    "services.2.desc": "We turn 'we should do AI' into a prioritized roadmap tied to business KPIs: what to do first, what to skip, and how to execute effectively.",
    "services.3.title": "AI Tools and Solutions",
    "services.3.desc": "We help you select and implement proven AI solutions that fit your workflows. We set them up, create usage frameworks and documentation, and train your team to integrate AI into their daily work.",
    "services.4.title": "Adoption & Change Management",
    "services.4.desc": "We make adoption happen: clear rollout plan, training, playbooks, and accountability — so new ways of working actually stick.",

    // Why Us
    "whyUs.label": "Why Choose Us",
    "whyUs.title": "What sets us apart",
    "whyUs.1.title": "Operations-First Approach",
    "whyUs.1.desc": "We start with operations, not technology. We identify where work slows down, where resources leak, and where decisions stall. Then we apply AI selectively — only where it's feasible and safe.",
    "whyUs.2.title": "Advisory + Guided Implementation",
    "whyUs.2.desc": "We work closely with your team during implementation: creating detailed plans, providing guidance, troubleshooting issues. We stay involved until new workflows are working and your team is comfortable with them. Governance is built in from day one.",
    "whyUs.3.title": "Aligned with Your Reality",
    "whyUs.3.desc": "We work with your constraints — team capacity, data readiness, and risk appetite.",

    // Contact
    "contact.label": "Contact Us",
    "contact.title": "Let's discuss how Ontrí Advisory can accelerate your intelligent transformation.",
    "contact.cta": "Schedule an Intro Meeting",
    "contact.email": "Prefer email?",

    // Footer
    "footer.copyright": "Copyright © 2026 Ontrí Advisory | Powered by Ontrí Advisory",
  },

  nl: {
    // Navbar
    "nav.about": "Over ons",
    "nav.services": "Diensten",
    "nav.whyUs": "Waarom wij",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Stop met gissen waar AI past in uw bedrijf",
    "hero.subtitle": "Wij auditen uw bedrijfsprocessen, identificeren impactvolle kansen en helpen u praktische AI-oplossingen te implementeren die uw team daadwerkelijk zal gebruiken.",
    "hero.cta": "Plan een kennismakingsgesprek",

    // About
    "about.label": "Over ons",
    "about.title": "Wij brengen helderheid — en werken samen met u aan de implementatie.",
    "about.p1": "We hebben jarenlang bedrijfsprocessen opgebouwd en opgeschaald — startups gelanceerd, processen geoptimaliseerd en complexe projecten in private equity beheerd. We weten hoe we moeten uitvoeren.",
    "about.p2": "We richtten Ontrí op omdat we zagen dat bedrijven worstelden: ze wisten dat AI kon helpen, maar waren overweldigd door opties en onduidelijk over waar te beginnen.",
    "about.p3": "Wij auditen uw workflows, identificeren waar AI realistisch operaties kan verbeteren — en waar niet. Dan werken we met uw team om praktische tools te selecteren, in te stellen en ervoor te zorgen dat ze daadwerkelijk worden gebruikt.",
    "about.p4": "U krijgt praktische oplossingen die werken — geen plannen alleen, maar echte implementatieondersteuning.",

    // Services
    "services.label": "Wat wij doen",
    "services.title": "Van audit tot adoptie",
    "services.1.title": "Procesaudit",
    "services.1.desc": "Wij ontdekken waar werk vertraagt, vastloopt of gedupliceerd wordt — en herontwerpen uw kernworkflows zodat uitvoering voorspelbaar, snel en schaalbaar wordt.",
    "services.2.title": "AI-strategie → Roadmapping",
    "services.2.desc": "Wij maken van 'we moeten iets met AI' een geprioriteerde roadmap gekoppeld aan bedrijfs-KPI's: wat eerst te doen, wat over te slaan en hoe effectief uit te voeren.",
    "services.3.title": "AI-tools en oplossingen",
    "services.3.desc": "Wij helpen u bewezen AI-oplossingen te selecteren en implementeren die bij uw workflows passen. We zetten ze op, creëren gebruikskaders en documentatie, en trainen uw team.",
    "services.4.title": "Adoptie & Verandermanagement",
    "services.4.desc": "Wij zorgen dat adoptie plaatsvindt: duidelijk uitrolplan, training, handleidingen en verantwoording — zodat nieuwe werkwijzen echt beklijven.",

    // Why Us
    "whyUs.label": "Waarom wij",
    "whyUs.title": "Wat ons onderscheidt",
    "whyUs.1.title": "Operations-first aanpak",
    "whyUs.1.desc": "Wij beginnen bij de operatie, niet bij technologie. We identificeren waar werk vertraagt, waar middelen weglekken en waar beslissingen stagneren. Dan passen we AI selectief toe — alleen waar het haalbaar en veilig is.",
    "whyUs.2.title": "Advies + begeleide implementatie",
    "whyUs.2.desc": "Wij werken nauw samen met uw team tijdens de implementatie: gedetailleerde plannen maken, begeleiding bieden, problemen oplossen. We blijven betrokken tot nieuwe workflows werken en uw team er comfortabel mee is.",
    "whyUs.3.title": "Afgestemd op uw realiteit",
    "whyUs.3.desc": "Wij werken binnen uw beperkingen — teamcapaciteit, datarijpheid en risicobereidheid.",

    // Contact
    "contact.label": "Neem contact op",
    "contact.title": "Laten we bespreken hoe Ontrí Advisory uw intelligente transformatie kan versnellen.",
    "contact.cta": "Plan een kennismakingsgesprek",
    "contact.email": "Liever e-mailen?",

    // Footer
    "footer.copyright": "Copyright © 2026 Ontrí Advisory | Powered by Ontrí Advisory",
  },

  ru: {
    // Navbar
    "nav.about": "О нас",
    "nav.services": "Услуги",
    "nav.whyUs": "Почему мы",
    "nav.contact": "Контакты",

    // Hero
    "hero.title": "Перестаньте гадать, где AI нужен вашему бизнесу",
    "hero.subtitle": "Мы проводим аудит ваших процессов, выявляем возможности с высоким влиянием и помогаем внедрить практичные AI-решения, которые ваша команда действительно будет использовать.",
    "hero.cta": "Назначить вводную встречу",

    // About
    "about.label": "О нас",
    "about.title": "Мы вносим ясность — и работаем вместе с вами над внедрением.",
    "about.p1": "Мы годами строили и масштабировали операции — запускали стартапы, оптимизировали процессы, управляли сложными проектами в private equity. Мы знаем, как добиваться результата.",
    "about.p2": "Мы основали Ontrí, потому что увидели, что компании испытывают трудности: они знали, что AI может помочь, но были перегружены вариантами и не понимали, с чего начать.",
    "about.p3": "Мы проводим аудит ваших рабочих процессов, определяем, где AI реально может улучшить операции — а где нет. Затем работаем с вашей командой, чтобы выбрать практичные инструменты, настроить их и убедиться, что они действительно используются.",
    "about.p4": "Вы получаете практичные решения, которые работают — не просто планы, а реальную поддержку при внедрении.",

    // Services
    "services.label": "Что мы делаем",
    "services.title": "От аудита до внедрения",
    "services.1.title": "Аудит процессов",
    "services.1.desc": "Мы выявляем, где работа замедляется, ломается или дублируется — и перестраиваем ваши ключевые процессы, чтобы исполнение стало предсказуемым, быстрым и масштабируемым.",
    "services.2.title": "AI-стратегия → Дорожная карта",
    "services.2.desc": "Мы превращаем «нам нужен AI» в приоритизированную дорожную карту, привязанную к KPI бизнеса: что делать первым, что пропустить и как эффективно реализовать.",
    "services.3.title": "AI-инструменты и решения",
    "services.3.desc": "Мы помогаем выбрать и внедрить проверенные AI-решения, подходящие для ваших рабочих процессов. Мы настраиваем их, создаём фреймворки использования и документацию, обучаем вашу команду.",
    "services.4.title": "Адаптация и управление изменениями",
    "services.4.desc": "Мы обеспечиваем принятие: чёткий план внедрения, обучение, руководства и ответственность — чтобы новые способы работы действительно прижились.",

    // Why Us
    "whyUs.label": "Почему мы",
    "whyUs.title": "Что нас отличает",
    "whyUs.1.title": "Подход «операции прежде всего»",
    "whyUs.1.desc": "Мы начинаем с операций, а не с технологий. Мы выявляем, где работа замедляется, где утекают ресурсы и где застревают решения. Затем применяем AI выборочно — только там, где это осуществимо и безопасно.",
    "whyUs.2.title": "Консалтинг + сопровождение внедрения",
    "whyUs.2.desc": "Мы тесно работаем с вашей командой при внедрении: составляем детальные планы, оказываем поддержку, решаем проблемы. Мы остаёмся вовлечёнными, пока новые процессы не заработают и ваша команда не освоится.",
    "whyUs.3.title": "В соответствии с вашей реальностью",
    "whyUs.3.desc": "Мы работаем в рамках ваших ограничений — возможности команды, готовность данных и аппетит к риску.",

    // Contact
    "contact.label": "Свяжитесь с нами",
    "contact.title": "Давайте обсудим, как Ontrí Advisory может ускорить вашу интеллектуальную трансформацию.",
    "contact.cta": "Назначить вводную встречу",
    "contact.email": "Предпочитаете email?",

    // Footer
    "footer.copyright": "Copyright © 2026 Ontrí Advisory | Powered by Ontrí Advisory",
  },
};
