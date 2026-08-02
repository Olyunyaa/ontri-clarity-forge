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
    "nav.cases": "Cases",
    "nav.audit": "Free AI Audit",

    // Hero
    "hero.title": "Scale Your Business\nWithout Scaling Your Team",
    "hero.subtitle": "We help small and medium-sized companies at any stage hand routine work over to AI, so the business grows without growing the team. We find where AI pays off and stay until it works.",
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
    "services.1.title": "AI Opportunity & Workflow Audit",
    "services.1.desc": "We map your workflows and find not only the manual work, but also the underused knowledge and data your business already has.",
    "services.2.title": "Solution Design & Prioritisation",
    "services.2.desc": "We define what is worth building, what is not, and why, so you invest only in solutions that pay off.",
    "services.3.title": "Custom AI Systems & Data Products",
    "services.3.desc": "RAG, AI agents, internal assistants, personalization, data visualization, and client-facing tools, built for your workflows and your data.",
    "services.4.title": "Implementation, Handover & Optimisation",
    "services.4.desc": "Implementation, documentation, and handover to your team, followed by continuous improvement of what we built.",

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
    "how.1.desc": "A free call about your goals, your processes, and where time is being lost.",
    "how.2.title": "Process audit",
    "how.2.desc": "In a working session we map your key workflows together, and we analyze where AI will deliver a measurable effect.",
    "how.3.title": "Roadmap and implementation",
    "how.3.desc": "You get a prioritized roadmap tied to your business goals. We implement it together with your team and stay involved until the new way of working sticks.",

    // Cases
    "cases.label": "Cases",
    "cases.title": "What founders come to us with",
    "cases.1.role": "CEO, international neobank",
    "cases.1.pain": "Every new assistant took a year to learn how he works, and rarely stayed much longer.",
    "cases.1.desc": "We built him a custom multi-agent AI assistant, tailored to how he already communicates: texts and voice messages, in two languages. It runs his calendar, tracks his own and his team's tasks, sets reminders and follow-ups, turns screenshots into flights and restaurant bookings, and makes calls to book a table.",
    "cases.1.result": "ROI in 1 month, against the cost of recruiting and hiring an assistant",
    "cases.2.role": "Founder, paid community",
    "cases.2.pain": "Member onboarding, payment reconciliation, and record-keeping were manual and depended entirely on the founder.",
    "cases.2.desc": "We rebuilt her operations on AI agents and automated systems: personalized onboarding for every new member, automatic payment reconciliation across all data sources, structured member records, and better visibility of retention.",
    "cases.2.result": "At least 15 hours a month freed to be dedicated to sales and growth. ROI in less than 2 months",
    "cases.3.role": "Dutch engineering company, 40 years in business",
    "cases.3.pain": "The website no longer reflected the quality of the company's work.",
    "cases.3.desc": "We redesigned it and built an interactive 3D map of their 200 most recent projects across the Netherlands, with accurate geography, city borders, and project layouts.",
    "cases.3.result": "Under 20 hours of work, and a clear upgrade in how the company presents itself to clients and candidates",
    "cases.4.role": "HR Director, international company",
    "cases.4.pain": "Around 20% of her time went to answering routine questions about company policies.",
    "cases.4.desc": "We built a RAG assistant on the company's internal documentation. Employees get instant, accurate answers with references to the source; only non-standard questions reach HR.",
    "cases.4.result": "20% of her working week redirected to work that requires her judgment",
    "cases.5.role": "Product executive, industrial technology",
    "cases.5.pain": "Keeping up with AI was becoming a second job on top of her actual one.",
    "cases.5.desc": "We audited her workflows, built her a personal AI news agent that filters the noise, and set up advanced AI workflows for research and data visualization.",
    "cases.5.result": "Up to date on AI, and faster on the tasks that used to slow her down",

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
    "nav.cases": "Cases",
    "nav.audit": "Gratis AI-audit",

    // Hero
    "hero.title": "Schaal Uw Bedrijf\nZonder Uw Team Uit Te Breiden",
    "hero.subtitle": "Wij helpen kleine en middelgrote bedrijven in elke fase routinewerk over te dragen aan AI, zodat het bedrijf groeit zonder het team uit te breiden. We vinden waar AI loont en blijven betrokken tot het werkt.",
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
    "services.1.title": "AI-kansen- en workflowaudit",
    "services.1.desc": "We brengen uw workflows in kaart en vinden niet alleen het handwerk, maar ook de onderbenutte kennis en data die uw bedrijf al heeft.",
    "services.2.title": "Oplossingsontwerp & prioritering",
    "services.2.desc": "We bepalen wat het waard is om te bouwen, wat niet, en waarom, zodat u alleen investeert in oplossingen die renderen.",
    "services.3.title": "Custom AI-systemen & dataproducten",
    "services.3.desc": "RAG, AI-agents, interne assistenten, personalisatie, datavisualisatie en klantgerichte tools, gebouwd op uw processen en uw data.",
    "services.4.title": "Implementatie, overdracht & optimalisatie",
    "services.4.desc": "Implementatie, documentatie en overdracht aan uw team, gevolgd door continue verbetering van wat we bouwden.",

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
    "how.1.desc": "Een vrijblijvend gesprek over uw doelen, uw processen en waar tijd verloren gaat.",
    "how.2.title": "Procesaudit",
    "how.2.desc": "In een werksessie brengen we samen uw belangrijkste processen in kaart en analyseren we waar AI een meetbaar effect oplevert.",
    "how.3.title": "Routekaart en implementatie",
    "how.3.desc": "U ontvangt een geprioriteerde routekaart, gekoppeld aan uw bedrijfsdoelen. We voeren die samen met uw team uit en blijven betrokken tot de nieuwe werkwijze beklijft.",

    // Cases
    "cases.label": "Cases",
    "cases.title": "Waar oprichters mee komen",
    "cases.1.role": "CEO, internationale neobank",
    "cases.1.pain": "Elke nieuwe assistent had een jaar nodig om zijn manier van werken te leren, en bleef zelden veel langer.",
    "cases.1.desc": "We bouwden een custom multi-agent AI-assistent, afgestemd op hoe hij al communiceert: tekst- en spraakberichten, in twee talen. De assistent beheert zijn agenda, volgt zijn taken en die van zijn team, zet reminders en follow-ups, zet screenshots om in vluchten en restaurantreserveringen en belt zelf om een tafel te boeken.",
    "cases.1.result": "ROI in 1 maand, afgezet tegen de kosten van werving en aanstelling van een assistent",
    "cases.2.role": "Oprichter van een betaalde community",
    "cases.2.pain": "Onboarding van leden, betalingscontrole en administratie waren handwerk en hingen volledig op de oprichter.",
    "cases.2.desc": "We herbouwden haar operatie op AI-agents en geautomatiseerde systemen: persoonlijke onboarding voor elk nieuw lid, automatische betalingsreconciliatie over alle databronnen, gestructureerde ledenadministratie en beter zicht op retentie.",
    "cases.2.result": "Minstens 15 uur per maand vrijgemaakt voor sales en groei. ROI in minder dan 2 maanden",
    "cases.3.role": "Nederlands ingenieursbedrijf, 40 jaar actief",
    "cases.3.pain": "De website deed de kwaliteit van het werk niet langer recht.",
    "cases.3.desc": "We vernieuwden het design en bouwden een interactieve 3D-kaart van hun 200 meest recente projecten in heel Nederland, met accurate geografie, stadsgrenzen en projectindelingen.",
    "cases.3.result": "Minder dan 20 uur werk, en een duidelijke upgrade in hoe het bedrijf zich presenteert aan klanten en kandidaten",
    "cases.4.role": "HR-directeur, internationaal bedrijf",
    "cases.4.pain": "Ongeveer 20% van haar tijd ging naar routinevragen over bedrijfsbeleid.",
    "cases.4.desc": "We bouwden een RAG-assistent op de interne documentatie van het bedrijf. Medewerkers krijgen direct accurate antwoorden met bronverwijzing; alleen niet-standaard vragen bereiken HR.",
    "cases.4.result": "20% van haar werkweek terug naar werk dat haar oordeel vraagt",
    "cases.5.role": "Product executive, industriële technologie",
    "cases.5.pain": "Bijblijven met AI werd een tweede baan naast haar eigenlijke werk.",
    "cases.5.desc": "We analyseerden haar workflows, bouwden een persoonlijke AI-nieuwsagent die de ruis filtert en richtten geavanceerde AI-workflows in voor research en datavisualisatie.",
    "cases.5.result": "Up-to-date over AI, en sneller in de taken die haar eerder vertraagden",

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
    "nav.cases": "Кейсы",
    "nav.audit": "Бесплатный AI-аудит",

    // Hero
    "hero.title": "Масштабируйте Бизнес\nБез Расширения Команды",
    "hero.subtitle": "Помогаем малому и среднему бизнесу на любой стадии передать рутину AI, чтобы бизнес рос без расширения команды. Находим, где AI окупится, и остаёмся до работающего результата.",
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
    "services.1.title": "AI-аудит возможностей и процессов",
    "services.1.desc": "Находим не только ручную работу, но и недоиспользованные знания и данные, которые уже есть в вашем бизнесе.",
    "services.2.title": "Дизайн решений и приоритизация",
    "services.2.desc": "Определяем, что стоит строить, что не стоит и почему, чтобы вы вкладывались только в решения, которые окупятся.",
    "services.3.title": "Кастомные AI-системы и продукты на данных",
    "services.3.desc": "RAG, AI-агенты, внутренние ассистенты, персонализация, визуализация данных и клиентские инструменты, построенные под ваши процессы и ваши данные.",
    "services.4.title": "Внедрение, передача и оптимизация",
    "services.4.desc": "Внедрение, документация и передача вашей команде, а дальше постоянное улучшение того, что построили.",

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
    "how.1.desc": "Бесплатный созвон: ваши цели, процессы и где теряется время.",
    "how.2.title": "Аудит процессов",
    "how.2.desc": "На рабочей сессии вместе разбираем ваши ключевые процессы, и мы анализируем, где AI даст измеримый эффект.",
    "how.3.title": "Дорожная карта и внедрение",
    "how.3.desc": "Вы получаете приоритизированную дорожную карту, привязанную к целям бизнеса. Внедряем вместе с вашей командой и остаёмся рядом, пока новый подход не приживётся.",

    // Cases
    "cases.label": "Кейсы",
    "cases.title": "С чем к нам приходят",
    "cases.1.role": "CEO международного необанка",
    "cases.1.pain": "Каждый новый ассистент год учился работать с ним, а потом уходил.",
    "cases.1.desc": "Мы собрали ему кастомного мультиагентного AI-ассистента, настроенного под то, как он привык общаться: тексты и голосовые, на двух языках. Ассистент ведёт календарь, отслеживает его задачи и задачи команды, ставит напоминания и фоллоу-апы, превращает скриншоты в перелёты и брони ресторанов и сам звонит, чтобы забронировать столик.",
    "cases.1.result": "ROI за 1 месяц, если сравнивать со стоимостью подбора и найма ассистента",
    "cases.2.role": "Фаундер платного комьюнити",
    "cases.2.pain": "Онбординг участников, сверка платежей и учёт держались на ручной работе и полностью зависели от фаундера.",
    "cases.2.desc": "Мы перестроили её операционку на AI-агентах и автоматизированных системах: персональный онбординг для каждого нового участника, автоматическая сверка платежей по всем источникам данных, структурированный учёт участников и понятная картина удержания.",
    "cases.2.result": "Минимум 15 часов в месяц освобождено для продаж и роста. ROI меньше чем за 2 месяца",
    "cases.3.role": "Голландская инженерная компания, 40 лет на рынке",
    "cases.3.pain": "Сайт больше не отражал уровень работы компании.",
    "cases.3.desc": "Мы обновили дизайн и построили интерактивную 3D-карту их 200 последних проектов по всем Нидерландам: точная география, границы городов и планировки проектов.",
    "cases.3.result": "Меньше 20 часов работы и заметный апгрейд того, как компания выглядит для клиентов и кандидатов",
    "cases.4.role": "HR-директор международной компании",
    "cases.4.pain": "Около 20% её времени уходило на типовые вопросы о правилах компании.",
    "cases.4.desc": "Мы построили RAG-ассистента на внутренней документации компании. Сотрудники мгновенно получают точные ответы со ссылками на источник; до HR доходят только нестандартные вопросы.",
    "cases.4.result": "20% рабочей недели возвращено задачам, где нужна её экспертиза",
    "cases.5.role": "Топ-менеджер, промышленные технологии",
    "cases.5.pain": "Следить за AI становилось второй работой поверх основной.",
    "cases.5.desc": "Мы разобрали её процессы, собрали персонального AI-новостного агента, который отфильтровывает шум, и настроили продвинутые AI-процессы для рисёрча и визуализации данных.",
    "cases.5.result": "В курсе AI и быстрее в задачах, которые раньше её тормозили",

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
