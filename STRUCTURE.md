# Landing Page Structure

## 📐 Page Layout (Screenshot View)

```
┌─────────────────────────────────────────────────────────────┐
│  🎯 FLOATING NAVBAR (pill-shaped, glass effect)           │
│     [HFT-KSA] [Home] [Services ▼] [Portfolio ▼] [About]   │
│                          [Contact] [🌙] [Get Started]      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  🦸 HERO SECTION                                             │
│  ┌────────────────────┐  ┌────────────────────┐            │
│  │                    │  │                    │            │
│  │  "We build         │  │   [3D PLACEHOLDER] │            │
│  │   high performing  │  │    Animated        │            │
│  │   websites for you"│  │    Gradient        │            │
│  │                    │  │    + Grid          │            │
│  │  [Get Started]     │  │                    │            │
│  │  [View Portfolio]  │  │    Coming Soon     │            │
│  │                    │  │                    │            │
│  │  150+ | 98% | 5+   │  └────────────────────┘            │
│  └────────────────────┘                                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ✨ FEATURES / SERVICES (visible in screenshot)             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│  │ 💻       │  │ 🖥️       │  │ 📱       │                 │
│  │ Front-end│  │ Back-end │  │Responsive│                 │
│  │ Dev      │  │ Dev      │  │ Design   │                 │
│  └──────────┘  └──────────┘  └──────────┘                 │
└─────────────────────────────────────────────────────────────┘

... (scroll down for more sections)
```

---

## 🎨 Component Breakdown

### 1. Navbar (Floating)
- **Position**: Fixed top, centered, 95% width
- **Style**: Pill-shaped (`border-radius: 9999px`), glass effect
- **Features**:
  - Auto-hover dropdowns (Services, Portfolio)
  - Theme toggle (sun/moon icon)
  - Mobile hamburger menu
  - Smooth scroll to sections

### 2. Hero Section
- **Layout**: Two-column (text left, 3D placeholder right)
- **Key Elements**:
  - Headline with "high performing" in Aladin font (mint color)
  - Subheadline describing HFT-KSA
  - Two CTA buttons (primary + secondary)
  - Three stats at bottom (150+, 98%, 5+)
- **Animations**:
  - Stagger entrance from left
  - Floating 3D placeholder
  - Pulsing background orbs

### 3. Features Section
- **Layout**: 3-column grid (responsive to 1-column on mobile)
- **Cards**:
  - 6 feature cards with icons
  - Tilt effect on hover (pointer-based parallax)
  - Gradient icons
  - Hover underline animation
  - Subtle glitch effect
- **Background**: Light gray (`--color-off-white`)

### 4. How It Works Timeline
- **Layout**: Vertical timeline with alternating cards
- **Steps**: 4 steps (Consultation → Design → Build → Deliver)
- **Animations**:
  - GSAP ScrollTrigger reveals
  - Animated timeline line
  - Pulsing dots at each step
- **Icons**: MessageSquare, Palette, Code2, Rocket

### 5. About Section
- **Layout**: Two-column (text left, visual right)
- **Key Elements**:
  - Mission statement
  - Animated visual with rotating circles
  - 4 stat cards below (Happy Clients, Success Rate, etc.)
  - GSAP counter animation for stats
- **Background**: White

### 6. Testimonials Carousel
- **Layout**: Centered carousel with navigation
- **Features**:
  - 4 testimonials with avatars
  - Drag-to-swipe (Framer Motion)
  - Auto-advance with indicators
  - 5-star ratings
- **Background**: Light gray

### 7. CTA Section
- **Layout**: Full-width, centered content
- **Style**: Dark background with gradient orbs
- **Elements**:
  - Large headline
  - Two CTA buttons
  - Trust indicators (tech stack)
- **Colors**: Charcoal background, mint accents

### 8. Contact Form
- **Layout**: Two-column (info left, form right)
- **Form Fields**:
  - Name, Email, Subject, Message
  - Focus ring animations (mint color)
  - Success message on submit
- **Contact Info**:
  - Email, Phone, Location cards
  - Icons with gradient backgrounds

### 9. Footer
- **Layout**: Multi-column grid
- **Sections**:
  - Brand + social links
  - Services links
  - Company links
  - Resources links
- **Bottom Bar**: Copyright + legal links

---

## 🎬 Animation Timing

### Page Load
```
0.0s - Navbar fades in
0.1s - Hero badge appears
0.2s - Hero headline reveals
0.3s - Hero subheadline
0.4s - Hero buttons
0.5s - Hero stats
0.6s - 3D placeholder floats in
```

### Scroll Reveals
```
Each section:
  - Triggers at 80% viewport
  - Fades in with upward motion
  - 0.6s duration
  - Stagger children by 0.1s
```

### Hover Effects
```
Cards: 0.3s scale + translateY
Buttons: 0.2s scale
Links: 0.15s color change
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Desktops */
xl:  1280px  /* Large desktops */
2xl: 1536px  /* Extra large screens */
```

### Layout Changes
- **< 768px**: Single column, hamburger menu, smaller text
- **768px - 1024px**: Two columns where appropriate
- **> 1024px**: Full three-column layout, all features visible

---

## 🎯 Screenshot Composition

### Ideal Screenshot (1440×900)
```
┌─────────────────────────────┐
│      NAVBAR (floating)      │ ← 10% of height
├─────────────────────────────┤
│                             │
│      HERO SECTION           │ ← 70% of height
│   (full headline + CTA)     │
│                             │
├─────────────────────────────┤
│   FEATURES (top 3 cards)    │ ← 20% of height
└─────────────────────────────┘
```

This composition shows:
✅ Brand identity (navbar)
✅ Value proposition (hero)
✅ Service offerings (features peek)
✅ Design quality (animations, colors)

---

## 🔍 Visual Hierarchy

### Typography Scale
```
Hero Headline:    clamp(3rem, 8vw, 7.5rem)    ~ 120px
Section Headline: clamp(2rem, 5vw, 4.5rem)    ~ 72px
Subheadline:      clamp(1.25rem, 3vw, 2rem)   ~ 32px
Body:             1.125rem                     ~ 18px
Label:            0.875rem                     ~ 14px
```

### Color Hierarchy
```
Primary Action:   Mint (#7FFFD4)     - CTAs, accents
Background:       Off-White (#F5F5F5) - sections
Text:             Charcoal (#2B2B2B)  - body
Secondary:        Navy (#1A2B4A)      - cards, depth
```

### Spacing Scale
```
Section Padding:  py-24 lg:py-32     ~ 96-128px
Container Gap:    gap-8               ~ 32px
Card Padding:     p-8                 ~ 32px
Element Gap:       gap-4               ~ 16px
```

---

## 🎨 Design System Reference

### Shadows
```css
sm:  0 1px 2px rgba(0,0,0,0.05)
md:  0 4px 6px rgba(0,0,0,0.1)
lg:  0 10px 15px rgba(0,0,0,0.1)  ← Cards
xl:  0 20px 25px rgba(0,0,0,0.1)  ← Dropdowns
2xl: 0 25px 50px rgba(0,0,0,0.25) ← Hero elements
```

### Border Radius
```css
sm:  0.375rem (6px)
md:  0.5rem   (8px)
lg:  0.75rem  (12px)   ← Default
xl:  1rem     (16px)
2xl: 1.5rem   (24px)   ← Large cards
full: 9999px           ← Pills, circles
```

### Transitions
```css
fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
base: 200ms cubic-bezier(0.4, 0, 0.2, 1)  ← Default
slow: 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

---

## 📊 Performance Targets

- **First Contentful Paint**: < 1.0s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Bundle Size**: < 200KB (gzipped)

---

## ✅ Accessibility Checklist

- [x] Semantic HTML5 elements
- [x] ARIA labels for interactive elements
- [x] Keyboard navigation (Tab, Enter, Space, Arrows)
- [x] Focus visible styles (mint ring)
- [x] Color contrast ≥ 4.5:1 (WCAG AA)
- [x] Alt text for images
- [x] Reduced motion support
- [x] Screen reader friendly

---

**This structure creates a cohesive, professional landing page ready for portfolio screenshots and client presentations.**