# Portfolio 2026 Project Documentation

## Project Name

```text
Portfolio 2026
```

## Owner / Portfolio Positioning

```text
Swapnil Gaonkar
Creative Designer + Frontend Experience Builder
```

The portfolio positions Swapnil as a design-first creative professional who also builds responsive frontend experiences. The site is meant for recruiters, HR teams, creative agencies, frontend/UI roles, and freelance clients.

The portfolio should communicate:

- Graphic design foundation
- UI/UX and portal design capability
- Frontend implementation skill
- Learning platform and dashboard experience
- Campaign, branding, flyer, and social media design ability
- Interactive widget building with vanilla frontend code

## Project Purpose

This is a premium, responsive, multi-page portfolio website built using only static frontend technologies.

The goal is to showcase:

- portfolio projects
- case studies
- learning portal UI work
- interactive widgets
- launch campaign creatives
- design tools and frontend skills
- contact availability

The site should feel:

- modern
- cinematic
- minimal
- premium
- smooth
- mobile-friendly
- recruiter-friendly
- Awwwards-inspired, but still practical

## Current Local Path

```text
D:\swapnil\Portfolio 2026
```

## Tech Stack

```text
HTML5
CSS3
Vanilla JavaScript
GSAP CDN
Google Fonts
```

Fonts used:

```text
Manrope
Space Grotesk
```

No framework is used.

The site does not use:

- PHP
- backend
- database
- WordPress
- Bootstrap
- jQuery
- React
- Vue
- Angular

## Deployment Type

The project is a static website and is suitable for:

- GitHub Pages
- Netlify
- Vercel

Recommended hosting:

```text
GitHub Pages
```

Expected live URL format:

```text
https://swapnil0607.github.io/portfolio-2026/
```

## Main Folder Structure

```text
Portfolio 2026/
|
|-- index.html
|-- PORTFOLIO_2026_PROJECT_DOCUMENTATION.md
|-- SKILLSET_JOURNEY_IMPLEMENTATION_BRIEF.md
|
|-- assets/
|   |-- icons/
|   |-- images/
|
|-- css/
|   |-- style.css
|   |-- responsive.css
|   |-- animations.css
|
|-- js/
|   |-- app.js
|   |-- animations.js
|   |-- navbar.js
|
|-- pages/
|   |-- about.html
|   |-- projects.html
|   |-- case-studies.html
|   |-- services.html
|   |-- contact.html
|   |-- learning-portal.html
|   |-- interactive-widgets.html
|   |-- launch-campaign.html
|   |-- identity-system.html
|   |-- portal-dashboard.html
|   |-- responsive-landing.html
|   |-- case-study.html
|   |-- tata-steel-case-study.html
|   |-- sudariser-case-study.html
|   |-- vedant-fashions-case-study.html
|   |
|   |-- widgets/
|       |-- 5-widget/
|       |-- 6-cards/
|       |-- Circle-widget/
|       |-- Slider/
```

## Color System

Core colors used across the design:

```css
Background: #050816
Primary Accent: #22d3ee
Secondary Accent: #4f46e5
Text: #ffffff
Muted Text: rgba(255,255,255,0.7)
Glass Border: rgba(255,255,255,0.08)
```

The website uses:

- dark backgrounds
- glass cards
- cyan highlights
- subtle blue/purple glow
- restrained borders
- cinematic gradients

## Core CSS Files

### `css/style.css`

Main styling file.

Contains:

- CSS variables
- base reset
- layout utilities
- navbar
- hero section
- home sections
- project cards
- case study cards
- page intro styles
- content blocks
- timelines
- contact form
- portal mockups
- flyer mockups
- social carousel mockups
- case study detail layouts
- widget mockups
- skill icons and chips

### `css/responsive.css`

Responsive styling file.

Breakpoints:

```css
992px
768px
576px
420px
```

Contains:

- mobile navbar behavior
- stacked layouts
- mobile hero adjustments
- mobile page intro spacing
- project grid stacking
- portal mockup scaling
- widget mockup scaling
- flyer/social layout stacking
- touch-device hover reduction

### `css/animations.css`

Animation styling file.

Contains:

- hero fade-up animation
- reveal animation
- card reveal states
- hover animation states
- reduced-motion fallbacks

## JavaScript Files

### `js/navbar.js`

Handles:

- active navigation state
- mobile hamburger toggle
- mobile menu open/close
- closing mobile menu when a link is clicked

### `js/app.js`

Handles:

- project filtering on Projects page
- social media carousel controls
- social media carousel dot navigation
- social media carousel mobile swipe support

### `js/animations.js`

Handles:

- scroll reveal via IntersectionObserver
- reduced-motion handling
- parallax effect on desktop
- mobile reveal trigger tuning
- disables parallax on smaller/touch viewports for smoother mobile scrolling

## Main Pages

## Home Page

File:

```text
index.html
```

Purpose:

The home page gives a quick premium overview of the portfolio.

Current sections:

1. Fixed navbar
2. Hero section
3. About preview
4. Featured Work
5. Skills
6. Contact CTA
7. Footer

Hero headline:

```text
Designing immersive digital experiences.
```

Positioning:

```text
Creative Designer + Frontend Experience Builder
```

Featured Work currently links to:

- Learning Portal UI
- Interactive Widget Library
- Campaign Identity System

Important current note:

A new **Skillset Journey Preview** should be added to Home after the About Preview and before Featured Work. This is documented separately in:

```text
SKILLSET_JOURNEY_IMPLEMENTATION_BRIEF.md
```

Reason:

Recruiters often view the site on mobile and may not open the hamburger menu. Experience and skills should be visible early on Home.

## About Page

File:

```text
pages/about.html
```

Purpose:

Explains the professional journey, design philosophy, tools, workflow, and capabilities.

Current sections:

1. Page hero
2. Introduction
3. Journey / Experience / Workflow / Philosophy cards
4. Timeline
5. Tools
6. Footer

Current positioning:

```text
Creative Designer + Frontend Experience Builder
```

Important future addition:

Add full **Skillset Journey** section with id:

```html
id="skillset-journey"
```

This should include:

- experience timeline
- skill groups
- design-first tool hierarchy
- frontend capability
- learning platform experience

## Projects Page

File:

```text
pages/projects.html
```

Purpose:

Displays project cards with category filtering.

Categories:

- Branding
- UI/UX
- Frontend
- Learning Platforms
- Campaigns

Features:

- filter buttons
- responsive project grid
- hover animation
- project cards linking to individual detail pages

Important note:

Case studies were moved out of the Projects page and now live on their own Case Studies page.

## Case Studies Page

File:

```text
pages/case-studies.html
```

Purpose:

Dedicated page for major case study stories.

Case studies:

1. Tata Steel
2. SudaRiser
3. Vedant Fashions

Current card thumbnail direction:

- brand logo thumbnails
- premium glass cards
- client-specific tone

Logo images:

```text
assets/images/Tata-steel-logo.jpg
assets/images/Sudarshan-logo.jpg
assets/images/vedant-fashions-logo.jpg
```

## Tata Steel Case Study

File:

```text
pages/tata-steel-case-study.html
```

Theme:

- enterprise
- structured
- modern
- dark navy / blue feel

Images:

```text
assets/images/Tata-steel-Old.jpg
assets/images/Tata-steel-New.jpg
```

Content focus:

- Learning Experience Modernization
- portal redesign
- cleaner learning experience
- structured layout
- improved hierarchy

## SudaRiser Case Study

File:

```text
pages/sudariser-case-study.html
```

Theme:

- vibrant
- energetic
- dynamic
- gradient-friendly

Images:

```text
assets/images/Sudarshan-Portal-Old.jpg
assets/images/Sudarshan-Portal-New.jpg
```

Content focus:

- Platform Relaunch Experience
- learner engagement
- dynamic homepage
- gamification visibility

## Vedant Fashions Case Study

File:

```text
pages/vedant-fashions-case-study.html
```

Theme:

- luxury
- editorial
- fashion-inspired
- premium visual storytelling

Image:

```text
assets/images/Manyavar-portal.jpg
```

Content focus:

- brand-led learning experience
- fashion-forward visual alignment
- premium learning platform

## Learning Portal UI Page

File:

```text
pages/learning-portal.html
```

Purpose:

Showcases portal UI screens inside laptop/browser-style mockups.

Clients included:

- Taj IHCL
- Tata Steel
- SudaRiser
- Vedant Fashions
- Gulf Oil

Images:

```text
assets/images/IHCL-portal.jpg
assets/images/Tata-steel-New.jpg
assets/images/Sudarshan-Portal-New.jpg
assets/images/Manyavar-portal.jpg
assets/images/Gulf-oil-portal.jpg
```

Key feature:

Each portal is shown inside a 1920x1080-style laptop/browser mockup with internal vertical scroll.

Important CSS classes:

```css
.portal-showcase-grid
.portal-showcase-card
.portal-card-heading
.portal-laptop
.portal-scroll-screen
.portal-focus-grid
.portal-focus-card
```

## Interactive Widgets Page

File:

```text
pages/interactive-widgets.html
```

Purpose:

Showcases live interactive widgets inside laptop/browser mockups.

Widgets:

1. 5-widget
2. Slider
3. Circle-widget
4. 6-cards

Widget folders:

```text
pages/widgets/5-widget/
pages/widgets/Slider/
pages/widgets/Circle-widget/
pages/widgets/6-cards/
```

Current behavior:

- widgets are embedded inside portfolio mockups
- each widget has an Open Demo button
- direct widget pages were adjusted to be mobile-friendly
- internal links should remain disabled or safe

Important CSS classes:

```css
.widget-showcase
.widget-demo-card
.widget-mockup
.mockup-lid
.mockup-browser
.mockup-webpage
.widget-preview-frame
.widget-preview-cards
.widget-preview-slider
```

## Launch Campaign Page

File:

```text
pages/launch-campaign.html
```

Purpose:

Showcases campaign creatives split into two sections:

1. Flyers
2. Social Media

### Flyers

Folder:

```text
assets/images/flyers/
```

Files:

```text
category-flyer-02.gif
Cultural-Synergy.jpg
Diwali-Mailer-2025-650px.jpg
Launch-Mailer.jpg
Megan-Gerhardt_High.jpg
my-learning-app-02.jpg
Sustainability.png
Tabuk-02.jpg
Teaser01.jpg
User-Guide.jpg
World-Environment-Day-01.png
```

Design:

- vertical poster/mockup style
- images should fit without stretching
- use `object-fit: contain`

### Social Media

Folder:

```text
assets/images/social-media/
```

Files:

```text
Artboard 1_1.png
Artboard 5.png
christmas.jpg
Diwali-Wishings.png
ILT-Workshop-carousel.jpg
New-Year.jpg
```

Current behavior:

- each social creative is shown as its own stacked campaign unit
- each unit uses carousel-style mockup controls
- arrows and dots are available
- mobile swipe support was added in `js/app.js`

## Identity System Page

File:

```text
pages/identity-system.html
```

Current status:

This page exists but still needs future design refinement.

Purpose:

Branding / campaign identity system showcase.

Future work:

- improve layout
- add richer branding mockups
- add visual identity pieces
- add logo/color/type usage if assets are available

## Portal Dashboard Page

File:

```text
pages/portal-dashboard.html
```

Current status:

Exists as a project detail page.

Future work:

- refine content
- improve dashboard mockup storytelling
- connect to relevant project cards if needed

## Responsive Landing Page

File:

```text
pages/responsive-landing.html
```

Current status:

Exists as a project detail page.

Note:

Earlier, the user wanted case studies moved out of the Projects page. This page may no longer be a priority or may be replaced/refined later.

## Services Page

File:

```text
pages/services.html
```

Purpose:

Lists available service categories.

Expected service themes:

- UI/UX Design
- Frontend Development
- Learning Platforms
- Branding
- Interactive Widgets

## Contact Page

File:

```text
pages/contact.html
```

Purpose:

Contact and availability page.

Current features:

- availability status
- email
- LinkedIn
- social links
- contact form

Form action:

```html
https://formsubmit.co/
```

Important:

The form currently uses placeholder email values and should be updated before final launch.

Update:

```html
hello@example.com
```

to the actual email address.

## Assets

## Icon Assets

Folder:

```text
assets/icons/
```

Files:

```text
photoshop.svg
illustrator.svg
branding.svg
campaign.svg
figma.svg
uiux.svg
motion.svg
html.svg
css.svg
javascript.svg
```

Used for:

- Home skills
- About tools
- future Skillset Journey cards

## Main Image Assets

Folder:

```text
assets/images/
```

Important files:

```text
hero-image.jpg
about-preview.jpg
project-learning.jpg
project-frontend.jpg
project-branding.jpg
project-campaign.jpg
project-dashboard.jpg
case-study-hero.jpg
case-study-screen-1.jpg
case-study-screen-2.jpg
```

Portal/case study assets:

```text
IHCL-portal.jpg
Gulf-oil-portal.jpg
Tata-steel-Old.jpg
Tata-steel-New.jpg
Sudarshan-Portal-Old.jpg
Sudarshan-Portal-New.jpg
Manyavar-portal.jpg
Tata-steel-logo.jpg
Sudarshan-logo.jpg
vedant-fashions-logo.jpg
```

## Navigation

All main pages use:

```text
Home
About
Projects
Case Studies
Services
Contact
```

Desktop navigation:

- visible as horizontal links
- active page underline

Mobile navigation:

- hamburger menu
- fullscreen menu
- active link states
- closes when link is clicked

Main JavaScript file:

```text
js/navbar.js
```

## Responsive Behavior

Responsive breakpoints:

```css
992px
768px
576px
420px
```

Important mobile behavior:

- hamburger replaces desktop nav
- grids stack into one column
- project filters scroll horizontally
- hero layout stacks
- portal and widget mockups scale down
- social media carousel stacks vertically
- hover transforms are disabled/reduced on touch devices
- parallax is disabled on mobile for smoother scroll

## Animation Behavior

Animation files:

```text
css/animations.css
js/animations.js
```

Current animation system:

- hero items fade up quickly
- sections reveal on scroll
- cards reveal with stagger delay
- hover lift effects after reveal
- desktop parallax for selected visuals
- reduced motion support
- mobile animation triggers earlier to avoid blank sections

Important note:

Mobile animations should remain subtle. Heavy transforms/parallax can feel choppy on phones.

## Known Recent Fixes

The following issues were addressed during recent iterations:

- mobile navbar smoothness
- mobile parallax choppiness
- social media carousel swipe support
- flyer section reveal behavior
- direct widget demo mobile responsiveness
- desktop hero image restored to `object-fit: cover`
- mobile hero portrait uses contained behavior
- About Preview image uses contained behavior on mobile

## Current Known Pending Work

These items are not fully completed yet:

1. Skillset Journey section
   - Add compact preview on Home
   - Add full version on About
   - See `SKILLSET_JOURNEY_IMPLEMENTATION_BRIEF.md`

2. Identity System page
   - Needs better content and visual presentation

3. Print / Digital project page
   - Still needs design/content direction

4. Contact page
   - Needs final real email address
   - Can be visually refined later

5. Final mobile QA
   - Needs real-device testing after GitHub Pages deployment

## Skillset Journey Planned Addition

The user wants a new section based on an older Figma design called:

```text
Skillset Journey
```

Reason:

Recruiters often view portfolios on phones. They may not open the hamburger menu, so skills and experience should appear early on Home.

Recommended implementation:

### Home

Add after About Preview and before Featured Work:

```text
Skillset Journey Preview
```

Suggested cards:

1. Graphic Design Foundation
2. UI + Portal Design
3. Frontend Experience

Add CTA:

```text
View Full Journey
```

Link:

```text
./pages/about.html#skillset-journey
```

### About

Add full section:

```html
<section id="skillset-journey">
```

Should include:

- experience timeline
- skill group cards
- design tools first
- UI/UX second
- frontend third
- learning platforms as specialty

Full brief:

```text
SKILLSET_JOURNEY_IMPLEMENTATION_BRIEF.md
```

## GitHub Pages Deployment Guide

Recommended deployment method:

```text
GitHub Pages
```

Steps:

1. Create GitHub account
2. Create repository, for example:

```text
portfolio-2026
```

3. Upload contents of:

```text
D:\swapnil\Portfolio 2026
```

Important:

Upload the contents inside the folder, not the folder itself.

Correct root should show:

```text
index.html
css/
js/
assets/
pages/
```

4. Go to repository settings
5. Open Pages
6. Choose:

```text
Source: Deploy from branch
Branch: main
Folder: /root
```

7. Save
8. Wait 1-3 minutes
9. Open the generated GitHub Pages link

## Updating the Live Site

After local changes:

1. Upload changed files to GitHub
2. Wait for GitHub Pages to rebuild
3. Hard refresh browser

Mobile hard refresh may require:

- closing browser tab
- clearing site cache
- reopening the URL

## Important Upload Notes

When updating GitHub Pages, upload all changed files.

For recent responsive/animation/widget fixes, important files include:

```text
css/style.css
css/responsive.css
css/animations.css
js/app.js
js/animations.js
pages/widgets/5-widget/index.html
pages/widgets/6-cards/index.html
pages/widgets/Slider/index.html
```

If adding Skillset Journey, upload:

```text
index.html
pages/about.html
css/style.css
css/responsive.css
css/animations.css
```

## Testing Checklist

Before sharing with HR/recruiters:

### Desktop

- Home hero image looks correct
- navbar active states work
- project cards hover smoothly
- case study page links work
- learning portal mockups scroll inside laptop frames
- widget mockups load
- flyers display
- social carousel arrows/dots work
- contact form layout looks correct

### Mobile

- hamburger opens smoothly
- hamburger links work
- Home hero does not crop awkwardly
- About Preview image is not badly cropped
- no blank gaps before project sections
- project grid stacks cleanly
- filters are horizontally scrollable
- flyers load
- social carousel supports finger swipe
- widget demo pages are mobile-friendly
- footer links wrap cleanly

### Links

Check these:

```text
index.html
pages/about.html
pages/projects.html
pages/case-studies.html
pages/learning-portal.html
pages/interactive-widgets.html
pages/launch-campaign.html
pages/contact.html
```

## Recommended Final Portfolio Flow

Ideal final Home page flow:

```text
Hero
About Preview
Skillset Journey Preview
Featured Work
Skills / Tools
Contact CTA
Footer
```

Ideal About page flow:

```text
Hero
Introduction
Skillset Journey
Workflow / Philosophy
Tools
Footer
```

Ideal Projects flow:

```text
Project intro
Filter buttons
Project cards
Footer
```

Ideal Case Studies flow:

```text
Case studies intro
Client logo cards
Individual case study links
Footer
```

## Content Positioning Notes

Use language that frames the owner as:

```text
Creative Designer + Frontend Experience Builder
```

Good phrases:

- design-first frontend experiences
- learning portal UI
- campaign identity systems
- interactive widgets
- responsive interface design
- visual hierarchy
- frontend craft
- recruiter-ready portfolio
- premium digital experiences

Avoid over-positioning as only:

```text
Graphic Designer
```

## Final Notes For Future Agent

This project has been heavily iterated through visual feedback. Do not redesign the whole site unless the user explicitly asks.

When making changes:

- keep edits scoped
- preserve current visual identity
- test mobile behavior
- avoid introducing heavy libraries
- keep animations smooth and subtle
- avoid breaking desktop while fixing mobile
- preserve GitHub Pages compatibility

Most important current next task:

```text
Implement Skillset Journey on Home and About.
```

Use:

```text
SKILLSET_JOURNEY_IMPLEMENTATION_BRIEF.md
```

as the implementation guide.

