# ⚡ Animate — Scroll-Based Animated Landing Page

A modern, production-ready landing page built with **React + Vite + Tailwind CSS + Framer Motion**, featuring a unique **neo-brutalist / cyberpunk** visual identity with electric lime, cyan, and hot magenta accents.

> 🚀 **Live Demo:** [https://animated-landing-rho.vercel.app/](https://animated-landing-rho.vercel.app/)

---

## 📸 Preview

![Animate Landing Page](./public/og-image.png)

---

## ✨ Features

### Core Functionality (14/14 requirements met)

| # | Feature | Description |
| --- | --------- | ------------- |
| 1 | 🧭 **Responsive Navbar** | Blur-on-scroll, mobile hamburger menu, smooth-scroll links |
| 2 | 🎬 **Animated Hero** | Staggered fade-ins, parallax blobs, marquee strip |
| 3 | 🌊 **Smooth Scrolling** | Native CSS `scroll-behavior: smooth` |
| 4 | 👁️ **Scroll Reveal** | Reusable `<Reveal>` wrapper using Framer Motion's `whileInView` |
| 5 | 🎭 **Parallax** | Hero background and content move at different speeds |
| 6 | 🔢 **Animated Counters** | Stats count up with ease-out when scrolled into view |
| 7 | 🕐 **Timeline** | Alternating entries with a gradient line that fills as you scroll |
| 8 | 🃏 **Interactive Cards** | Neo-brutalist cards that shift on hover with neon shadows |
| 9 | 💬 **Testimonials** | Auto-rotating carousel with manual dot navigation |
| 10 | 💰 **Pricing** | 3-tier layout with a highlighted "Popular" plan |
| 11 | 📧 **Validated Contact Form** | Inline errors, email regex, minimum length, success state |
| 12 | 🌓 **Dark/Light Theme** | Class-based toggle persisted in `localStorage` |
| 13 | 📊 **Scroll Progress Bar** | Gradient bar grows at the top as you scroll |
| 14 | 📱 **Fully Responsive** | Mobile-first, works on every screen size |

---

## 🎨 Design Language

**Neo-brutalist + Cyberpunk** — bold, unapologetic, unmistakable.

| Element | Choice |
| --- | --- |
| 🎨 **Primary palette** | Acid Lime `#C6FF00`, Electric Cyan `#00F0FF`, Hot Magenta `#FF006E` |
| 🖤 **Neutrals** | Ink `#0A0A0A`, Bone `#F5F5F0` |
| ✍️ **Fonts** | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (display) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (accents) |
| 📦 **Shadows** | Hard offset shadows (`6px 6px 0`) instead of blur |
| 🔲 **Borders** | Thick 2px solid black/white |
| ✨ **Motion** | Translate-on-hover, animated gradients, marquee, parallax |

---

## 🛠️ Tech Stack

- **⚛️ React 18** — Component library
- **⚡ Vite** — Ultra-fast build tool
- **🎨 Tailwind CSS v3** — Utility-first styling with custom theme
- **🎬 Framer Motion** — Declarative animations & scroll effects
- **🎯 React Icons** — Feather icon set
- **🚀 Vercel** — Hosting with auto-deploy on push

---

## 📁 Project Structure

animated-landing/
├── public/
│ ├── favicon.svg
│ └── og-image.png # Social preview image
├── src/
│ ├── components/
│ │ ├── ui/
│ │ │ └── Reveal.jsx # Reusable scroll-reveal wrapper
│ │ ├── Navbar.jsx # Responsive nav with theme toggle
│ │ ├── ScrollProgress.jsx # Top gradient progress bar
│ │ ├── Hero.jsx # Parallax hero with marquee
│ │ ├── Stats.jsx # Animated counters section
│ │ ├── Counter.jsx # Count-up number component
│ │ ├── CardGrid.jsx # Interactive feature cards
│ │ ├── Timeline.jsx # Vertical animated timeline
│ │ ├── Testimonials.jsx # Auto-rotating carousel
│ │ ├── Pricing.jsx # 3-tier pricing cards
│ │ ├── ContactForm.jsx # Validated contact form
│ │ └── Footer.jsx # Site footer
│ ├── hooks/
│ │ └── useTheme.js # Dark/light theme hook
│ ├── App.jsx # Root component
│ ├── index.css # Tailwind + custom base styles
│ └── main.jsx # Entry point
├── index.html
├── tailwind.config.js # Custom theme, colors, animations
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md

---

## 🚀 Run Locally

### Prerequisites

- **Node.js** ≥ 18 — [Download](https://nodejs.org)
- **npm** or **pnpm** or **yarn**

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/RohanSiripurapu/animated-landing.git
cd animated-landing

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

npm run build      # Production build → dist/
npm run preview    # Preview the production build
npm run lint       # Run ESLint


---
