# Personal Portfolio — Design System

## Design Direction

Create a premium personal developer portfolio that feels modern, technical, confident, and highly intentional.

The visual direction is:

**Editorial developer portfolio + modern product design**

Use Vercel's design guidelines as a reference for polish, spacing, typography, accessibility, interaction states, and restraint — but do not copy Vercel's layout, branding, colors, or visual identity.

The website should feel like a real developer/product engineer's personal website, not a generic portfolio template.

---

## Core Principles

1. Content comes before decoration.
2. Strong typography creates the visual hierarchy.
3. Use whitespace generously.
4. Prefer subtle borders over heavy cards.
5. Use animation to communicate interaction, not decoration.
6. Avoid excessive gradients.
7. Avoid excessive glassmorphism.
8. Avoid excessive rounded cards.
9. Avoid unnecessary icons.
10. Every section should have a clear purpose.
11. Mobile experience is equally important.
12. Accessibility must be considered from the beginning.

---

## Overall Visual Style

* Clean
* Minimal
* Technical
* Editorial
* Premium
* Slightly experimental
* Developer-focused
* High information density without feeling crowded

The site should feel visually interesting without looking flashy.

---

## Color System

Use a neutral foundation.

### Light Mode

* Background: near-white / warm neutral
* Primary text: near-black
* Secondary text: muted gray
* Borders: subtle neutral gray
* Accent: one restrained personal accent color

### Dark Mode

* Background: near-black, not pure black everywhere
* Primary text: near-white
* Secondary text: muted gray
* Borders: subtle dark gray
* Accent: same personal accent family

Do not use multiple bright accent colors.

Do not make every technology logo its official brand color.

---

## Typography

Typography is one of the primary visual elements.

Use:

* One strong sans-serif family for primary UI/content
* Optional monospace font for technical metadata

Typography should have obvious hierarchy:

* Display heading
* Section heading
* Card heading
* Body
* Metadata
* Labels

Large hero typography should be confident but remain readable.

Avoid excessively huge text that dominates the entire viewport.

Use comfortable line lengths for paragraphs.

---

## Layout

Use a centered responsive container with generous horizontal spacing.

Desktop:

* Wide content area
* Strong alignment
* Large whitespace
* Asymmetric layouts where appropriate

Mobile:

* Single-column layout
* Reduced spacing
* No horizontal overflow
* Touch-friendly controls
* Preserve visual hierarchy

Use a consistent spacing scale throughout the site.

---

## Navigation

Desktop navigation should be minimal.

Suggested structure:

Name / Logo

Home
Projects
Blog
Contact

Right side:

Resume
Theme toggle

Navigation should remain visually lightweight.

On mobile, use a clean compact navigation menu.

The navigation may become sticky after scrolling, but it should not dominate the screen.

---

# Hero

The hero is the first impression.

Include:

* Name
* Short professional identity
* Concise description
* Current focus/status
* Primary CTA
* Secondary CTA
* Public profile links

Example information hierarchy:

> Hi, I'm Balaji.

> Computer Science Engineer building with Cloud, AI/ML & modern web technologies.

Then a short supporting description.

Use a subtle visual element such as:

* small status indicator
* grid
* technical metadata
* animated accent
* understated background texture

Do not use a generic developer illustration.

Do not use a giant floating 3D object unless it genuinely improves the design.

---

# Featured Projects

Projects are one of the most important sections.

Show exactly 3 featured projects on the homepage.

The first project may receive stronger visual emphasis than the other two.

Each project should communicate:

* Project name
* One-line purpose
* Short description
* Technologies
* Status
* GitHub
* Live demo when available

Use visually distinct layouts rather than three identical cards.

Project images/screenshots should have consistent proportions.

Avoid excessive shadows.

---

# Skills

Do not present skills as a giant collection of badges.

Organize them into meaningful categories.

Suggested categories:

* Languages
* Web Development
* Cloud & DevOps
* AI & ML
* Tools & Platforms

Use an interactive or editorial presentation.

Possible interaction:

Hovering/focusing a category reveals its technologies.

Technology names should remain readable without requiring interaction.

Avoid skill percentage bars.

Avoid fake proficiency percentages.

Avoid rating technologies from 1–10.

---

# Experience

Use a clean vertical timeline.

Each entry should contain:

* Role
* Organization
* Location/type when relevant
* Date range
* Short description
* Important responsibilities
* Technologies where useful

The structure must allow future experience entries to be added easily.

Do not exaggerate experience.

---

# Education

Display education in descending order:

1. Bachelor's degree
2. Diploma
3. School

Each entry should contain:

* Institution
* Degree/program
* Field
* Date range
* Relevant details when useful

Keep the visual treatment simpler than Projects.

---

# Highlights

Use a compact section for meaningful achievements.

Examples:

* Certifications
* Hackathons
* Cloud achievements
* Important programs
* Major milestones

Do not turn this into a long résumé section.

Only show genuinely useful highlights.

---

# Featured Blog

Show up to 3 featured posts.

Featured posts should be selected through structured content metadata.

Each post should show:

* Title
* Short description
* Date
* Reading time
* Tags

If there are no posts yet, display an intentional empty state.

Do not create fake blog content.

---

# Public Profiles

Create a visually clean collection of external profiles.

Possible profiles:

* GitHub
* LinkedIn
* LeetCode
* GeeksforGeeks
* Kaggle
* Credly
* Google Cloud Skills Boost
* Other relevant professional profiles

Each profile should contain:

* Platform
* Username/name
* Short context
* External link

Do not display unnecessary follower counts unless they can be kept accurate.

---

# Contact

The contact section should feel like a natural conclusion.

Example hierarchy:

> Have an idea or want to work together?

Then:

* Email
* Message form
* LinkedIn
* GitHub

The form should remain simple:

Name
Email
Message
Send Message

Do not create unnecessary form fields.

Include clear success and error states.

---

# Projects Page

Route:

`/projects`

Display all projects.

Provide optional filtering only when the number of projects justifies it.

Possible filters:

* All
* AI/ML
* Cloud
* Web
* DevOps
* Other

Use the same project data source as the homepage.

Featured projects should be marked through metadata rather than duplicated manually.

---

# Blog Page

Route:

`/blog`

Display all published posts.

Use structured metadata:

* title
* description
* date
* updated date
* tags
* reading time
* featured
* draft

Featured posts should be shown on the homepage.

Do not display draft posts in production.

---

# Motion

Motion should be subtle.

Use:

* fade/slide reveals
* small hover translations
* border transitions
* underline animations
* subtle image scaling
* navigation transitions

Avoid:

* excessive parallax
* constant floating animations
* large page transitions
* distracting background animations
* animation on every element

Respect `prefers-reduced-motion`.

Animations should generally feel fast and responsive.

---

# Cards

Do not make everything a card.

Use cards primarily where grouping information is useful.

Preferred:

* subtle border
* restrained radius
* minimal shadow
* clear hover state

Avoid:

* huge shadows
* excessive rounded corners
* glassmorphism everywhere
* gradients inside every card

---

# Icons

Use icons only when they communicate something.

Prefer consistent iconography.

Do not use an icon where a text label would be clearer.

External profile icons may use recognizable platform marks.

---

# Images

Project screenshots should be high quality and consistent.

Use:

* screenshots
* product UI
* architecture diagrams
* meaningful project visuals

Avoid generic stock images.

The portfolio should primarily showcase the work itself.

---

# Accessibility

Requirements:

* semantic HTML
* keyboard navigation
* visible focus states
* accessible labels
* sufficient contrast
* reduced-motion support
* meaningful alt text
* buttons must be buttons
* links must be links
* form inputs must have labels

Do not rely on color alone to communicate information.

---

# Responsive Design

Design for:

* mobile
* tablet
* laptop
* large desktop

Do not simply shrink the desktop design.

Recompose sections when necessary.

---

# SEO

Every page should have:

* unique title
* unique description
* canonical URL
* Open Graph metadata
* Twitter/X metadata where appropriate
* appropriate heading hierarchy

Use:

`scsbalaji.tech`

as the canonical domain.

Add structured data where appropriate, especially:

* Person
* WebSite
* BlogPosting for blog articles

---

# Performance

Prioritize:

* minimal JavaScript
* optimized images
* lazy loading where appropriate
* minimal third-party scripts
* no unnecessary client-side frameworks
* fast initial rendering

Use Astro's strengths instead of turning the site into a client-heavy SPA.

---

# Content Architecture

Projects and blog posts should be data-driven.

Use Astro content collections for:

* Projects
* Blog posts

Project metadata should include:

* title
* description
* featured
* date
* category
* technologies
* image
* GitHub URL
* live URL
* status

Blog metadata should include:

* title
* description
* published date
* updated date
* featured
* tags
* reading time
* draft

This allows the homepage to automatically select featured content.

---

# Important Design Constraint

The final website must NOT look like:

* a generic developer portfolio template
* a résumé converted directly into HTML
* a dashboard
* a SaaS landing page
* a copy of Vercel
* a copy of another portfolio

It should feel like a distinct personal identity built around:

**Software Engineering + Cloud + AI/ML + DevOps**

The design should remain useful even as the portfolio grows over several years.
