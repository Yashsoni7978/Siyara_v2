# SIYARA INNOVATIONS — WEBSITE DESIGN SYSTEM & PRODUCTION BUILD SPEC
### Master design reference for the new Siyara Digital Agency website

> **Purpose**
>
> This document is the source of truth for rebuilding the Siyara Innovations website from scratch.
> It combines the approved visual direction from the supplied screen references with the current Siyara positioning, services, UX goals, animation requirements, responsive behavior, and production constraints.
>
> **Primary goal:** build a premium digital agency website that feels designed by a high-end creative/web studio — not an AI template, SaaS dashboard, infrastructure consultancy, or generic marketing agency.

---

# 01. BRAND POSITIONING

## Brand

**SIYARA INNOVATIONS**

Primary public positioning:

**Premium Digital Agency / Digital Growth Partner**

Siyara provides integrated digital services including:

- Branding & Identity
- Web Design & Development
- SEO & GEO
- Digital Marketing & Growth
- AI & Automation
- Growth / Optimization Systems

The existing Siyara material positions the agency around strategy-first work, integrated services, GEO/AI visibility, and a six-phase methodology. Those ideas should remain part of the brand, but the homepage must communicate them visually and concisely rather than becoming text-heavy.

## Core brand statement

> **WE BUILD BRANDS.  
> THAT DOMINATE.**

Supporting positioning:

> **Strategy. Design. Technology.  
> Everything you need to grow online.**

Alternative supporting copy may be used only when it improves clarity.

## Philosophy

> **WE DON'T JUST BUILD WEBSITES.  
> WE BUILD DIGITAL GROWTH.**

The philosophy should feel like a brand belief, not a service description.

---

# 02. VISUAL DIRECTION

## Approved aesthetic

**Emerald × Black × Gold × Ivory**

The website must feel:

- Premium
- Editorial
- Digital
- Creative
- Modern
- Confident
- Agency-focused
- Visually sophisticated
- Human-designed
- Conversion-aware

It must NOT feel:

- Like a SaaS dashboard
- Like an infrastructure/enterprise consultancy
- Like a generic AI landing page
- Like a cryptocurrency website
- Like a gaming site
- Like a template marketplace
- Like a WebGL experiment
- Like a page filled with cards

---

# 03. COLOR SYSTEM

## Primary palette

### Obsidian Black
`#080B0A`

Use for:
- Hero background
- Dark sections
- Footer
- Deep overlays
- Image frames

### Deep Emerald
`#063C2D`

Use for:
- Large feature backgrounds
- Service section
- Interactive states
- Visual atmosphere
- Selected-work backgrounds

### Rich Emerald
`#0B5A43`

Use sparingly for:
- Active controls
- Accent surfaces
- Hover states
- Visual details

### Emerald Highlight
`#19A878`

Use very sparingly:
- Active indicators
- Micro interaction states
- Important UI feedback
- Small visual glows

### Champagne Gold
`#D4AF37`

Primary accent.

Use for:
- Key headline words
- Eyebrows
- Fine lines
- CTA accents
- Icons
- Active states
- Small decorative details

### Warm Gold
`#E5C378`

Use for:
- High-emphasis gold text
- Active CTA surfaces
- Selected states

### Ivory
`#F3EFE4`

Primary light text / light background.

Use for:
- Headlines
- Large backgrounds
- Selected-work light sections
- Philosophy light sections

### Muted Ivory
`#CFC9BB`

Use for:
- Supporting body text
- Descriptions
- Secondary content

### Structural Border
`rgba(212, 175, 55, 0.22)`

### Emerald Border
`rgba(25, 168, 120, 0.24)`

---

# 04. COLOR BALANCE

Do NOT make the entire website green.

Do NOT make the entire website black.

The intended rhythm is:

**BLACK / EMERALD / IVORY / BLACK / IVORY / BLACK / EMERALD**

with gold used consistently as the premium thread tying everything together.

Approximate overall balance:

- 45% Obsidian / Black
- 25% Ivory / light surfaces
- 20% Deep Emerald
- 10% Gold + micro accents

Gold should never become the dominant color.

Emerald should be clearly identifiable as a Siyara brand color, but it should not flood every section.

---

# 05. TYPOGRAPHY

## Display font

Preferred:

**Cormorant Garamond / Playfair Display**

Use for:
- Hero
- Major statements
- Philosophy
- Case-study titles
- Major section headings

Character:
- Elegant
- Editorial
- High contrast
- Premium
- Large
- Carefully spaced

## UI / body font

Preferred:

**Inter**

Use for:
- Navigation
- Buttons
- Labels
- Body text
- Metadata
- Services
- Technical details

## Micro typography

Use uppercase Inter with letter spacing.

Examples:

`SELECTED WORK`

`WHAT WE DO`

`WHY SIYARA`

`OUR PHILOSOPHY`

Recommended:
- `font-size: 10–13px`
- `letter-spacing: 0.16em – 0.24em`
- Medium/semibold weight

## Typography rule

Never use huge headings and huge paragraphs together.

One visual hierarchy at a time:

**Large headline → short supporting copy → action.**

---

# 06. LAYOUT SYSTEM

## Desktop

Target:
- 1440px primary reference
- 1280px secondary reference

Maximum content width:

`1320px`

Recommended side padding:

`48px – 72px`

## Grid

Use a flexible 12-column grid.

Avoid forcing every section into visible grid boxes.

The grid is an invisible structural system.

## Gutter

Desktop:

`24px – 32px`

Tablet:

`20px – 24px`

Mobile:

`16px – 20px`

## Section spacing

Desktop:

`96px – 160px`

Use section-specific rhythm rather than identical padding everywhere.

Avoid:
- giant blank gaps
- arbitrary 200vh/300vh containers
- scroll curtains
- unnecessary sticky spacers

---

# 07. VISUAL LANGUAGE

## Core principle

### Open compositions > card grids

Use:

- Large imagery
- Editorial typography
- Thin structural lines
- Asymmetric layouts
- Image overlays
- Curved image masks where appropriate
- Horizontal systems
- Connected timelines
- Large negative space

Avoid:

- Repeated rounded rectangular cards
- 14 service boxes
- repeated 3-column card grids
- dashboards
- excessive glassmorphism
- thick borders
- multiple shadows on every element

---

# 08. NAVIGATION

Desktop:

Logo:
**SIYARA**

Secondary:
`INNOVATIONS` or `DIGITAL AGENCY` depending on final brand lockup.

Navigation:

`WORK`
`SERVICES`
`ABOUT`
`PROCESS`
`INSIGHTS`
`CONTACT`

Primary CTA:

**START A PROJECT →**

### Navigation behavior

Initial:
- transparent
- overlays hero where appropriate

On scroll:
- subtle background tint
- slight blur
- fine border
- compact height reduction

Do NOT use:
- large floating pills
- oversized glass containers
- heavy shadows

Mobile:
- minimalist hamburger
- full-screen editorial menu
- large link typography
- CTA at bottom

---

# 09. HOMEPAGE INFORMATION ARCHITECTURE

The homepage has exactly **12 primary sections**:

## TOP SIX

### 01 — HERO
### 02 — SELECTED WORK
### 03 — WHAT WE DO
### 04 — WHY SIYARA
### 05 — OUR PHILOSOPHY
### 06 — THE PROBLEM

## END SIX

### 07 — HOW WE WORK
### 08 — RESULTS / PROOF
### 09 — INDUSTRIES
### 10 — INSIGHTS
### 11 — FINAL CTA
### 12 — FOOTER

The homepage should feel complete without trying to contain every detail from every service page.

---

# 10. SECTION 01 — HERO

## Purpose

Create immediate recognition:

**This is a premium digital agency that designs, builds and grows brands.**

## Layout

Asymmetric desktop split.

Left:
- eyebrow
- headline
- supporting copy
- two CTAs

Right:
- large website/device visual

## Headline

Primary:

> **WE BUILD  
> BRANDS.  
> THAT DOMINATE.**

The visual hierarchy must make:
**DOMINATE.**
the strongest word.

## Supporting copy

> Strategy. Design. Technology.  
> Everything you need to grow online.

## CTA

Primary:
**START A PROJECT →**

Secondary:
**VIEW OUR WORK →**

## Hero visual

Use a high-quality real website presentation:
- laptop
- optional mobile mockup
- project imagery
- premium lighting

The visual must communicate:
**website agency**

Not:
- 3D sculpture
- infrastructure
- abstract WebGL
- random AI art

## Hero background

Black / near-black.

Subtle emerald atmospheric texture.

Very subtle gold structural lines.

Optional:
- slow flowing SVG line
- tiny particles
- very restrained pointer response

No heavy canvas.

---

# 11. SECTION 02 — SELECTED WORK

## Purpose

Proof immediately after the hero.

## Layout

One dominant case study.

Left:
- project title
- service metadata
- short description
- CTA

Center/right:
- very large project visual

Right edge:
minimal project index

Example:

`01`
`02`
`03`
`04`

The selected project should occupy the majority of the section.

## IMPORTANT

Never use fictional project names or fabricated metrics.

Use only:
- real Siyara projects
- real screenshots
- real case-study results
- verified metrics

If a case study lacks verified results:
show the project visually without inventing performance numbers.

## Visual treatment

Allowed:
- subtle rounded/organic image mask
- edge highlights
- thin gold border only where necessary

No card-wall structure.

---

# 12. SECTION 03 — WHAT WE DO

## Purpose

Communicate the agency's capabilities quickly.

Headline:

> **End-to-end digital solutions that drive real growth.**

Six primary capabilities:

### 01
BRANDING

Strategy, Identity & Messaging

### 02
WEB DESIGN & DEVELOPMENT

Websites & Web Applications

### 03
SEO & GEO OPTIMIZATION

Search Visibility & AI Visibility

### 04
DIGITAL MARKETING & GROWTH

Paid Media, Social & Performance

### 05
AI & AUTOMATION

Intelligent Workflows & Business Automation

### 06
GROWTH SYSTEMS

Analytics, CRO & Optimization

## Visual system

Use:
- six nodes/icons
- one subtle flowing line connecting them

The line may animate slowly.

Icons should:
- be thin
- editorial
- monochrome/emerald/gold
- not look like app stickers

Do NOT place every service in a square.

---

# 13. SECTION 04 — WHY SIYARA

## Headline

> **We're more than an agency.  
> We're your growth partner.**

Four principles:

### STRATEGY FIRST
Every solution starts with research, insight and a clear strategy.

### ONE TEAM
Designers, developers, marketers and strategists under one roof.

### BUILT TO PERFORM
We build fast, secure and conversion-focused digital experiences.

### LONG-TERM GROWTH
We don't just launch. We optimize and grow with you.

## Layout

Deep black/emerald section.

Large editorial statement on left.

Four principles arranged horizontally.

Use fine vertical separators.

No boxed cards.

---

# 14. SECTION 05 — OUR PHILOSOPHY

Headline:

> **WE DON'T JUST  
> BUILD WEBSITES.  
> WE BUILD  
> DIGITAL GROWTH.**

Alternative approved phrasing:

> **WE DON'T JUST BUILD WEBSITES.  
> WE ARCHITECT GROWTH ENGINES.**

Choose ONE, not both.

## Right-side visual

High-end architectural image.

Preferred imagery:
- premium architecture
- dark stone
- emerald lighting
- sophisticated interior
- stairs / passage / spatial movement
- modern structure

The image should represent:
**movement / growth / elevation**

Avoid generic stock photos.

---

# 15. SECTION 06 — THE PROBLEM

## Purpose

Show client understanding.

Headline:

> **YOUR BUSINESS DOESN'T NEED ANOTHER WEBSITE.**

Second line:

> **IT NEEDS A DIGITAL SYSTEM THAT PERFORMS.**

Problems:

- Weak positioning
- Poor digital experience
- Low search visibility
- Disconnected marketing
- Manual operations
- No scalable growth system

## Interaction

Each problem can:
- highlight on hover
- reveal one concise consequence
- reveal one Siyara response

Do not create a giant accordion unless the content requires it.

---

# 16. SECTION 07 — HOW WE WORK

## Heading

> **Our proven 6-step process to success.**

Flow:

`01 DISCOVER`
→
`02 STRATEGIZE`
→
`03 DESIGN`
→
`04 DEVELOP`
→
`05 LAUNCH`
→
`06 GROW`

## Layout

Connected horizontal timeline on desktop.

Vertical timeline on mobile.

## Motion

When scrolling into view:
- line draws
- current node illuminates
- title fades upward
- details reveal

Only the active stage should be strongly emphasized.

---

# 17. SECTION 08 — RESULTS / PROOF

## Critical rule

Only use verified data.

No invented:
- percentages
- client retention
- traffic growth
- leads
- conversion rates

Possible display:

### RESULTS THAT MATTER

Real project results.

Use a mix of:
- verified metrics
- before/after screenshots
- rankings
- case-study outcomes
- launch timelines
- qualitative outcomes

## Design

If real metrics are available:
large numbers can be used.

If not:
use a large case-study visual and qualitative evidence.

Do not manufacture evidence just to fill a design.

---

# 18. SECTION 09 — INDUSTRIES

Do NOT create a wall of industry cards.

Use an editorial arrangement.

Example:

> Real Estate · Healthcare · Jewellery & Luxury · Hospitality · Education · E-Commerce · Professional Services · Events · More

Possible interaction:
hovering an industry:
- accent color
- subtle image preview
- underline
- cursor-following thumbnail

Each industry can link to a dedicated landing page.

---

# 19. SECTION 10 — INSIGHTS

## Purpose

Build authority.

Use 3 or 4 articles.

Example categories:
- SEO
- GEO / AI Search
- Branding
- Web conversion
- Digital marketing
- Business automation

Each article:
- category
- title
- date
- reading time
- image
- READ ARTICLE →

Do not create a 10-card blog grid.

---

# 20. SECTION 11 — FINAL CTA

Minimal.

Headline:

> **READY TO BUILD SOMETHING BETTER?**

Supporting line:

> Let's create a digital experience that drives real results.

Buttons:

**START A PROJECT →**

**SCHEDULE A CALL**

Large architectural visual or subtle emerald texture behind.

No excessive content.

---

# 21. SECTION 12 — FOOTER

Darkest section.

Left:
SIYARA logo

Description:

> We build digital experiences that drive growth, build brands and create lasting impact.

Columns:

### SERVICES
Web Design & Development
Branding & Identity
SEO & GEO
Digital Marketing
AI & Automation
Growth Systems

### COMPANY
About
Why Siyara
Our Process
Work
Careers
Contact

### RESOURCES
Insights
Case Studies
FAQs
Privacy
Terms

### CONTACT
Email
WhatsApp
Location

Only show verified contact details.

Bottom:
copyright
social links
legal

---

# 22. MOTION / ANIMATION SYSTEM

Animation quality is a major requirement.

The website should feel alive but not "animated for the sake of animation."

## Animation principles

Use:
- opacity
- translateY
- clip-path reveals
- line drawing
- text masking
- image parallax
- micro-hover movement
- cursor-responsive accents
- horizontal drift
- subtle scale
- progress line animation

Avoid:
- bouncing
- excessive spring
- spinning cards
- scroll-jacking
- heavy particle scenes
- giant WebGL scenes
- constant motion everywhere

---

# 23. HERO ENTRANCE ANIMATION

Sequence:

0ms:
background + hero image

100–300ms:
navigation

300–450ms:
eyebrow

400–700ms:
headline line 1

500–800ms:
headline line 2

650–900ms:
headline line 3

800–1050ms:
support copy

950–1200ms:
CTA

1.1–1.4s:
secondary decorative elements

Use:
`cubic-bezier(0.16, 1, 0.3, 1)`

Movement:
10–24px max.

Never delay LCP content unnecessarily.

---

# 24. SCROLL REVEAL SYSTEM

Each section should have a restrained entrance.

Pattern:

`opacity: 0 → 1`

and

`translateY: 18px → 0`

Duration:
`0.65s – 0.9s`

Stagger:
`60–100ms`

Use viewport-triggered animation.

Do not create a giant scroll animation framework.

---

# 25. TEXT MOVEMENT

Use text animation selectively.

Hero:
line-by-line reveal

Major section headings:
masked upward reveal

Large philosophy text:
word/line reveal

Project titles:
slight letter-spacing transition

Avoid animating every paragraph.

---

# 26. IMAGE MOTION

Allowed:
- subtle mouse parallax
- 2–6px movement
- 1.01–1.025 scale
- slow image drift

Device mockups:
- extremely subtle float
- 1–3px vertical movement
- optional 2–3deg perspective response

Do not make the laptop bounce.

---

# 27. MICRO-INTERACTIONS

Buttons:

Hover:
- subtle brightness
- arrow moves 4–6px
- gold line expands
- 150–300ms

Links:
- underline draw
- color transition

Service nodes:
- icon illuminates
- line segment highlights
- title shifts 2px

Project index:
- active line grows
- preview image changes with crossfade

Industry links:
- subtle emerald/gold highlight
- optional image reveal

---

# 28. CURSOR SYSTEM

Optional desktop enhancement.

Use native cursor as default.

A subtle custom accent may follow the cursor.

Rules:
- tiny
- low opacity
- no giant circles
- no trailing blob
- disabled on touch
- disabled for reduced motion

Do NOT allow cursor animation to become the identity.

---

# 29. RESPONSIVE DESIGN

## Desktop 1440

Full composition.

Hero:
50/50-ish split.

Selected work:
large image + editorial information.

## Tablet 1024 / 768

Reduce:
- headline size
- image scale
- horizontal spacing
- animation intensity

Preserve:
- editorial structure

## Mobile 430 / 390 / 360

Single column.

Order:

1. Navigation
2. Hero text
3. Hero visual
4. CTA
5. Selected work
6. Services
7. Why Siyara
8. Philosophy
9. Problem
10. Process
11. Results
12. Industries
13. Insights
14. CTA
15. Footer

No horizontal overflow.

No giant desktop artwork cropped badly.

---

# 30. IMAGE SYSTEM

Images will be created externally with:

- Canva
- Gemini
- other approved creative tools

## Image requirements

All imagery must follow:

### Brand palette
Black
Deep emerald
Gold
Ivory

### Subject matter

Preferred:
- luxury architecture
- premium hospitality
- jewellery
- modern interiors
- sophisticated business environments
- premium products
- real websites displayed on devices

Avoid:
- generic handshake stock
- random businessmen
- fake AI robots
- cliché office teams
- neon cityscapes
- futuristic cyberpunk

## Device mockups

Website screenshots should be exported separately.

Do not depend on AI-generated tiny text inside artwork.

Use actual HTML/device screens whenever possible.

---

# 31. CONTENT RULES

## NEVER INVENT

Do not invent:

- clients
- testimonials
- results
- percentages
- logos
- awards
- certifications
- locations
- employee counts
- revenue
- rankings

If content is missing:

Use:
- a real placeholder structure
- neutral label
- content slot
- temporary visual

Do not fabricate.

---

# 32. PAGE ARCHITECTURE BEYOND HOMEPAGE

Homepage is the front door.

Build these pages next:

## SERVICES
- Web Design & Development
- Branding & Identity
- SEO
- GEO / AI Search
- Digital Marketing
- AI Automation
- Growth / CRO

## WORK
Portfolio index

Individual case studies:
`/work/[slug]`

## INDUSTRIES
- Healthcare
- Real Estate
- Hospitality
- Jewellery & Luxury
- Education
- E-commerce
- etc.

## ABOUT
- About Siyara
- Founder
- Philosophy
- Team

## PROCESS
Detailed Siyara Method

## INSIGHTS
Article listing

Individual article pages:
`/insights/[slug]`

## CONTACT
Project enquiry + call booking

## FAQ

---

# 33. URL STRUCTURE

Recommended:

`/`

`/services`

`/services/web-design-development`

`/services/branding`

`/services/seo`

`/services/geo`

`/services/digital-marketing`

`/services/ai-automation`

`/services/growth`

`/work`

`/work/project-name`

`/industries`

`/industries/healthcare`

`/industries/real-estate`

`/industries/hospitality`

`/about`

`/process`

`/insights`

`/insights/article-name`

`/contact`

`/faq`

---

# 34. TECHNICAL BUILD DIRECTION

## Recommended foundation

Build from scratch.

Use a clean modern React-based application.

Recommended:
- React
- Tailwind / CSS
- reusable components
- SVG for lightweight decorative graphics
- Framer Motion or equivalent lightweight motion layer
- optimized images
- semantic HTML

Avoid introducing:
- Three.js unless an actual section needs it
- GSAP unless required
- Lenis unless necessary
- OGL
- multiple animation libraries

## Performance target

One visual system.

No duplicate hero canvases.

No hidden legacy hero systems.

No unnecessary background animations.

No scroll-spacer hacks.

---

# 35. COMPONENT ARCHITECTURE

Recommended structure:

```text
src/
  components/
    layout/
      Navigation
      Footer
      MobileMenu

    home/
      Hero
      SelectedWork
      Services
      WhySiyara
      Philosophy
      Problem
      Process
      Results
      Industries
      Insights
      FinalCTA

    work/
      ProjectCard
      ProjectIndex
      CaseStudyHero
      CaseStudyResults

    services/
      ServiceHero
      ServiceOverview
      ServiceProcess
      ServiceCTA

    shared/
      Button
      SectionLabel
      Reveal
      MagneticLink
      ImageReveal
      Divider
      ProjectPreview

  styles/
    globals
    tokens
    typography
```

Every major section should be independently editable.

---

# 36. LOVABLE BUILD STRATEGY

## Yes — Lovable is suitable for this project

Lovable currently supports describing UI in natural language, using screenshots as design references, visual editing, standard modern frontend code, GitHub synchronization, and production deployment. Its current platform documentation says projects can be built with standard React/Tailwind-based stacks and maintained in GitHub; current projects use a modern React framework while older React/Tailwind projects continue to work. citeturn181330search1turn181330search3

For this website, Lovable is a good choice because:

- You are starting from scratch.
- The design is primarily HTML/CSS/UI.
- The interactions are lightweight.
- Images can be supplied separately.
- You need fast visual iteration.
- The project can sync with GitHub.
- You can take over the code later if needed. citeturn181330search1turn181330search3

## Important

Do NOT give Lovable one enormous prompt asking it to build the entire website perfectly.

That is the fastest way to get:
- inconsistent spacing
- repeated cards
- generic UI
- incorrect typography
- animation conflicts
- unnecessary components

Instead, build in controlled phases.

---

# 37. LOVABLE PHASE PLAN

## PHASE 0 — FOUNDATION

Build:
- routing
- typography
- color system
- global spacing
- navigation
- footer
- responsive container
- button system
- animation primitives

Do not build all sections yet.

---

## PHASE 1 — TOP 5

Build exactly:

01 Hero
02 Selected Work
03 What We Do
04 Why Siyara
05 Philosophy

Use the supplied screenshots as visual references.

Stop and visually review.

---

## PHASE 2 — BOTTOM 7

Build:

06 Problem
07 Process
08 Results
09 Industries
10 Insights
11 Final CTA
12 Footer

Stop and review.

---

## PHASE 3 — MOTION

Add:
- entrance reveals
- text masks
- project image transitions
- service line animation
- process timeline animation
- micro interactions
- cursor enhancements

Do not change layout.

---

## PHASE 4 — RESPONSIVE

Explicitly inspect:
- 1440
- 1280
- 1024
- 768
- 430
- 390
- 360

Fix each breakpoint independently.

---

## PHASE 5 — CONTENT

Replace all temporary visual content with:
- real projects
- real screenshots
- real case studies
- real services
- verified metrics
- actual company information

---

## PHASE 6 — SEO / PERFORMANCE

Then implement:
- metadata
- canonical URLs
- Open Graph
- JSON-LD
- sitemap
- robots
- image optimization
- lazy loading
- alt text
- accessibility
- Core Web Vitals review

---

# 38. CREDIT-SAVING LOVABLE RULES

Because build credits matter, prompts should be surgical.

NEVER say:

> "Make the website more premium."

Say exactly:

> "Reduce hero headline width from 620px to 540px. Preserve all typography, colors, animation and image placement."

Use one substantial change per prompt.

After each change:
- visually inspect
- confirm
- continue

Do not let Lovable make 15 unrelated changes in one request.

---

# 39. MASTER LOVABLE DESIGN RULE

Paste this into the project's persistent knowledge / project instructions:

```text
SIYARA DESIGN AUTHORITY

This is a premium digital agency website.

Brand:
SIYARA INNOVATIONS

Visual identity:
BLACK + DEEP EMERALD + GOLD + IVORY

The website must feel:
editorial, premium, modern, confident, creative, digital and human-designed.

DO NOT make it:
AI-generic, SaaS-like, infrastructure-like, dashboard-like, cyberpunk, neon, glass-heavy, card-heavy or WebGL-dependent.

Core principle:
OPEN EDITORIAL COMPOSITIONS > CARD GRIDS

Use:
large typography
large imagery
fine dividers
asymmetry
strong whitespace
organic visual transitions
subtle motion
real website/device mockups
premium architectural imagery

Avoid:
repeated rounded cards
large card grids
excessive borders
fake metrics
fake testimonials
fictional clients
giant 3D hero objects
heavy particle fields
scroll-jacking
giant empty spacer sections

Animation:
restrained, smooth, sophisticated.
Use opacity, transform, clip-path, line drawing, subtle parallax and staggered reveals.

Performance:
Do not add unnecessary animation libraries.
Do not create multiple animation systems.
Do not create multiple hero pipelines.
Do not introduce WebGL unless explicitly requested.

Content:
Never invent client names, metrics, testimonials, awards or results.
Use real Siyara content only.
```

---

# 40. ACCEPTANCE CRITERIA

The site is ready for production when:

### Visual
- The supplied reference screenshots feel like one coherent design system.
- No section looks like a separate template.
- Black, emerald, gold and ivory are visibly balanced.
- There is no card-wall effect.
- Typography is consistent.
- Visual hierarchy is clear.

### UX
- Navigation is obvious.
- CTA is always discoverable.
- Case studies are easy to reach.
- Service pages are one click away.
- Mobile navigation is effortless.
- Interactive elements have obvious feedback.

### Motion
- Animations feel intentional.
- No jitter.
- No layout shifts.
- No excessive motion.
- Reduced-motion mode works.

### Performance
- No unnecessary WebGL.
- Optimized images.
- No oversized assets.
- No duplicate rendering systems.
- No scroll-spacer hacks.
- No excessive JavaScript animation loops.

### Content
- No fabricated claims.
- No placeholder content in production.
- Real case studies only.
- Real results only.

---

# 41. FINAL CREATIVE DIRECTION

The website should communicate this feeling in the first few seconds:

> **"These people understand branding, design and technology — and their work looks expensive."**

Not:

> "This website has a lot of effects."

The visual hierarchy should always be:

**BRAND → WORK → CAPABILITY → DIFFERENTIATION → BELIEF → PROOF → CONVERSION**

The website should be remembered for its:
- typography
- art direction
- case studies
- composition
- interactions
- confidence

—not for how many animations or cards it contains.

---

# 42. SOURCE REFERENCE SCREEN MAPPING

Supplied reference material:

### Screen 01
Hero / primary visual direction.

### Screen 02
Selected Work / project showcase direction.

### Screen 03
What We Do / services direction.

### Screen 04
Why Siyara + Philosophy direction.

### Screen 05
How We Work / Results / Industries / Insights / Final CTA / Footer direction.

These references should be treated as **visual direction**, not literal content. The actual Siyara website must use verified Siyara projects and data.

---

# 43. FINAL BUILD PRINCIPLE

Build the website **from scratch**.

Do not migrate the old hero system.

Do not reuse the old curtain.

Do not carry old CSS into the new site.

Do not keep unused dependencies just because they existed previously.

Start with a clean visual and component architecture.

The old site should not dictate the new site's implementation.

The new site should be judged only by the approved design system and the real business content.

---

# END OF DESIGN SPECIFICATION

**SIYARA INNOVATIONS**

**BLACK. EMERALD. GOLD. IVORY.**

**WE BUILD BRANDS. THAT DOMINATE.**
