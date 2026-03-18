# 📸 How to Add Project Images

Your portfolio is now ready to display project screenshots! Here's how to add them:

## 📁 Step 1: Add Images to Public Folder

1. Take screenshots of each project
2. Save them as PNG or JPG
3. Place them in the `public` folder with these names:

```
public/
├── project1.jpg  (Sweet Celebrations Bakery)
├── project2.jpg  (Grilli - Restaurant Website)
├── project3.jpg  (Furniture E-Commerce Store)
├── project4.jpg  (Drakex University Website)
├── project5.jpg  (Scientific Calculator)
└── project6.jpg  (Countdown Timer)
```

## 🖼️ Step 2: Update Portfolio Data

The images are already configured in `src/data/portfolio.js`:

```js
{
  id: 1,
  title: "Sweet Celebrations Bakery",
  image: "/project1.jpg",  // This path is already set!
  // ... rest of project data
}
```

## 📸 Step 3: Take Good Screenshots

### Tips for Great Project Screenshots:

1. **Full Page View**
   - Capture the entire website
   - Show the hero/landing section
   - Include navigation and key features

2. **Desktop Resolution**
   - Use 1920x1080 or similar
   - Ensure text is readable
   - Show the design clearly

3. **Optimize Images**
   - Compress before uploading
   - Use tools like TinyPNG or ImageOptim
   - Keep file size under 500KB each

4. **Consistent Style**
   - Use similar framing for all projects
   - Show the best features
   - Include UI elements

## 🎯 File Naming

```
project1.jpg  → Sweet Celebrations Bakery
project2.jpg  → Grilli - Restaurant Website
project3.jpg  → Furniture E-Commerce Store
project4.jpg  → Drakex University Website
project5.jpg  → Scientific Calculator
project6.jpg  → Countdown Timer
```

## ✅ How It Works

Once you add images:

1. Images will display on the Projects page
2. Hover effects will zoom the image
3. Scan line animation plays over images
4. Fallback emoji shows if image is missing

## 🚀 Deploy with Images

```bash
# 1. Add images to public folder
# 2. Commit changes
git add public/
git commit -m "Add project screenshots"

# 3. Push to GitHub
git push

# 4. Vercel auto-deploys with images!
```

## 💡 Pro Tips

- **Screenshot Tools**: Use Snagit, Lightshot, or built-in tools
- **Editing**: Use Figma or Photoshop to add borders/effects
- **Consistency**: Use same dimensions for all images
- **Quality**: Higher resolution = better quality

## 🎨 Image Dimensions

Recommended: **1200 x 800px** or **1600 x 900px**

This ensures:
- ✅ Good quality on all devices
- ✅ Fast loading
- ✅ Professional appearance
- ✅ Proper aspect ratio

## 📝 Example Structure

```
your-portfolio/
├── public/
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   ├── project5.jpg
│   ├── project6.jpg
│   └── robots.txt
├── src/
│   └── ...
└── ...
```

## 🔄 Update Images Later

You can update images anytime:

1. Replace the image file in `public/`
2. Commit and push
3. Vercel auto-deploys the new image

## ✨ What Happens

**Before adding images:**
- Projects show emoji placeholders (⭐ or 🚀)
- Gradient background with scan line effect

**After adding images:**
- Real project screenshots display
- Hover zoom effect
- Scan line animation over images
- Professional portfolio look

---

## 🎯 Next Steps

1. ✅ Take screenshots of all 6 projects
2. ✅ Compress and optimize images
3. ✅ Save as project1.jpg through project6.jpg
4. ✅ Place in `public/` folder
5. ✅ Commit and push to GitHub
6. ✅ Vercel deploys automatically!

---

**Your portfolio will look AMAZING with project screenshots!** 📸✨
