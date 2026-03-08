export type Language = "en" | "nl" | "ru";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  nl: "NL",
  ru: "RU",
};

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
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

    // Legal
    "legal.terms.title": "Terms & Conditions",
    "legal.terms.placeholder": "Terms & Conditions content will be added soon.",
    "legal.privacy.title": "Privacy Policy",
    "legal.privacy.placeholder": "Privacy Policy content will be added soon.",
    "legal.cookies.title": "Cookie Policy",
    "legal.cookies.placeholder": "Cookie Policy content will be added soon.",
    "legal.disclaimer.title": "Disclaimer",
    "legal.disclaimer.placeholder": "Disclaimer content will be added soon.",

    // Cookie notice
    "cookie.notice": "This website uses cookies to ensure the best experience. By continuing to use this site, you agree to our use of cookies.",
  },

  nl: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "Over ons",
    "nav.services": "Diensten",
    "nav.whyUs": "Waarom wij",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Weet u waar AI écht waarde toevoegt in uw bedrijf?",
    "hero.subtitle": "Wij analyseren uw bedrijfsprocessen, brengen de grootste kansen in kaart en helpen u AI-oplossingen in te zetten die uw team ook daadwerkelijk gaat gebruiken.",
    "hero.cta": "Plan een kennismaking",

    // About
    "about.label": "Over ons",
    "about.title": "Wij zorgen voor helderheid — en pakken de implementatie samen met u op.",
    "about.p1": "Jarenlang hebben wij bedrijfsprocessen opgezet en opgeschaald — van het lanceren van startups tot het optimaliseren van processen en het aansturen van complexe projecten binnen private equity. Uitvoering zit in ons DNA.",
    "about.p2": "Wij startten Ontrí omdat we zagen dat bedrijven vastliepen: ze wisten dat AI kansen bood, maar verdwaalden in de mogelijkheden en wisten niet waar te beginnen.",
    "about.p3": "Wij brengen uw werkprocessen in kaart, bepalen waar AI realistisch meerwaarde biedt — en waar niet. Vervolgens kiezen we samen met uw team de juiste tools, richten die in en zorgen ervoor dat ze ook echt worden gebruikt.",
    "about.p4": "Het resultaat: werkende oplossingen — geen plannen op de plank, maar concrete ondersteuning bij de implementatie.",

    // Services
    "services.label": "Wat wij doen",
    "services.title": "Van analyse tot adoptie",
    "services.1.title": "Procesanalyse",
    "services.1.desc": "Wij achterhalen waar werk stagneert, vastloopt of dubbel wordt gedaan — en herontwerpen uw kernprocessen zodat de uitvoering voorspelbaar, snel en schaalbaar wordt.",
    "services.2.title": "AI-strategie & Routekaart",
    "services.2.desc": "Wij vertalen 'we moeten iets met AI' naar een concrete routekaart, gekoppeld aan uw bedrijfsdoelen: wat heeft prioriteit, wat kan wachten, en hoe voert u het effectief uit.",
    "services.3.title": "AI-tools & Implementatie",
    "services.3.desc": "Wij helpen u bewezen AI-tools te kiezen en in te richten die aansluiten bij uw werkprocessen. We verzorgen de opzet, maken handleidingen en trainen uw team om AI in het dagelijks werk te integreren.",
    "services.4.title": "Adoptie & Verandertraject",
    "services.4.desc": "Wij zorgen dat verandering ook echt landt: een helder uitrolplan, training, werkinstructies en borging — zodat nieuwe werkwijzen beklijven.",

    // Why Us
    "whyUs.label": "Waarom wij",
    "whyUs.title": "Wat ons anders maakt",
    "whyUs.1.title": "Eerst de operatie, dan de technologie",
    "whyUs.1.desc": "Wij beginnen bij uw bedrijfsvoering, niet bij de technologie. We brengen in kaart waar werk hapert, waar middelen weglekken en waar besluitvorming stagneert. Pas daarna zetten we AI gericht in — alleen waar het haalbaar en verantwoord is.",
    "whyUs.2.title": "Advies én begeleiding bij uitvoering",
    "whyUs.2.desc": "Wij werken zij aan zij met uw team: we maken gedetailleerde plannen, begeleiden de implementatie en lossen knelpunten op. We blijven betrokken totdat de nieuwe werkwijze draait en uw team er vertrouwd mee is.",
    "whyUs.3.title": "Afgestemd op uw situatie",
    "whyUs.3.desc": "Wij houden rekening met uw realiteit — de capaciteit van uw team, de staat van uw data en uw risicobereidheid.",

    // Contact
    "contact.label": "Neem contact op",
    "contact.title": "Laten we samen bekijken hoe Ontrí Advisory uw organisatie kan helpen met AI.",
    "contact.cta": "Plan een kennismaking",
    "contact.email": "Liever mailen?",

    // Footer
    "footer.copyright": "Copyright © 2026 Ontrí Advisory | Powered by Ontrí Advisory",

    // Legal
    "legal.terms.title": "Algemene Voorwaarden",
    "legal.terms.placeholder": "De Algemene Voorwaarden worden binnenkort toegevoegd.",
    "legal.privacy.title": "Privacybeleid",
    "legal.privacy.placeholder": "Het Privacybeleid wordt binnenkort toegevoegd.",
    "legal.cookies.title": "Cookiebeleid",
    "legal.cookies.placeholder": "Het Cookiebeleid wordt binnenkort toegevoegd.",
    "legal.disclaimer.title": "Disclaimer",
    "legal.disclaimer.placeholder": "De Disclaimer wordt binnenkort toegevoegd.",

    // Cookie notice
    "cookie.notice": "Deze website maakt gebruik van cookies voor de beste ervaring. Door deze site te blijven gebruiken, gaat u akkoord met ons cookiegebruik.",
  },

  ru: {
    // Navbar
    "nav.home": "Главная",
    "nav.about": "О нас",
    "nav.services": "Услуги",
    "nav.whyUs": "Почему мы",
    "nav.contact": "Контакты",

    // Hero
    "hero.title": "Вы точно знаете, где AI принесёт пользу вашему бизнесу?",
    "hero.subtitle": "Мы анализируем ваши бизнес-процессы, находим точки роста и помогаем внедрить AI-решения, которые ваша команда реально будет использовать.",
    "hero.cta": "Записаться на встречу",

    // About
    "about.label": "О нас",
    "about.title": "Мы разбираемся в деталях — и внедряем вместе с вами.",
    "about.p1": "За нашими плечами — годы построения и масштабирования бизнес-процессов: запуск стартапов, оптимизация операций, управление сложными проектами в сфере private equity. Мы знаем, как доводить дела до результата.",
    "about.p2": "Мы создали Ontrí, потому что видели: компании понимают, что AI может помочь, но теряются в вариантах и не знают, с чего начать.",
    "about.p3": "Мы детально изучаем ваши рабочие процессы, определяем, где AI действительно даст эффект, а где — нет. Затем вместе с вашей командой подбираем подходящие инструменты, настраиваем их и добиваемся того, чтобы они реально использовались.",
    "about.p4": "Результат — работающие решения, а не отчёты на полке. Мы сопровождаем вас на каждом этапе внедрения.",

    // Services
    "services.label": "Наши услуги",
    "services.title": "От анализа до результата",
    "services.1.title": "Аудит процессов",
    "services.1.desc": "Мы находим узкие места: где работа буксует, дублируется или теряет качество. Затем перестраиваем ключевые процессы так, чтобы они работали предсказуемо, быстро и были готовы к масштабированию.",
    "services.2.title": "AI-стратегия и дорожная карта",
    "services.2.desc": "Мы превращаем «нам нужен AI» в чёткий план действий, привязанный к бизнес-целям: что внедрять в первую очередь, от чего отказаться и как добиться результата.",
    "services.3.title": "Подбор и внедрение AI-инструментов",
    "services.3.desc": "Мы помогаем выбрать и настроить проверенные AI-решения под ваши задачи. Создаём инструкции, регламенты и обучаем команду интегрировать AI в повседневную работу.",
    "services.4.title": "Сопровождение изменений",
    "services.4.desc": "Мы доводим внедрение до конца: план запуска, обучение, рабочие инструкции и контроль — чтобы новые подходы прижились, а не остались на бумаге.",

    // Why Us
    "whyUs.label": "Почему мы",
    "whyUs.title": "Чем мы отличаемся",
    "whyUs.1.title": "Сначала бизнес, потом технологии",
    "whyUs.1.desc": "Мы начинаем с ваших процессов, а не с технологий. Выявляем, где теряется время, утекают ресурсы и застревают решения. AI подключаем точечно — только там, где это обоснованно и безопасно.",
    "whyUs.2.title": "Консалтинг + сопровождение",
    "whyUs.2.desc": "Мы работаем бок о бок с вашей командой: составляем планы, помогаем на каждом шаге, решаем возникающие проблемы. Мы остаёмся рядом, пока новые процессы не заработают стабильно.",
    "whyUs.3.title": "С учётом вашей реальности",
    "whyUs.3.desc": "Мы учитываем ваши реальные условия — возможности команды, готовность данных и допустимый уровень риска.",

    // Contact
    "contact.label": "Свяжитесь с нами",
    "contact.title": "Давайте обсудим, как Ontrí Advisory может помочь вашему бизнесу с AI.",
    "contact.cta": "Записаться на встречу",
    "contact.email": "Предпочитаете email?",

    // Footer
    "footer.copyright": "Copyright © 2026 Ontrí Advisory | Powered by Ontrí Advisory",
  },
};
