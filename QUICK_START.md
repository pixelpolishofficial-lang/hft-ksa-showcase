# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd hft-ksa-showcase
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📸 Screenshot Checklist

### Before Capturing
- [ ] Development server is running (`npm run dev`)
- [ ] Browser is in full-screen mode (F11)
- [ ] Bookmarks bar is hidden
- [ ] Console is closed (F12)
- [ ] Page has fully loaded (all animations complete)

### For Light Theme Screenshot
1. Open `http://localhost:3000`
2. Set browser viewport to 1440×900 (DevTools: `Ctrl+Shift+M`)
3. Scroll to top (ensure navbar + hero visible)
4. Capture screenshot (`Ctrl+Shift+S` on Windows, `Cmd+Shift+4` on Mac)
5. Save as `light-theme-1440x900.png`

### For Dark Theme Screenshot
1. Click the moon/sun icon in top-right navbar
2. Wait for theme transition (0.3s)
3. Capture screenshot
4. Save as `dark-theme-1440x900.png`

### Alternative: 1920×1080 (Full HD)
- Follow same steps but set viewport to 1920×1080
- Captures more of the page (shows Features section fully)

---

## ✨ Key Features to Highlight

When creating screenshots, make sure these are visible:

### Hero Section
- ✓ Large headline with "high performing" in Aladin font
- ✓ 3D placeholder with animated gradient
- ✓ Stats counter at bottom
- ✓ CTA buttons

### Navbar
- ✓ Floating pill design with glass effect
- ✓ Theme toggle (sun/moon icon)
- ✓ Logo (HFT-KSA)
- ✓ Hover over "Services" or "Portfolio" to show dropdown

### Animations (visible in recording/GIF)
- ✓ Card tilt effects (hover over feature cards)
- ✓ Button hover animations
- ✓ Smooth scroll reveals
- ✓ Timeline animations

---

## 🎨 Theme Toggle

The theme toggle is in the top-right corner of the navbar (sun/moon icon):
- **Sun icon** = Currently in light mode (click to switch to dark)
- **Moon icon** = Currently in dark mode (click to switch to light)

The toggle has a smooth animation and persists your preference in `localStorage`.

---

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
# Kill process using port 3000
npx kill-port 3000

# Or use alternative port
npm run dev -- -p 3001
```

### Dependencies not installing?
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Animations not working?
- Check if you have reduced motion enabled in OS settings
- The site respects `prefers-reduced-motion` for accessibility
- Animations will be simplified if this setting is enabled

### Theme toggle not working?
- Clear browser localStorage: `localStorage.clear()` in console
- Refresh the page
- Check if JavaScript is enabled

---

## 📦 What's Included

- ✅ Next.js 15 with App Router
- ✅ Framer Motion animations
- ✅ GSAP with ScrollTrigger
- ✅ shadcn/ui components
- ✅ Light/Dark theme system
- ✅ Responsive design (mobile-first)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Accessibility (WCAG AA)
- ✅ Performance optimized

---

## 🎯 Screenshot File Naming

For Fiverr/portfolio submissions, use this naming convention:

```
screenshots/
├── light-theme-1440x900.png     (Primary - hero + navbar)
├── dark-theme-1440x900.png      (Variant - same view)
├── light-theme-1920x1080.png    (Optional - more content)
├── dark-theme-1920x1080.png     (Optional - more content)
├── mobile-375x812.png           (Optional - mobile view)
└── features-showcase.gif        (Optional - animation demo)
```

---

## 💡 Pro Tips

1. **Best Screenshot Time**: Take screenshots during golden hour (warm monitor lighting) 😉
2. **Show Animations**: Create a GIF/video showing hover effects and scroll animations
3. **Multiple Views**: Capture hero, features, and timeline separately for portfolio variety
4. **Mobile Screenshots**: Also capture on mobile (375×812 for iPhone) 
5. **Before/After**: Show light vs dark theme in side-by-side comparison

---

## 📞 Need Help?

- Check main README.md for detailed documentation
- Review component files in `src/components/`
- Open an issue on GitHub
- Contact: hello@hft-ksa.com

---

**Happy Screenshot Taking! 📸**