# HFT-KSA Portfolio Landing Page

A production-ready, screenshot-ready landing page built for a Fiverr gallery/portfolio. This showcase demonstrates modern web development with cutting-edge animations, responsive design, and an elegant UI/UX.

![HFT-KSA Banner](https://via.placeholder.com/1440x400/7FFFD4/2B2B2B?text=HFT-KSA+Portfolio)

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Advanced Animations**: Framer Motion & GSAP with ScrollTrigger
- **Component System**: shadcn/ui components with custom styling
- **Theme System**: Light/Dark mode with comprehensive CSS variables
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **Performance Optimized**: Sub-second load times, optimized animations
- **Responsive Design**: Mobile-first, looks perfect on all devices
- **Screenshot-Ready**: Optimized layouts for 1440×900 and 1920×1080

## 📦 Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS

### UI Components
- **shadcn/ui** - Accessible component system
- **Lucide React** - Icon library
- **Radix UI** - Headless UI primitives

### Animation Libraries
- **Framer Motion** - Component animations and transitions
- **GSAP** - Advanced scroll animations and timelines
- **ScrollTrigger** - Scroll-based animation triggers

### Styling & Fonts
- **Google Fonts** - Inter, Playfair Display, Aladin
- **Custom CSS Variables** - Comprehensive design system

## 🛠️ Installation

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Setup

1. **Clone the repository**
   ```bash
   cd hft-ksa-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📸 Creating Screenshots

### For Portfolio/Fiverr Submission

The site is optimized for screenshot capture at two resolutions:

#### Method 1: Browser DevTools (Recommended)

1. Open the site in Chrome/Edge
2. Press `F12` to open DevTools
3. Toggle device toolbar (`Ctrl+Shift+M`)
4. Set custom dimensions:
   - **Primary**: 1440 × 900 (recommended for hero + navbar)
   - **Secondary**: 1920 × 1080 (full page view)
5. Capture using browser screenshot tool or `Ctrl+Shift+S`

#### Method 2: Using Screenshot Tools

**Windows**: Use Windows Snipping Tool or Snip & Sketch
```bash
# Press Win + Shift + S
```

**macOS**: Use built-in screenshot
```bash
# Press Cmd + Shift + 4
```

#### Method 3: Automated (requires additional setup)

Install Playwright for automated screenshots:
```bash
npm install -D @playwright/test
```

Create a screenshot script in `scripts/screenshot.ts`:
```typescript
import { chromium } from '@playwright/test';

async function captureScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Light mode - 1440x900
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000');
  await page.screenshot({ 
    path: 'screenshots/light-theme-1440x900.png',
    fullPage: false 
  });
  
  // Dark mode - 1440x900
  await page.click('[aria-label*="dark"]'); // Click theme toggle
  await page.screenshot({ 
    path: 'screenshots/dark-theme-1440x900.png',
    fullPage: false 
  });
  
  await browser.close();
}

captureScreenshots();
```

Run: `npx ts-node scripts/screenshot.ts`

### Screenshot Best Practices

- **Light Theme**: Capture with default light theme for primary screenshot
- **Dark Theme**: Toggle dark mode (top-right button) for variant
- **Hero Focus**: Ensure navbar + hero + beginning of features are visible
- **Clean State**: Clear browser console, hide bookmarks bar
- **High Resolution**: Use 2x device pixel ratio for crisp screenshots

## 🎨 Theme Customization

The design system uses CSS variables defined in `src/app/globals.css`:

### Color Palette
```css
--color-mint: #7FFFD4       /* Primary accent */
--color-charcoal: #2B2B2B   /* Dark text/bg */
--color-navy: #1A2B4A       /* Secondary dark */
--color-off-white: #F5F5F5  /* Light bg */
```

### Typography
```css
--font-sans: Inter           /* Body text */
--font-display: Playfair     /* Italic accents */
--font-serif: Aladin         /* "high performing" accent */
```

To customize colors, edit the `:root` and `.dark` selectors in `globals.css`.

## 🧩 Component Structure

```
src/
├── app/
│   ├── globals.css          # Theme system & global styles
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page composition
├── components/
│   ├── Navbar.tsx           # Floating navbar with dropdowns
│   ├── Hero.tsx             # Hero with 3D placeholder
│   ├── Features.tsx         # Tilt card grid
│   ├── HowItWorks.tsx       # Timeline with GSAP
│   ├── About.tsx            # About with animated stats
│   ├── Testimonials.tsx     # Carousel with Framer Motion
│   ├── CTA.tsx              # Call-to-action band
│   ├── ContactForm.tsx      # Form with validation
│   ├── Footer.tsx           # Footer with links
│   ├── ThemeToggle.tsx      # Light/dark mode toggle
│   └── ui/
│       └── button.tsx       # shadcn/ui Button component
└── lib/
    ├── animations.ts        # Framer Motion & GSAP presets
    └── utils.ts             # Utility functions
```

## 🎬 Animation Details

### Framer Motion
- Component-level animations (hover, tap, page transitions)
- Tilt effects on cards using `useMotionValue` and `useTransform`
- Carousel with drag gestures
- Stagger animations for lists

### GSAP + ScrollTrigger
- Scroll-based reveals for sections
- Timeline animations with pinning
- Parallax effects
- Animated stat counters

### Performance Optimization
- Hardware-accelerated transforms (`translate`, `scale`, `rotate`)
- Throttled scroll/pointer handlers
- `will-change` for animated elements
- Reduced motion support (`prefers-reduced-motion`)

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the .next folder
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## ♿ Accessibility

- Semantic HTML5
- ARIA labels and roles
- Keyboard navigation (Tab, Enter, Space, Arrows)
- Focus visible styles
- Color contrast (WCAG AA)
- Screen reader friendly

## 📄 License

This is a showcase project demonstrating web development capabilities. Feel free to use as inspiration or template for your own projects.

## 🤝 Support

For questions or support, contact: hello@hft-ksa.com

## 🎯 Credits

- **Design & Development**: HFT-KSA
- **Icons**: Lucide React
- **Fonts**: Google Fonts
- **Animations**: Framer Motion, GSAP
- **UI Components**: shadcn/ui

---

**Built with ❤️ by HFT-KSA**

*This page itself demonstrates the quality of work we deliver to clients.*