# 🚀 Quick Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```
This creates an optimized build in the `dist` folder.

### 4. Preview Production Build
```bash
npm run preview
```

## 🎨 Customization Guide

### Update Your Information
Edit `src/data/portfolio.js`:
- Personal info (name, title, bio)
- Email and social links
- Tech stack
- Projects

### Add More Projects
When you complete new projects, simply add them to the `projects` array in `src/data/portfolio.js`:

```js
{
  id: 4,
  title: "My New Project",
  description: "Description here",
  tech: ["React", "Tailwind CSS"],
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/yourusername/project",
  featured: true,
}
```

### Change Colors
Modify `tailwind.config.js` to change the color scheme.

## 🌐 Deployment Options

### Vercel (Easiest)
1. Push to GitHub
2. Import on vercel.com
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to netlify.com

### GitHub Pages
1. Install: `npm install -D gh-pages`
2. Add script: `"deploy": "vite build && gh-pages -d dist"`
3. Run: `npm run deploy`

## 💡 Tips

- The animated background is optimized for performance
- All animations use Framer Motion for smooth 60fps
- The site is fully responsive - test on mobile!
- Custom cursor only shows on desktop (hidden on mobile)

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Build errors?**
Make sure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Notes

- Update project images by adding them to the `public` folder
- The contact form uses mailto - consider adding a backend for production
- LinkedIn and Twitter links are optional (leave empty if not needed)

---

Need help? Check the main README.md or reach out!
