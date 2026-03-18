# ⚡ Quick Reference Card

## 🚀 Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## 📄 Pages & Routes

| Page | Route | Opening Animation |
|------|-------|-------------------|
| Home | `/` | Gradient Wipe |
| About | `/about` | Expanding Circle |
| Tech Stack | `/tech` | Matrix Cascade |
| Projects | `/projects` | Curtain Reveal |
| Contact | `/contact` | Radar Pulse |

---

## 📁 Key Files

```
src/
├── pages/              # Individual pages
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── TechStackPage.jsx
│   ├── ProjectsPage.jsx
│   └── ContactPage.jsx
├── components/         # Reusable components
│   ├── Navbar.jsx
│   ├── PageTransition.jsx
│   └── ...
├── data/
│   └── portfolio.js    # YOUR DATA HERE!
└── App.jsx            # Router setup
```

---

## 🎨 Colors

```css
Red:   #ef4444
Blue:  #3b82f6
Green: #10b981
Dark:  #0a0a0a
```

---

## ✏️ Edit Your Info

**File**: `src/data/portfolio.js`

```js
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio",
  email: "your@email.com",
  github: "https://github.com/...",
  linkedin: "https://linkedin.com/...",
}
```

---

## 🎬 Animation Timing

| Animation | Duration |
|-----------|----------|
| Page Opening | 1-2s |
| Content Entrance | 0.5-1s |
| Hover Effects | 0.3s |
| Page Transition | 0.5s |

---

## 🐛 Quick Fixes

### Port in use?
```bash
npm run dev -- --port 3000
```

### Dependencies issue?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails?
```bash
npm run build
```

---

## 🚀 Deploy

### Vercel (Easiest)
1. Push to GitHub
2. Import on vercel.com
3. Deploy

### Netlify
1. `npm run build`
2. Upload `dist` folder

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| START_HERE.md | Start here! |
| QUICKSTART.md | 2-min setup |
| MULTI_PAGE_GUIDE.md | Multi-page features |
| ANIMATION_REFERENCE.md | Animation details |
| INSTALL.md | Installation help |
| DEPLOYMENT.md | Deploy guide |
| WHATS_NEW.md | What changed |

---

## 🎯 Customization

### Change Colors
**File**: `tailwind.config.js`

### Add Page
1. Create `src/pages/NewPage.jsx`
2. Add route in `App.jsx`
3. Add nav item in `Navbar.jsx`

### Modify Animation
Edit the page file in `src/pages/`

---

## 💡 Pro Tips

- Test on mobile
- Check all pages
- Update LinkedIn URL
- Add more projects
- Deploy early
- Share everywhere

---

## 🆘 Need Help?

1. Check documentation files
2. Read error messages
3. Check browser console
4. Verify all files exist
5. Reinstall dependencies

---

## ✅ Pre-Launch Checklist

- [ ] `npm install` completed
- [ ] `npm run dev` works
- [ ] All pages load
- [ ] Animations smooth
- [ ] Info updated
- [ ] Mobile tested
- [ ] Ready to deploy!

---

**Keep this handy!** 📌
