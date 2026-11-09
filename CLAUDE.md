# Проект: Ontrí Advisory — Сайт и Диагностическая карта

> **Инструкция для Claude:** После каждого значимого изменения (новый деплой, изменение файлов, исправление багов, добавление фич) — обнови секции «Текущий статус» и «Что осталось сделать» в этом файле. В конце сессии — тоже обнови. Если добавляешь новый файл или меняешь роль существующего — обнови секцию «Ключевые файлы». Если принимаешь архитектурное решение — запиши в «Принятые решения».

## Что это за проект

Сайт-лендинг для Ontrí Advisory (AI-консалтинг) + standalone диагностическая карта (AI Process Audit). Сайт — React SPA, аудит — отдельный HTML-файл в `public/audit/`.

## Ключевые файлы

### Лендинг (React SPA)
- **`src/pages/Index.tsx`** — главная страница, собирает все секции
- **`src/components/Navbar.tsx`** — фиксированный хедер, мобильное меню, переключатель языка
- **`src/components/HeroSection.tsx`** — hero с фоном, CTA → Calendly
- **`src/components/AboutSection.tsx`** — об основателе (Ольга Перова), фото, био, ценности
- **`src/components/ServicesSection.tsx`** — 4 карточки услуг (Audit, Strategy, Tools, Adoption)
- **`src/components/HowItWorksSection.tsx`** — секция «Как мы работаем»: 3 шага (созвон → аудит → внедрение), ссылка на /audit/
- **`src/components/CasesSection.tsx`** — секция «Кейсы»: 5 анонимных клиентских историй (pain-first, ROI-строка), утверждены Ольгой 20.07.2026
- **`src/components/WhyUsSection.tsx`** — 3 карточки преимуществ
- **`src/components/ContactSection.tsx`** — CTA с Calendly + email
- **`src/components/Footer.tsx`** — юридические модалки (Terms, Privacy, Cookies, Disclaimer)
- **`src/components/CookieNotice.tsx`** — баннер согласия на куки
- **`src/components/LanguageSwitcher.tsx`** — переключатель EN/NL/RU
- **`src/i18n/translations.ts`** — все переводы (100+ ключей на 3 языка)
- **`src/i18n/LanguageContext.tsx`** — React Context для языка, сохраняет в localStorage

### Диагностическая карта (standalone)
- **`public/audit/index.html`** (~1035 строк) — AI Process Audit форма. 5 экранов: Welcome → Tasks (+ слайдеры рутины) → Task Details (аккордеон) → General Questions (проблемы + цель + кнопки «Готово»/«PDF») → Thank You. Двуязычная (EN/RU).
- **`public/audit/sw.js`** — Service Worker для офлайн-кеширования

**Фичи аудит-формы:**
- Сбор задач клиента, оценка % рабочей недели, детализация по подзадачам
- Для каждой задачи: кто выполняет, какие AI-инструменты, как используют
- Проблемы с AI (чипсы) + цель консалтинга (textarea)
- **PDF-экспорт** через jsPDF 2.5.1 (с PT Sans для кириллицы)
- **Отправка email** через EmailJS (service_pfl7vyt / template_xo7wv5f / MqADpxGb2aRhHIjN2)
- **Офлайн-режим**: Service Worker + очередь в localStorage, отправка при восстановлении связи
- Шаблон email: `~/Desktop/Ontrí Advisory/Диагностическая карта/emailjs-template.html` (table-based layout с `bgcolor`/`<font>` для совместимости с Gmail)

### Страница продукта для кейтеринга (standalone)
- **`public/catering/index.html`** — русскоязычный лендинг «Кейтеринг Система» для холодного аутрича (https://ontri-advisory.com/catering/): hero, демо-видео с кликабельными главами, цифры кейса, 6 возможностей, 4 скриншота с лайтбоксом, как внедряем, FAQ, блок основателя, CTA на Calendly + hello@ontri-advisory.com. Свой маленький баннер согласия на GA (тот же ключ `analytics-consent`), события `demo_play`, `demo_chapter`, `demo_complete`, `cta_click`.
- Рядом ассеты: `demo.mp4` (ролик без звука, 67 с, H.264), `poster.jpg`, `shot-*.jpg`, `olya.jpg`, `og.jpg` (превью ссылки 1200×630). Исходник ролика и текст озвучки: `~/Desktop/Ontrí Advisory/Marketing/Кейтеринг демо-видео/`.
- Блок основателя: «Оля Перова-Гроут», фаундер, иконка-ссылка на личный LinkedIn. Цена в FAQ: от 120 000 ₽, срок 2–4 недели.
- Отзыв Авроры: закомментированный блок в HTML, ждёт текста.

### Стили и дизайн
- **Tailwind CSS** + shadcn-ui (51 компонент в `src/components/ui/`)
- **Шрифты**: Inter (body), Cormorant Garamond (заголовки)
- **Палитра**: бежевый фон (#F6F4EE), тёмно-синий акцент (#111B32)
- **`src/assets/`**: hero-abstract.jpg, logo.png, olga-perova.png

### CI/CD
- **`.github/workflows/deploy.yml`** — GitHub Actions: npm ci → vite build → deploy to GitHub Pages
- **`netlify.toml`** — конфиг Netlify (legacy, сайт мигрирован на GitHub Pages)

## Стек технологий

| Категория | Технологии |
|-----------|-----------|
| Фреймворк | React 18 + TypeScript 5.8 + Vite 5.4 |
| UI | shadcn-ui + Radix UI + Tailwind CSS 3.4 |
| Роутинг | React Router DOM 6.30 (только `/` и `*`) |
| Формы | React Hook Form + Zod |
| Данные | @tanstack/react-query |
| Тесты | Vitest + JSDOM |
| Линтинг | ESLint 9 с TypeScript-плагином |

## Принятые решения

### Хостинг
- **GitHub Pages** с кастомным доменом ontri-advisory.com (CNAME в `public/CNAME`)
- Мигрировано с **Netlify** (март 2026) из-за лимитов бесплатного тарифа
- DNS: A records на GitHub Pages IP-адреса через strato.nl
- Let's Encrypt SSL-сертификат (автоматический через GitHub Pages)

### Аудит-форма
- **Standalone HTML** (не React-компонент) — проще делиться, работает офлайн, не зависит от сборки
- **EmailJS** вместо FormSubmit.co — кастомный HTML-шаблон для email
- **Email-шаблон**: table-based layout с `bgcolor`, `<font color>` (не inline CSS) — Gmail стрипает `<style>` блоки, EmailJS ломает длинные inline стили
- **jsPDF 2.5.1** (не 2.5.2 — его нет на cdnjs)
- **Service Worker** для офлайна — клиенты заполняют форму в самолёте

### Интернационализация
- 3 языка: EN, NL (частично), RU
- localStorage для сохранения выбора
- Контекст React, не i18next — проект небольшой, не нужна тяжёлая библиотека

## Репозиторий и URL-ы
- **GitHub**: `git@github.com:Olyunyaa/ontri-clarity-forge.git`
- **Домен**: https://ontri-advisory.com
- **Аудит**: https://ontri-advisory.com/audit/
- **DNS-провайдер**: strato.nl

- **LinkedIn Ольги (личный)**: https://www.linkedin.com/in/olyagroot/ · **компании**: https://www.linkedin.com/company/ontri-advisory

## Env vars / ключи
- EmailJS: service_pfl7vyt / template_xo7wv5f / MqADpxGb2aRhHIjN2 (публичные, в коде аудит-формы)

## Команды

```bash
npm run dev        # Dev-сервер на порту 8080
npm run build      # Production-сборка в dist/
npm run preview    # Превью production-билда
npm run lint       # ESLint
npm run test       # Vitest
```

### Деплой
Автоматический при push в `main` через GitHub Actions. Ручной деплой не нужен.

```bash
git add -A && git commit -m "..." && git push
# GitHub Actions сделает npm ci → vite build → deploy
```

### Обновить аудит-форму
Исходник: `~/Desktop/Ontrí Advisory/Диагностическая карта/process-audit.html`
```bash
cp ~/Desktop/Ontrí\ Advisory/Диагностическая\ карта/process-audit.html public/audit/index.html
git add public/audit/index.html && git commit -m "Update audit form" && git push
```

## Текущий статус (обновлено 09.11.2026)

- **GoatCounter — счётчик без cookie** (09.11.2026, код готов, ждёт аккаунта): GA видит только тех, кто нажал «Принять» в баннере, а люди из холодной рассылки баннер обычно не трогают (с 5 по 8.11 в GA ноль визитов). GoatCounter не ставит cookie и не хранит IP, поэтому грузится без согласия и считает всех. Снипет в `<head>` четырёх страниц (index.html, public/catering, public/check, public/audit), адрес `https://ontri-advisory.goatcounter.com/count`; пропускает визиты с `?me=1`/`ga-ignore`, на localhost сам не считает. На /catering/ функция `track()` дублирует события в GoatCounter как `catering-demo_play`, `catering-demo_complete`, `catering-demo_chapter`, `catering-cta_click-<место>`. Service Worker аудита пропускает запросы счётчика мимо кеша. Privacy и Cookie Policy дополнены (дата 9 November 2026). Смотреть: ontri-advisory.goatcounter.com (аккаунт Оли).

- **«О нас» дополнено инвестиционным опытом** (04.11.2026): в about.p1 (EN/NL/RU) одно предложение про работу на стороне инвестора в портфеле недвижимости на $2 млрд (Нью-Йорк и UK). Первая попытка (длинная вставка в about.p2) Оле не понравилась и откатана: p2 снова прежний. Название фонда (Forum Absolute) и личность инвестора на сайте сознательно не упоминаются.

- **Свои визиты не считаются в GA** (04.11.2026): открыть любую страницу сайта с `?me=1` — в этом браузере GA больше не грузится на всех страницах (главная, /catering/, /check/, /audit/; ключ localStorage `ga-ignore`), `?me=0` — вернуть. Делать в каждом браузере/профиле отдельно. Фильтр по IP не подходит: у Оли лондонский VPN на компьютере, поэтому её визиты в GA выглядят как Лондон. Первые данные /catering/ (03.11: 14 просмотров, Лондон/Алкмар/Эйндховен) — почти всё это Оля и проверки после публикации.

- **Ролик /catering/ перезаписан** (03.11.2026): разбор заявки теперь сам заполняет заказчика, контакт и площадку, ручного ввода в ролике нет. Длина 67,3 с, главы пересчитаны (0:03, 0:13, 0:20, 0:27, 0:33, 0:43, 0:56), обновлены `poster.jpg` и `shot-request.jpg`. Карточка «Склад» переписана: свободные позиции в реальном времени, менеджеры не бронируют одно и то же дважды, QR-код для кладовщика. Формулировку «список сбора из сметы» убрали везде, это неправда (Оля 03.11): менеджер составляет список сам.

- **Страница /catering/ опубликована** (03.11.2026, коммит 36a4c12, проверена на проде): standalone HTML, как /check/ (React-роут на GitHub Pages отдавал бы 404 при прямом заходе). Добавлена в sitemap. Проверена на 1440 и 390 px, сборка и тесты зелёные. Чтобы заменить ролик на озвученный — положить новый mp4 с тем же именем `public/catering/demo.mp4` (таймкоды глав в HTML рассчитаны на текущий монтаж). В dev-сервере открывать `/catering/index.html` (Vite отдаёт SPA на `/catering/`), на проде работает `/catering/`.

- **Кейс кейтеринга опубликован** (02.11.2026): пятая featured-карточка на всю ширину первой в секции кейсов, «Sales Quote & Proposal System» (кейтеринговая компания без имени, 100 → 15 часов в месяц на сметы), EN/NL/RU (ключи cases.5.*). Слева моушн-видео из LinkedIn-поста 11 (`src/assets/case-catering.mp4`, обложка `case-catering-poster.png`): без звука, по кругу, играет только когда карточка на экране; при prefers-reduced-motion не стартует, показывает контролы. Видео только на английском.

- **Подзаголовок hero заменён на всех языках** (30.10.2026, формулировка Ольги): «Смотрим, как работает ваша команда, находим, что можно отдать AI, и внедряем, чтобы у бизнеса был измеримый результат». Остальные правки русских текстов главной и позиционирование пока обсуждаются, не внесены.

- **GA4 исправлена** (16.10.2026): на главной React-странице статистика не собиралась с момента подключения, потому что `gtag` в `src/lib/analytics.ts` пушил в dataLayer массив вместо объекта `arguments` (GA такие записи игнорирует). Исправлено (коммит b529f5a), на проде проверено: уходит `page_view` на G-ZZSM623SC2, в Realtime виден визит. Данных до 16.10.2026 нет и не будет. **GA-аккаунт «Ontrí Advisory», property «ontri-advisory.com»; владелец ontri.backup@gmail.com, с 04.11.2026 у olyaperova777@gmail.com роль Viewer** (под ним GA открывается в Chrome с расширением Claude; ontri.backup в этом профиле не залогинен). Realtime: `analytics.google.com/analytics/web/#/a408860929p555146662/realtime/overview`.

- **Инцидент 29.08.2026, устранён:** сайт лежал с 404, потому что репозиторий перевели в private — GitHub на бесплатном тарифе автоматически отключает Pages для приватных репо. Решение (согласовано с Ольгой): репо снова сделан публичным, Pages пересоздан (build_type: workflow), кастомный домен ontri-advisory.com привязан заново, деплой перезапущен. Главная, /check/ и /audit/ отвечают 200, HTTPS enforced. **Важно: не переводить репо в private — сайт сразу упадёт** (либо сначала купить GitHub Pro).

- **Google Analytics 4 подключена** (20.09.2026): Measurement ID `G-ZZSM623SC2` (property Ольги). Куки-баннер Accept/Decline (EN/NL/RU), GA грузится только после согласия (`src/lib/analytics.ts`, ключ localStorage `analytics-consent`, anonymize_ip). Тот же consent-gated снипет в `/check/` и `/audit/` (ID в 3 файлах: analytics.ts, check/index.html, audit/index.html). Проверено на проде: тег инициализируется после Accept. Смотреть статистику: analytics.google.com → Reports (города — в Demographic details; Realtime для проверки живьём).
- **Cookie Policy актуализирована + Cookie Settings в футере** (20.09.2026): в политике обновлена дата, из таблицы куки убраны _gid/_gat (GA4 их не ставит). В футере новая кнопка «Cookie Settings» (EN/NL/RU, ключ footer.cookieSettings) — открывает баннер согласия заново; если отозвать согласие после «Принять», страница перезагружается и GA не грузится. Событие: window "open-cookie-settings".
- **Фото основателя заменено** (29.08.2026): в AboutSection теперь новый студийный портрет (тёмный блейзер, коричневый фон), файл `src/assets/olga-perova.jpg` (JPEG 359 KB вместо старого PNG 1.8 MB). Исходник: `Marketing/LinkedIn Photos/F2B015D8-5441-409E-98C5-BA3C90133139.PNG`.
- **AI Opportunity Check возвращён к v1** (02.08.2026, по решению Ольги): переделки v2 (адаптивные вопросы) и v3 (однозадачный automation check) откатаны, код остался в git-истории (коммиты aad7b07 и 5a16136). Действующая версия: 5 вопросов чипсами, мгновенный результат.
-  (история) AI Opportunity Check живёт на /check/ (public/check/index.html, standalone, EN/RU): 5 вопросов чипсами → мгновенный результат (библиотека возможностей по матрице роль×боль, кейс под боль, Calendly CTA, опциональный email). Письма идут через EmailJS шаблон **template_ilm44bu** (формат «AI Opportunity Check», result_body в тройных скобках), fallback на аудитный template_xo7wv5f. Тихая аналитика: письмо на каждое прохождение. Заявки приходят на **hello.ontri@gmail.com**. Лимит EmailJS: 200 писем/месяц.
- **Воронка:** hero-кнопка «Check where AI pays off · 3 min» → /check/; мостик после кейсов и строка в контактах тоже ведут на чек; кейсы в навбаре. /audit/ переделан в post-booking preparation worksheet (по умолчанию EN), из sitemap удалён; /check/ в sitemap.
- **Кейсы (финальная структура):** 4 featured-карточки 2×2 (CEO Executive Operations System, RAG Knowledge Product & Operations Automation с двумя фазами, AI Meeting-to-Action Workflow «Ontrí internal», Interactive Engineering Portfolio Map со скриншотами) + «What else we've built» (3 компактные карточки). Британский английский по всему EN-тексту.


- Обновления 21.07-02.08.2026: секция «Как мы работаем» переписана под разговорный процесс (без анкет); аудит-форма по умолчанию открывается на английском; в кейс 03 добавлены два скриншота 3D-карты (src/assets/case-map-*.jpg, брендинг клиента обрезан); услуги переписаны (Audit → Solution Design → Custom AI Systems → Implementation); заголовок кейсов «Selected problems we've turned into working systems»; hero-подзаголовок «For founders and business leaders who see AI potential...» (SMB-позиционирование осталось в title/meta/JSON-LD)


- Сайт **работает** на https://ontri-advisory.com (GitHub Pages, HTTPS, SSL до 14.06.2026)
- Из всех текстов (EN/NL/RU, легальные страницы, аудит-форма) удалены длинные тире (em dash) — фразы переписаны через запятые/двоеточия; задеплоено и проверено на проде 20.07.2026
- Лидогенерация (20.07.2026): аудит-форма теперь связана с сайтом — кнопка в навбаре, вторая CTA в hero, ссылка в шаге 2 «Как мы работаем» и в Contact; hero-подзаголовок переписан (аудитория + результат); добавлена секция HowItWorksSection
- SEO (20.07.2026): favicon из логотипа (favicon.png, apple-touch-icon.png), OG-image 1200x630 (public/og-image.png), полные OG/Twitter-теги, canonical, JSON-LD ProfessionalService, sitemap.xml + ссылка в robots.txt
- Кейсы (20.07.2026): секция из 5 анонимных кейсов (AI-ассистент CEO, комьюнити, инженерная компания, RAG для HR, анти-FOMO агент) на EN/NL/RU, задеплоена и проверена на проде; хэш-ссылки (#cases) теперь работают при прямом заходе; ScrollReveal уважает prefers-reduced-motion
- Аудит-форма **работает** на https://ontri-advisory.com/audit/
- Форма реструктурирована: 3 шага (Tasks → Details → General Questions), кнопки «Готово» и «Получить PDF» на последнем шаге, экран «Спасибо» после отправки
- EmailJS отправляет красивые email с данными аудита
- PDF-экспорт работает (jsPDF 2.5.1, кириллица через PT Sans, шрифт загружается с Google Fonts)
- Офлайн-режим работает (Service Worker + localStorage queue)
- CI/CD через GitHub Actions настроен и работает

## Что осталось сделать

- [ ] Доработать NL (голландский) перевод — сейчас частичный
- [ ] Рассмотреть добавление аудит-формы на NL
- [ ] Удалить `netlify.toml` и `.netlify/` — больше не используются
- [x] Добавить favicon (сделано 20.07.2026 из логотипа)
- [ ] Кейсы/результаты клиентов на сайт (нужны реальные цифры от Ольги, не выдумывать)
- [x] Аналитика: GA4 подключена (20.09.2026, G-ZZSM623SC2, consent-gated)
