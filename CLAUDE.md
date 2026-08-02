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

## Текущий статус (обновлено 02.08.2026, вечер)

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
- [ ] Аналитика (Plausible/GoatCounter, нужен аккаунт)
