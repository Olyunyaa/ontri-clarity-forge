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

## Текущий статус (обновлено 20.03.2026)

- Сайт **работает** на https://ontri-advisory.com (GitHub Pages, HTTPS, SSL до 14.06.2026)
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
- [ ] Добавить favicon (сейчас стандартный)
