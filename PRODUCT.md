# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Founders, owners and CEOs of small and medium-sized businesses, across all three language markets equally: English-speaking, Dutch (NL/Europe) and Russian-speaking. They feel the team is stretched, see that AI could help, but don't know where it pays off or how to implement it without hiring more people. They arrive from LinkedIn, cold outreach (e.g. catering companies on /catering/), name search for the founder, and referrals.

## Product Purpose

Ontrí Advisory is an AI consulting and implementation practice run by founder Olya Perova. It looks at how a client's team works, finds what can be handed off to AI, and builds and implements it so the business gets a measurable result. The website exists to turn a visitor into a booked intro call.

Primary conversion: an intro call booked via Calendly. The 3-minute AI Opportunity Check (/check/) is the fallback path for visitors not ready to book.

## Positioning

Operations-first, not technology-first: the founder has built operations inside startups and scale-ups and has worked on the investor side of a $2B real estate portfolio (New York, UK), so the work starts from goals, numbers and constraints. Advisory plus hands-on build and implementation, staying involved until the new way of working sticks. Ontrí runs its own business on AI, so recommendations are self-tested. "AI is not our goal. Results are."

## Operating Context

- Main site: React SPA at https://ontri-advisory.com (Hero → About → Services → How it works → Cases → Why us → Contact).
- Standalone pages: /check/ (AI Opportunity Check, EN/RU), /catering/ (Russian landing for catering companies, cold outreach), /olya/ and /olya/ru/ (founder page for name search), /audit/ (post-booking worksheet, not in the visitor funnel).
- Process for clients: free intro call → working-session process audit → prioritised roadmap and implementation with the team.
- Contact: Calendly, hello@ontri-advisory.com, LinkedIn (personal and company).

## Capabilities and Constraints

- Three languages: EN, NL (partial translation), RU; choice stored in localStorage.
- Hosting: GitHub Pages; standalone pages are plain HTML so they work on direct entry.
- Analytics: GA4 only after cookie consent; GoatCounter cookieless for all pages.
- Services: AI opportunity & workflow audit; solution design & prioritisation; custom AI systems & data products (RAG, agents, assistants, data visualisation); implementation, handover & optimisation.
- Catering product price: from 120 000 ₽, 2–4 weeks (on /catering/ only).

## Brand Commitments

- Name: Ontrí Advisory; founder name used everywhere is Olya Perova / Оля Перова (not Groot, not Perova-Groot).
- British English across EN text. No em dashes in copy.
- Client cases are anonymous; fund and investor names are deliberately not mentioned.
- Voice: plain, results-and-numbers language, no AI hype.

## Evidence on Hand

- Five approved anonymous cases with real figures (src/i18n/translations.ts, cases.*): CEO executive operations system (ROI in 1 month), RAG knowledge product for a paid community (15+ h/month freed, ROI < 2 months), internal meeting-to-action workflow, interactive 3D engineering portfolio map (< 20 h of work), catering quote system (100 → 15 h/month; 85 h/month on /catering/).
- Catering demo video and screenshots (public/catering/, src/assets/case-catering.mp4).
- Founder portrait (src/assets/olga-perova.jpg, public/olya/olya.jpg).
- Absent: client testimonials (Aurora testimonial on /catering/ awaits text), client logos, public pricing for general services. Do not fabricate any of these.

## Product Principles

1. Every page leads to one action: book an intro call. Secondary paths support it, not compete with it.
2. Proof over promise: real numbers from real cases, never invented claims.
3. Speak the founder's language: goals, hours, money, not AI technology.
4. Equal quality in EN, NL and RU; a market is not served by a half-translated page.
