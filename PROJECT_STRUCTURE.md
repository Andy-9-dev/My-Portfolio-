# 📁 Project Structure

```
anderson-portfolio/
│
├── 📄 index.html                 # Main HTML file
├── 📄 package.json               # Dependencies and scripts
├── 📄 vite.config.js            # Vite configuration
├── 📄 tailwind.config.js        # Tailwind CSS configuration
├── 📄 postcss.config.js         # PostCSS configuration
├── 📄 .gitignore                # Git ignore rules
│
├── 📚 Documentation/
│   ├── README.md                # Main documentation
│   ├── QUICKSTART.md            # 2-minute setup guide
│   ├── SETUP.md                 # Detailed setup instructions
│   ├── FEATURES.md              # All features explained
│   ├── DEPLOYMENT.md            # Deployment guide
│   ├── CHECKLIST.md             # Launch checklist
│   └── PROJECT_STRUCTURE.md     # This file
│
└── 📂 src/
    ├── 📄 main.jsx              # React entry point
    ├── 📄 App.jsx               # Main App component
    ├── 📄 index.css             # Global styles + Tailwind
    │
    ├── 📂 components/           # All React components
    │   ├── Navbar.jsx           # Navigation bar
    │   ├── Hero.jsx             # Hero/landing section
    │   ├── About.jsx            # About me section
    │   ├── TechStack.jsx        # Technologies section
    │   ├── Projects.jsx         # Projects showcase
    │   ├── Contact.jsx          # Contact form
    │   ├── Footer.jsx           # Footer section
    │   ├── AnimatedBackground.jsx  # Particle animation
    │   └── Cursor.jsx           # Custom cursor
    │
    └── 📂 data/
        └── portfolio.js         # Your personal data
```

---

## 📄 File Descriptions

### Root Files

**index.html**
- Main HTML template
- Includes meta tags for SEO
- Links to React app

**package.json**
- Project dependencies
- Scripts (dev, build, preview)
- Project metadata

**vite.config.js**
- Vite build tool configuration
- React plugin setup

**tailwind.config.js**
- Custom colors (red, blue, green)
- Custom animations
- Theme extensions

**postcss.config.js**
- Tailwind CSS processing
- Autoprefixer setup

**.gitignore**
- Excludes node_modules
- Excludes build files
- Excludes system files

---

## 📂 Source Directory (`src/`)

### Main Files

**main.jsx**
- React app entry point
- Renders App component
- Imports global styles

**App.jsx**
- Main application component
- Manages loading state
- Includes all sections
- Wraps with AnimatedBackground

**index.css**
- Tailwind directives
- Global styles
- Custom utility classes
- Gradient text effects

---

## 🧩 Components (`src/components/`)

### Navbar.jsx
**Purpose**: Navigation bar
**Features**:
- Sticky positioning
- Blur effect on scroll
- Mobile hamburger menu
- Smooth scroll links
- Animated underlines

### Hero.jsx
**Purpose**: Landing section
**Features**:
- Large animated name
- Gradient text effects
- CTA buttons
- Social links
- Scroll indicator

### About.jsx
**Purpose**: About me section
**Features**:
- Personal bio
- Code snippet visualization
- Skills list
- Animated reveals
- Glassmorphism card

### TechStack.jsx
**Purpose**: Technologies showcase
**Features**:
- Icon grid layout
- Hover animations
- Color-coded icons
- Responsive grid
- Tech stack from data file

### Projects.jsx
**Purpose**: Project showcase
**Features**:
- Alternating layout
- Featured badges
- Tech tags
- Live/GitHub links
- Hover effects

### Contact.jsx
**Purpose**: Contact form
**Features**:
- Working form (mailto)
- Social media links
- Input validation
- Animated submit button
- Glassmorphism design

### Footer.jsx
**Purpose**: Page footer
**Features**:
- Copyright notice
- Built with love
- Minimal design

### AnimatedBackground.jsx
**Purpose**: Particle animation
**Features**:
- Canvas-based particles
- Mouse interaction
- Connected particles
- Performance optimized
- Responsive particle count

### Cursor.jsx
**Purpose**: Custom cursor
**Features**:
- Smooth following
- Scale on hover
- Blend mode effects
- Desktop only

---

## 📊 Data (`src/data/`)

### portfolio.js
**Purpose**: All your personal data
**Contains**:
- Personal info (name, title, bio)
- Contact info (email, social links)
- Tech stack array
- Projects array

**Easy to update** - just edit this file!

---

## 🎨 Styling Approach

### Tailwind CSS
- Utility-first classes
- Custom theme in config
- Responsive modifiers
- Custom animations

### Custom Styles
- Gradient text utility
- Glass effect utility
- Glow effects
- Custom animations

---

## 🔄 Data Flow

```
portfolio.js (data)
      ↓
Components import data
      ↓
Components render UI
      ↓
Framer Motion animates
      ↓
User sees beautiful portfolio!
```

---

## 📦 Build Output

When you run `npm run build`:

```
dist/
├── index.html           # Optimized HTML
├── assets/
│   ├── index-[hash].js  # Bundled JavaScript
│   └── index-[hash].css # Bundled CSS
└── [other assets]
```

This `dist` folder is what you deploy!

---

## 🎯 Key Concepts

### Component Structure
Each component follows this pattern:
1. Import dependencies
2. Import data (if needed)
3. Define component
4. Add animations
5. Return JSX
6. Export component

### Animation Pattern
```jsx
const ref = useRef(null)
const isInView = useInView(ref, { once: true })

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
>
```

### Data Pattern
```jsx
import { personalInfo, projects } from '../data/portfolio'

// Use in component
<h1>{personalInfo.name}</h1>
```

---

## 🔧 Customization Points

### Easy Changes
- `src/data/portfolio.js` - All content
- `tailwind.config.js` - Colors
- Component files - Individual sections

### Medium Changes
- Add new sections (create new component)
- Modify animations (edit motion props)
- Change layout (edit component JSX)

### Advanced Changes
- Add backend for contact form
- Integrate CMS
- Add blog functionality
- Add authentication

---

## 📱 Responsive Breakpoints

```
sm:  640px   (mobile landscape)
md:  768px   (tablet)
lg:  1024px  (desktop)
xl:  1280px  (large desktop)
2xl: 1536px  (extra large)
```

---

## 🎨 Color System

```
Primary Colors:
- Red:   #ef4444
- Blue:  #3b82f6
- Green: #10b981

Dark Theme:
- Background: #0a0a0a
- Card:       #111111
- Border:     #1f1f1f

Text:
- White:      #ffffff
- Gray-300:   #d1d5db
- Gray-400:   #9ca3af
```

---

## 🚀 Performance Features

- Code splitting (automatic with Vite)
- Lazy loading (Framer Motion)
- Optimized animations (60fps)
- Minimal dependencies
- Tree shaking
- Asset optimization

---

## 📝 Notes

- All components are functional (no classes)
- Uses React Hooks (useState, useEffect, useRef)
- Framer Motion for all animations
- Tailwind for all styling
- No external CSS files (except index.css)

---

**This structure is designed for**:
- ✅ Easy maintenance
- ✅ Simple updates
- ✅ Clear organization
- ✅ Scalability
- ✅ Best practices

Happy coding! 🎉
