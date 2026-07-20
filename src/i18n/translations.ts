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
    "nav.audit": "Free AI Audit",

    // Hero
    "hero.title": "Scale Your Business\nWithout Scaling Your Team",
    "hero.subtitle": "We help startups and scale-ups hand routine work over to AI, so the business grows without growing the team. We find where AI pays off and stay until it works.",
    "hero.cta": "Schedule an Intro Meeting",
    "hero.ctaAudit": "Take the Free AI Process Audit",

    // About
    "about.label": "About Us",
    "about.title": "We bring clarity and see it through.",
    "about.p1": "We've spent years building operations inside startups and scale-ups: not advising from the outside, but doing the actual work of making businesses run. We know what it looks like when processes break, when teams are stretched thin, and when the answer isn't more people but strengthening what's already there.",
    "about.p2": "We speak the language of goals and numbers. That means we start with your objectives and constraints, then figure out where AI can make a measurable difference.",
    "about.p3": "Then we work with your team to make sure the changes actually stick.",
    "about.p4": "We also run Ontrí Advisory itself on AI, which means everything we recommend, we've tested ourselves.",
    "about.quote": "AI is not our goal. Results are.",

    // Services
    "services.label": "What We Do",
    "services.title": "From audit to adoption",
    "services.1.title": "Audit of the Processes",
    "services.1.desc": "We uncover where work slows down, breaks, or gets duplicated, then redesign your core workflows so execution becomes predictable, fast, and scalable.",
    "services.2.title": "AI Strategy → Roadmapping",
    "services.2.desc": "We turn 'we should do AI' into a prioritized roadmap tied to business KPIs: what to do first, what to skip, and how to execute effectively.",
    "services.3.title": "AI Tools and Solutions",
    "services.3.desc": "We help you select and implement proven AI solutions that fit your workflows. We set them up, create usage frameworks and documentation, and train your team to integrate AI into their daily work.",
    "services.4.title": "Adoption & Change Management",
    "services.4.desc": "We make adoption happen: clear rollout plan, training, playbooks, and accountability, so new ways of working actually stick.",

    // Why Us
    "whyUs.label": "Why Choose Us",
    "whyUs.title": "What sets us apart",
    "whyUs.1.title": "Operations-First Approach",
    "whyUs.1.desc": "We start with operations, not technology. We identify where work slows down, where resources leak, and where decisions stall. Then we apply AI selectively, only where it's feasible and safe.",
    "whyUs.2.title": "Advisory + Guided Implementation",
    "whyUs.2.desc": "We work closely with your team during implementation: creating detailed plans, providing guidance, troubleshooting issues. We stay involved until new workflows are working and your team is comfortable with them. Governance is built in from day one.",
    "whyUs.3.title": "Aligned with Your Reality",
    "whyUs.3.desc": "We work with your constraints: team capacity, data readiness, and risk appetite.",

    // How It Works
    "how.label": "How It Works",
    "how.title": "Three steps to results",
    "how.1.title": "Intro meeting",
    "how.1.desc": "A free intro call about your goals, your processes, and where time is being lost. No obligations.",
    "how.2.title": "AI Process Audit",
    "how.2.desc": "You describe your key workflows in our online audit. We analyze them and pinpoint where AI will deliver a measurable effect.",
    "how.2.link": "Open the audit",
    "how.3.title": "Roadmap and implementation",
    "how.3.desc": "You get a prioritized roadmap tied to your business goals. We implement it together with your team and stay involved until the new way of working sticks.",

    // Contact
    "contact.label": "Contact Us",
    "contact.title": "Let's discuss how Ontrí Advisory can accelerate your intelligent transformation.",
    "contact.cta": "Schedule an Intro Meeting",
    "contact.email": "Prefer email?",
    "contact.auditText": "Not ready for a call yet?",
    "contact.auditLink": "Start with the free AI Process Audit",

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
    "nav.audit": "Gratis AI-audit",

    // Hero
    "hero.title": "Schaal Uw Bedrijf\nZonder Uw Team Uit Te Breiden",
    "hero.subtitle": "Wij helpen startups en scale-ups routinewerk over te dragen aan AI, zodat het bedrijf groeit zonder het team uit te breiden. We vinden waar AI loont en blijven betrokken tot het werkt.",
    "hero.cta": "Plan een kennismaking",
    "hero.ctaAudit": "Doe de gratis AI-procesaudit",

    // About
    "about.label": "Over ons",
    "about.title": "Wij brengen helderheid en zorgen voor resultaat.",
    "about.p1": "Wij hebben jarenlang operaties gebouwd binnen startups en scale-ups: niet als externe adviseurs, maar als mensen die het werk daadwerkelijk deden. Wij weten hoe het voelt wanneer processen vastlopen, teams overbelast zijn, en het antwoord niet meer mensen zijn, maar het versterken van wat er al is.",
    "about.p2": "Wij spreken de taal van doelen en cijfers. Dat betekent dat wij beginnen met uw doelstellingen en beperkingen, en uitzoeken waar AI een meetbaar verschil kan maken.",
    "about.p3": "Daarna werken wij samen met uw team om ervoor te zorgen dat de veranderingen ook echt werken.",
    "about.p4": "Ontrí Advisory zelf is volledig gebouwd met AI: alles wat wij onze klanten aanbevelen, testen wij eerst op onszelf.",
    "about.quote": "AI is niet ons doel, resultaten wel.",

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

    // How It Works
    "how.label": "Hoe het werkt",
    "how.title": "In drie stappen naar resultaat",
    "how.1.title": "Kennismaking",
    "how.1.desc": "Een gratis kennismakingsgesprek over uw doelen, uw processen en waar tijd verloren gaat. Geheel vrijblijvend.",
    "how.2.title": "AI-procesaudit",
    "how.2.desc": "U beschrijft uw belangrijkste werkprocessen in onze online audit. Wij analyseren ze en bepalen waar AI een meetbaar effect oplevert.",
    "how.2.link": "Open de audit",
    "how.3.title": "Routekaart en implementatie",
    "how.3.desc": "U ontvangt een geprioriteerde routekaart, gekoppeld aan uw bedrijfsdoelen. We voeren die samen met uw team uit en blijven betrokken tot de nieuwe werkwijze beklijft.",

    // Contact
    "contact.label": "Neem contact op",
    "contact.title": "Laten we samen bekijken hoe Ontrí Advisory uw organisatie kan helpen met AI.",
    "contact.cta": "Plan een kennismaking",
    "contact.email": "Liever mailen?",
    "contact.auditText": "Nog niet klaar voor een gesprek?",
    "contact.auditLink": "Begin met de gratis AI-procesaudit",

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
    "nav.audit": "Бесплатный AI-аудит",

    // Hero
    "hero.title": "Масштабируйте Бизнес\nБез Расширения Команды",
    "hero.subtitle": "Помогаем стартапам и scale-up компаниям передать рутину AI, чтобы бизнес рос без расширения команды. Находим, где AI окупится, и остаёмся до работающего результата.",
    "hero.cta": "Записаться на встречу",
    "hero.ctaAudit": "Пройти бесплатный AI-аудит процессов",

    // About
    "about.label": "О нас",
    "about.title": "Мы разбираемся в деталях и доводим до результата.",
    "about.p1": "Мы много лет работали внутри бизнеса: выстраивали операционные процессы с нуля, оптимизировали существующие, управляли командами в стартапах и scale-ups в роли COO. Мы хорошо знаем, как это бывает: процессы работают не идеально, но времени разобраться нет. Есть дорогостоящие решения, которые давно пора пересмотреть, но руки не доходят. Команда работает на пределе, а выручка не растёт. Часто ответ не в новых людях, а в автоматизации того, что съедает время, и высвобождении ресурса для задач, которые действительно двигают бизнес вперёд.",
    "about.p2": "Мы работаем в логике результатов и цифр. Начинаем с ваших целей и ограничений, разбираемся в процессах и находим, где AI даст реальный эффект.",
    "about.p3": "Затем внедряем вместе с командой и доводим до работающего результата.",
    "about.p4": "Ontrí Advisory сам построен на AI. Всё, что рекомендуем клиентам, сначала проверяем на себе.",
    "about.quote": "Мы не внедряем AI ради AI.",

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
    "services.4.desc": "Мы доводим внедрение до конца: план запуска, обучение, рабочие инструкции и контроль, чтобы новые подходы прижились, а не остались на бумаге.",

    // Why Us
    "whyUs.label": "Почему мы",
    "whyUs.title": "Чем мы отличаемся",
    "whyUs.1.title": "Сначала бизнес, потом технологии",
    "whyUs.1.desc": "Мы начинаем с ваших процессов, а не с технологий. Выявляем, где теряется время, утекают ресурсы и застревают решения. AI подключаем точечно, только там, где это обоснованно и безопасно.",
    "whyUs.2.title": "Консалтинг + сопровождение",
    "whyUs.2.desc": "Мы работаем бок о бок с вашей командой: составляем планы, помогаем на каждом шаге, решаем возникающие проблемы. Мы остаёмся рядом, пока новые процессы не заработают стабильно.",
    "whyUs.3.title": "С учётом вашей реальности",
    "whyUs.3.desc": "Мы учитываем ваши реальные условия: возможности команды, готовность данных и допустимый уровень риска.",

    // How It Works
    "how.label": "Как мы работаем",
    "how.title": "Три шага до результата",
    "how.1.title": "Знакомство",
    "how.1.desc": "Бесплатный вводный созвон: ваши цели, процессы и где теряется время. Без обязательств.",
    "how.2.title": "AI-аудит процессов",
    "how.2.desc": "Вы описываете ключевые процессы в онлайн-аудите. Мы анализируем их и находим, где AI даст измеримый эффект.",
    "how.2.link": "Открыть аудит",
    "how.3.title": "Дорожная карта и внедрение",
    "how.3.desc": "Вы получаете приоритизированную дорожную карту, привязанную к целям бизнеса. Внедряем вместе с вашей командой и остаёмся рядом, пока новый подход не приживётся.",

    // Contact
    "contact.label": "Свяжитесь с нами",
    "contact.title": "Давайте обсудим, как Ontrí Advisory может помочь вашему бизнесу с AI.",
    "contact.cta": "Записаться на встречу",
    "contact.email": "Предпочитаете email?",
    "contact.auditText": "Пока не готовы к созвону?",
    "contact.auditLink": "Начните с бесплатного AI-аудита процессов",

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
