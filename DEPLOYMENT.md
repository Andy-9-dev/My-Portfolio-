# 🚀 Deployment Guide

## Option 1: Vercel (Recommended - Easiest)

Vercel is perfect for React/Vite projects and offers automatic deployments.

### Steps:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"
7. Done! Your site is live

### Custom Domain:
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS instructions

---

## Option 2: Netlify

### Steps:
1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

### Continuous Deployment:
1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

---

## Option 3: GitHub Pages

### Steps:
1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "vite build && gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Go to repo Settings → Pages
   - Source: gh-pages branch
   - Save

---

## Option 4: Custom Server (VPS/Cloud)

### Build:
```bash
npm run build
```

### Upload `dist` folder to your server

### Nginx Configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Environment Variables

If you add environment variables later:

### Create `.env`:
```
VITE_API_URL=https://api.example.com
```

### Use in code:
```js
const apiUrl = import.meta.env.VITE_API_URL
```

### Add to deployment platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables

---

## Performance Tips

### Before Deployment:
1. Optimize images (use WebP format)
2. Test on mobile devices
3. Run Lighthouse audit
4. Check console for errors

### After Deployment:
1. Test all links
2. Verify contact form
3. Check loading speed
4. Test on different browsers

---

## SSL Certificate

All modern platforms (Vercel, Netlify) provide free SSL automatically.

For custom servers, use [Let's Encrypt](https://letsencrypt.org/).

---

## Monitoring

### Analytics (Optional):
- Google Analytics
- Vercel Analytics
- Plausible Analytics

### Performance:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

---

## Troubleshooting

### Build Fails:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### 404 on Refresh:
Make sure your hosting platform is configured for SPA routing.

### Slow Loading:
- Optimize images
- Enable compression
- Use CDN

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev/guide/

---

Good luck with your deployment! 🎉
