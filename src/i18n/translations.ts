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
    "hero.title": "Scale Your Business\nWithout Scaling Your Team",
    "hero.subtitle": "We identify where AI can multiply your team's output — and make sure it does.",
    "hero.cta": "Schedule an Intro Meeting",

    // About
    "about.label": "About Us",
    "about.title": "We bring clarity — and see it through.",
    "about.p1": "We've spent years building operations inside startups and scale-ups — not advising from the outside, but doing the actual work of making businesses run. We know what it looks like when processes break, when teams are stretched thin, and when the answer isn't more people — it's strengthening what's already there.",
    "about.p2": "We speak the language of goals and numbers. That means we start with your objectives and constraints — and figure out where AI can make a measurable difference.",
    "about.p3": "Then we work with your team to make sure the changes actually stick.",
    "about.p4": "We also run Ontrí Advisory itself on AI — which means everything we recommend, we've tested ourselves.",

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
    "footer.copyright": "© 2026 Ontrí Advisory",

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
    "hero.title": "Schaal uw bedrijf\nzonder uw team uit te breiden",
    "hero.subtitle": "Wij identificeren waar AI de prestaties van uw team kan versterken — en implementeren oplossingen die meetbare resultaten opleveren.",
    "hero.cta": "Plan een kennismaking",

    // About
    "about.label": "Over ons",
    "about.title": "Wij brengen helderheid — en zorgen voor resultaat.",
    "about.p1": "Wij hebben jarenlang operaties gebouwd binnen startups en scale-ups — niet als externe adviseurs, maar als mensen die het werk daadwerkelijk deden. Wij weten hoe het voelt wanneer processen vastlopen, teams overbelast zijn, en het antwoord niet meer mensen zijn — maar het versterken van wat er al is.",
    "about.p2": "Wij spreken de taal van doelen en cijfers. Dat betekent dat wij beginnen met uw doelstellingen en beperkingen — en uitzoeken waar AI een meetbaar verschil kan maken.",
    "about.p3": "Daarna werken wij samen met uw team om ervoor te zorgen dat de veranderingen ook echt werken.",
    "about.p4": "Ontrí Advisory zelf is volledig gebouwd met AI: alles wat wij onze klanten aanbevelen, testen wij eerst op onszelf.",

    // Services
    "services.label": "Wat wij doen",
    "services.title": "Van analyse tot adoptie",
    "services.1.title": "Procesanalyse",
    "services.1.desc": "Wij achterhalen waar werk stagneert, vastloopt of dubbel wordt gedaan. We herontwerpen uw kernprocessen zodat de uitvoering voorspelbaar, snel en schaalbaar wordt.",
    "services.2.title": "AI-strategie & Routekaart",
    "services.2.desc": "Wij vertalen 'we moeten iets met AI' naar een concrete routekaart, gekoppeld aan uw bedrijfsdoelen: wat heeft prioriteit, wat kan wachten en hoe u het effectief uitvoert.",
    "services.3.title": "AI-tools & Implementatie",
    "services.3.desc": "Wij helpen u bewezen AI-tools te kiezen en in te richten die aansluiten bij uw werkprocessen. We verzorgen de opzet, maken handleidingen en trainen uw team om AI in het dagelijks werk te integreren.",
    "services.4.title": "Adoptie & Verandermanagement",
    "services.4.desc": "Wij zorgen dat verandering ook echt landt: een helder uitrolplan, training, werkinstructies en borging, zodat nieuwe werkwijzen beklijven.",

    // Why Us
    "whyUs.label": "Waarom wij",
    "whyUs.title": "Wat ons anders maakt",
    "whyUs.1.title": "Eerst de operatie, dan de technologie",
    "whyUs.1.desc": "Wij beginnen bij uw bedrijfsvoering, niet bij de technologie. We brengen in kaart waar werk hapert, waar middelen weglekken en waar besluitvorming stagneert. Pas daarna zetten we AI gericht in, alleen waar het haalbaar en verantwoord is.",
    "whyUs.2.title": "Advies én begeleiding bij uitvoering",
    "whyUs.2.desc": "Wij werken zij aan zij met uw team: we maken gedetailleerde plannen, begeleiden de implementatie en lossen knelpunten op. We blijven betrokken totdat de nieuwe werkwijze draait en uw team er vertrouwd mee is.",
    "whyUs.3.title": "Afgestemd op uw situatie",
    "whyUs.3.desc": "Wij houden rekening met uw realiteit: de capaciteit van uw team, de staat van uw data en uw risicobereidheid.",

    // Contact
    "contact.label": "Neem contact op",
    "contact.title": "Laten we samen bekijken hoe Ontrí Advisory uw organisatie kan helpen met AI.",
    "contact.cta": "Plan een kennismaking",
    "contact.email": "Liever mailen?",

    // Footer
    "footer.copyright": "© 2026 Ontrí Advisory",

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
    "hero.title": "Масштабируйте бизнес\nбез расширения команды",
    "hero.subtitle": "Мы находим процессы, где AI может усилить работу вашей команды — и внедряем решения, которые дадут измеримый результат.",
    "hero.cta": "Записаться на встречу",

    // About
    "about.label": "О нас",
    "about.title": "Мы разбираемся в деталях — и доводим до результата.",
    "about.p1": "Мы много лет работали внутри бизнеса — выстраивали операционные процессы с нуля, оптимизировали существующие, управляли командами в стартапах и scale-ups в роли COO. Мы хорошо знаем, как это бывает: процессы работают не идеально, но времени разобраться нет. Есть дорогостоящие решения, которые давно пора пересмотреть — но руки не доходят. Команда работает на пределе, а выручка не растёт. Часто ответ — не новые люди, а автоматизация того, что съедает время, и высвобождение ресурса для задач, которые действительно двигают бизнес вперёд.",
    "about.p2": "Мы работаем в логике результатов и цифр. Начинаем с ваших целей и ограничений, разбираемся в процессах — и находим, где AI даст реальный эффект.",
    "about.p3": "Затем внедряем вместе с командой и доводим до работающего результата.",
    "about.p4": "Ontrí Advisory сам построен на AI. Всё, что рекомендуем клиентам — сначала проверяем на себе.",

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
    "footer.copyright": "© 2026 Ontrí Advisory",

    // Legal
    "legal.terms.title": "Условия использования",
    "legal.terms.placeholder": "Условия использования будут добавлены в ближайшее время.",
    "legal.privacy.title": "Политика конфиденциальности",
    "legal.privacy.placeholder": "Политика конфиденциальности будет добавлена в ближайшее время.",
    "legal.cookies.title": "Политика файлов cookie",
    "legal.cookies.placeholder": "Политика файлов cookie будет добавлена в ближайшее время.",
    "legal.disclaimer.title": "Отказ от ответственности",
    "legal.disclaimer.placeholder": "Отказ от ответственности будет добавлен в ближайшее время.",

    // Cookie notice
    "cookie.notice": "Этот сайт использует файлы cookie для обеспечения наилучшего опыта. Продолжая использовать сайт, вы соглашаетесь с использованием cookie.",
  },
};
