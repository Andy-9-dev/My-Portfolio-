# 🚀 Installation Guide - Multi-Page Portfolio

## ⚡ Quick Install (2 Commands)

```bash
# 1. Install dependencies (includes React Router)
npm install

# 2. Start the dev server
npm run dev
```

**That's it!** Open `http://localhost:5173` 🎉

---

## 📦 What Gets Installed

### Core Dependencies
- `react` - UI library
- `react-dom` - React DOM renderer
- `react-router-dom` - **NEW!** Page routing
- `framer-motion` - Animations
- `react-icons` - Icons

### Dev Dependencies
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - CSS framework
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixes

---

## 🔄 If You Already Had the Old Version

If you had the single-page version installed:

```bash
# 1. Remove old dependencies
rm -rf node_modules package-lock.json

# 2. Install fresh (includes React Router)
npm install

# 3. Start dev server
npm run dev
```

---

## 🐛 Troubleshooting

### "Module not found: react-router-dom"
```bash
npm install react-router-dom
```

### "Port 5173 is already in use"
```bash
# Use a different port
npm run dev -- --port 3000
```

### "Command not found: npm"
Install Node.js from [nodejs.org](https://nodejs.org)

### Build fails
```bash
# Clear everything and reinstall
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Animations are laggy
- Close other browser tabs
- Check browser performance settings
- Reduce particle count in AnimatedBackground.jsx

---

## ✅ Verify Installation

After running `npm run dev`, you should see:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Open the URL and you should see:
1. ✅ Gradient wipe animation
2. ✅ Your name appearing
3. ✅ Navbar with 5 links
4. ✅ Particle background
5. ✅ Custom cursor (desktop)

---

## 🎯 Test Navigation

Click each navbar link to test:
- **Home** → Gradient wipe
- **About** → Expanding circle
- **Tech Stack** → Matrix cascade
- **Projects** → Curtain reveal
- **Contact** → Radar pulse

Each should have a unique opening animation! 🎬

---

## 📱 Test Responsiveness

1. Open browser dev tools (F12)
2. Toggle device toolbar
3. Test on different screen sizes:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1920px)

---

## 🚀 Next Steps

1. ✅ Installation complete
2. 📝 Update your info in `src/data/portfolio.js`
3. 🎨 Customize colors in `tailwind.config.js`
4. 🚀 Deploy to Vercel

---

## 📚 Documentation

- [QUICKSTART.md](QUICKSTART.md) - 2-minute setup
- [MULTI_PAGE_GUIDE.md](MULTI_PAGE_GUIDE.md) - Multi-page features
- [ANIMATION_REFERENCE.md](ANIMATION_REFERENCE.md) - Animation details
- [DEPLOYMENT.md](DEPLOYMENT.md) - How to deploy

---

## 💡 Pro Tips

1. **Keep dependencies updated**
   ```bash
   npm update
   ```

2. **Check for security issues**
   ```bash
   npm audit
   ```

3. **Clear cache if issues**
   ```bash
   npm cache clean --force
   ```

4. **Use exact Node version**
   - Recommended: Node 18 or higher
   - Check: `node --version`

---

## 🎉 You're Ready!

Your multi-page portfolio with cinematic animations is ready to go! 🚀

**Each page will blow visitors away with its unique entrance!** 🔥
