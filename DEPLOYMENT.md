# Deployment Guide

## 🚀 Quick Deploy

### Vercel (Recommended - 1 Click Deploy)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: HFT-KSA showcase"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hft-ksa-showcase.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy" (no configuration needed)
   - Done! ✅

**Your site will be live at**: `https://hft-ksa-showcase.vercel.app`

---

## 🌐 Alternative Deployment Options

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your site
npm run build

# Deploy
netlify deploy --prod
```

**Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Cloudflare Pages

1. Connect your GitHub repo to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. Deploy!

### AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

### Docker + Any VPS

**Dockerfile**:
```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
```

**Build & Run**:
```bash
docker build -t hft-ksa-showcase .
docker run -p 3000:3000 hft-ksa-showcase
```

---

## 🔧 Environment Variables

Currently, this project doesn't require environment variables. If you add features like:
- Contact form backend
- Analytics
- CMS integration

Create a `.env.local` file:

```bash
# Example (not needed for current version)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## ⚡ Pre-Deployment Checklist

### Code Quality
- [ ] Run `npm run lint` (no errors)
- [ ] Run `npm run type-check` (no TypeScript errors)
- [ ] Test all animations and interactions
- [ ] Verify light/dark theme toggle works
- [ ] Test on mobile devices

### Performance
- [ ] Run Lighthouse audit (score > 90)
- [ ] Check bundle size (`npm run build`)
- [ ] Optimize images (if you add custom images)
- [ ] Enable production mode optimizations

### SEO & Meta
- [ ] Update metadata in `src/app/layout.tsx`
- [ ] Add `robots.txt` (optional)
- [ ] Add `sitemap.xml` (optional)
- [ ] Set up Open Graph images (optional)

### Accessibility
- [ ] Test keyboard navigation
- [ ] Verify focus styles are visible
- [ ] Check color contrast
- [ ] Test with screen reader

---

## 🎯 Post-Deployment Steps

### 1. Verify Live Site
- [ ] Check homepage loads correctly
- [ ] Test all navigation links
- [ ] Verify animations work
- [ ] Test theme toggle
- [ ] Check contact form submission

### 2. Performance Testing
```bash
# Use Lighthouse CLI
npm install -g lighthouse

lighthouse https://your-site.vercel.app --view
```

**Target Scores**:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

### 3. Browser Testing
Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 4. Analytics Setup (Optional)

**Google Analytics**:
```typescript
// src/app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## 🔒 Security Best Practices

### Headers Configuration

**For Vercel** (`vercel.json`):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### HTTPS Only
- All modern platforms (Vercel, Netlify, etc.) provide HTTPS by default
- Ensure all external resources use HTTPS URLs

---

## 📊 Monitoring

### Error Tracking (Optional)

**Sentry Integration**:
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com) (Free)
- [Pingdom](https://www.pingdom.com)
- [StatusCake](https://www.statuscake.com)

---

## 🔄 Continuous Deployment

Vercel/Netlify automatically deploy on:
- Every push to `main` branch
- Pull requests (preview deployments)

### GitHub Actions (Custom CI/CD)

`.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      # Add deployment step here
```

---

## 🌍 Custom Domain

### Vercel
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as shown

**DNS Configuration**:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### SSL Certificate
- Automatically provided by Vercel/Netlify
- Renews automatically

---

## 📈 Performance Optimization

### Image Optimization
If you add custom images, use Next.js Image component:
```typescript
import Image from 'next/image'

<Image
  src="/hero-image.jpg"
  alt="Description"
  width={1440}
  height={900}
  priority
/>
```

### Code Splitting
Already handled by Next.js - no action needed.

### Caching Strategy
Vercel automatically configures optimal caching:
- Static assets: Cache forever
- Pages: Revalidate on demand
- API routes: No cache by default

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Environment Issues
- Check Node.js version (need 18+)
- Verify all dependencies installed
- Check for TypeScript errors

### Performance Issues
- Enable Next.js production mode
- Minimize bundle size
- Optimize images
- Use CDN for static assets

---

## 📞 Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [netlify.com/support](https://www.netlify.com/support/)
- GitHub: Check repository Issues tab

---

## ✅ Deployment Success Checklist

After deployment, verify:
- [x] Site loads in < 3 seconds
- [x] All links work correctly
- [x] Animations play smoothly
- [x] Theme toggle persists
- [x] Mobile responsive
- [x] Forms submit correctly
- [x] No console errors
- [x] Lighthouse score > 90

**You're live! 🎉**

Share your link:
- Portfolio: [your-site.com]
- Fiverr gallery
- LinkedIn
- Twitter
- Instagram

---

**Need help? Check QUICK_START.md or README.md for more details.**