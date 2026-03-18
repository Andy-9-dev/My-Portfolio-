# ⚡ Quick Start - Get Running in 2 Minutes!

## 🎯 The Fastest Way to See Your Portfolio

### Step 1: Install (30 seconds)
```bash
npm install
```

### Step 2: Run (5 seconds)
```bash
npm run dev
```

### Step 3: Open Browser
Go to: `http://localhost:5173`

**That's it! Your portfolio is running!** 🎉

---

## 🎨 Make It Yours (5 minutes)

### Open `src/data/portfolio.js` and update:

```js
export const personalInfo = {
  name: "Anderson Andrew",           // ✅ Already set
  title: "Frontend Developer",       // ✅ Already set
  bio: "...",                        // ✅ Already set
  email: "andybrulock@gmail.com",    // ✅ Already set
  github: "https://github.com/Andy-9-dev", // ✅ Already set
  linkedin: "",  // 👈 ADD YOUR LINKEDIN
  twitter: "",   // 👈 OPTIONAL
}
```

**Save the file** - the site updates automatically! ✨

---

## 🚀 Deploy (2 minutes)

### Easiest: Vercel

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repo
5. Click "Deploy"

**Done! Your portfolio is live!** 🌐

---

## 📝 Add Projects Later

When you finish a new project:

1. Open `src/data/portfolio.js`
2. Add to the `projects` array:
```js
{
  id: 4,
  title: "My Awesome Project",
  description: "What it does",
  tech: ["React", "Tailwind CSS"],
  liveUrl: "https://my-project.com",
  githubUrl: "https://github.com/...",
  featured: true,
}
```
3. Save - it updates automatically!

---

## 🎯 Key Files

- `src/data/portfolio.js` - Your info and projects
- `src/components/` - All the sections
- `tailwind.config.js` - Colors and styling
- `README.md` - Full documentation

---

## 💡 Pro Tips

1. **Keep it updated** - Add projects as you build them
2. **Test on mobile** - Most visitors use phones
3. **Share everywhere** - LinkedIn, Twitter, resume
4. **Get feedback** - Ask friends to review
5. **Keep learning** - Add new tech to your stack

---

## 🆘 Having Issues?

### Site won't start?
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port already in use?
```bash
npm run dev -- --port 3000
```

### Need more help?
- Check `README.md` for detailed docs
- Check `SETUP.md` for setup guide
- Check `DEPLOYMENT.md` for hosting help

---

## 🎉 You're All Set!

Your portfolio is:
- ✅ Modern and professional
- ✅ Fully responsive
- ✅ Smooth animations
- ✅ Easy to customize
- ✅ Ready to deploy

**Now go show it to the world!** 🚀

---

**Next Steps:**
1. ✅ Site is running
2. 📝 Update your info
3. 🚀 Deploy to Vercel
4. 📱 Share on social media
5. 💼 Add to job applications

**You got this!** 💪
