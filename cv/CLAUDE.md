# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Single-page personal CV/portfolio website for Arnaud de Raucourt (Senior Digital & AI Consultant). The entire site lives in one self-contained file with no build step, no package manager, and no external dependencies.

## File structure

- `index.html` — the entire site: all HTML, CSS (`<style>`), and JavaScript (inline at bottom of `<body>`) in one file
- `Assets/Photo Arnaud.jpg` — profile photo referenced in the hero section
- `Assets/nouveau CV Arnaud.md` — canonical source for all biographical/professional content

## How to run

Open `index.html` directly in a browser — no server required. For live reload during development, use any static file server (e.g. `npx serve .` or VS Code Live Server).

## Architecture

Everything is inline in `index.html`:

1. **CSS variables** at `:root` define the full design system — all colors derive from `--bg`, `--accent`, `--navy`, `--teal`, etc.
2. **Page sections**: `#hero` → `#about` → `#experience` → `#skills` → `#education` → `#contact`
3. **CSS class naming** uses short abbreviations: `.cd` = card, `.ti` = timeline item, `.td` = timeline dot, `.sg` = skill tag, `.an` = animate-on-scroll element
4. **Scroll animations**: IntersectionObserver adds `.on` to `.an` elements (starts at `opacity:0; translateY(28px)`, resolves to visible)
5. **Responsive breakpoints**: `768px` (collapses grids to 1 column, shows hamburger nav) and `480px` (smaller font sizes)
6. **Print/PDF**: `@media print` hides nav and interactive elements; the "Download PDF" button calls `window.print()`

## Design system

- **Accent** `#CF5E38` (coral) — primary CTAs, highlights, timeline markers
- **Navy** `#1A2744` — footer background, secondary emphasis
- **Teal** `#2A7A7F` — secondary accent on alternate timeline dots and skill tags
- **Color modifier suffixes on utility classes**: `.or` = coral, `.te` = teal, `.am` = amber, `.na` = navy

## Content updates

`Assets/nouveau CV Arnaud.md` is the authoritative content reference. When updating professional experience, skills, or biography, keep both this file and the corresponding HTML in `index.html` in sync.
