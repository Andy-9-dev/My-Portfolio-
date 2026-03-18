# 🎬 Animation Reference Guide

## Page Opening Animations

### 🏠 Home Page - "Gradient Wipe"
```
Visual: Full-screen gradient wipes down from top
Colors: Red → Blue → Green
Duration: 1.2 seconds
Effect: Reveals content underneath
```

**Code Location**: `src/pages/HomePage.jsx`
```jsx
<motion.div
  initial={{ scaleY: 1 }}
  animate={{ scaleY: 0 }}
  transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
  className="fixed inset-0 bg-gradient-to-br from-primary-red via-primary-blue to-primary-green z-50 origin-top"
/>
```

---

### 👤 About Page - "Expanding Circle"
```
Visual: Blue circle expands from center
Color: Blue glow
Duration: 1.0 second
Effect: Spiral entrance for content
```

**Code Location**: `src/pages/AboutPage.jsx`
```jsx
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 50 }}
  transition={{ duration: 1, ease: 'easeOut' }}
  className="fixed inset-0 bg-primary-blue/10 rounded-full blur-3xl -z-10"
/>
```

---

### 💻 Tech Stack Page - "Matrix Cascade"
```
Visual: 20 vertical lines fall from top like Matrix
Color: Green
Duration: 1.0 second (staggered)
Effect: Tech cards cascade down
```

**Code Location**: `src/pages/TechStackPage.jsx`
```jsx
{[...Array(20)].map((_, i) => (
  <motion.div
    key={i}
    initial={{ height: 0, opacity: 0.8 }}
    animate={{ height: '100vh', opacity: 0 }}
    transition={{ duration: 1, delay: i * 0.05, ease: 'easeOut' }}
    className="fixed top-0 w-0.5 bg-gradient-to-b from-primary-green to-transparent"
    style={{ left: `${(i / 20) * 100}%` }}
  />
))}
```

---

### 🚀 Projects Page - "Curtain Reveal"
```
Visual: Two curtains slide away (left & right)
Colors: Gradient + Dark
Duration: 1.0 second
Effect: Projects slide in from left
```

**Code Location**: `src/pages/ProjectsPage.jsx`
```jsx
{/* Left curtain */}
<motion.div
  initial={{ scaleX: 1 }}
  animate={{ scaleX: 0 }}
  transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
  className="fixed inset-0 bg-gradient-to-r from-primary-red via-primary-blue to-primary-green z-40 origin-left"
/>

{/* Right curtain */}
<motion.div
  initial={{ scaleX: 1 }}
  animate={{ scaleX: 0 }}
  transition={{ duration: 1, delay: 0.1, ease: [0.87, 0, 0.13, 1] }}
  className="fixed inset-0 bg-dark-bg z-40 origin-right"
/>
```

---

### 📧 Contact Page - "Radar Pulse"
```
Visual: 5 circles expand from center like radar
Color: Green
Duration: 2.0 seconds (staggered)
Effect: Content fades in with pulse
```

**Code Location**: `src/pages/ContactPage.jsx`
```jsx
{[...Array(5)].map((_, i) => (
  <motion.div
    key={i}
    initial={{ scale: 0, opacity: 0.8 }}
    animate={{ scale: 3, opacity: 0 }}
    transition={{ duration: 2, delay: i * 0.2, ease: 'easeOut' }}
    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-primary-green"
  />
))}
```

---

## Continuous Animations

### Gradient Text Flow
```jsx
animate={{
  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
}}
transition={{ duration: 5, repeat: Infinity }}
style={{
  backgroundImage: 'linear-gradient(90deg, #ef4444, #3b82f6, #10b981, #ef4444)',
  backgroundSize: '200% 100%',
}}
```

### Pulsing Glow
```jsx
animate={{
  textShadow: [
    '0 0 20px rgba(239, 68, 68, 0.5)',
    '0 0 40px rgba(59, 130, 246, 0.5)',
    '0 0 20px rgba(16, 185, 129, 0.5)',
  ],
}}
transition={{ duration: 2, repeat: Infinity }}
```

### Floating Elements
```jsx
animate={{
  y: [0, -30, 0],
  scale: [1, 1.2, 1],
}}
transition={{ duration: 4, repeat: Infinity }}
```

### Rotating Icons
```jsx
animate={{
  rotate: [0, 360],
}}
transition={{
  duration: 20,
  repeat: Infinity,
  ease: 'linear',
}}
```

### Scan Line Effect
```jsx
animate={{
  y: ['-100%', '200%'],
}}
transition={{
  duration: 2,
  repeat: Infinity,
  ease: 'linear',
}}
```

---

## Hover Animations

### Scale & Lift
```jsx
whileHover={{
  scale: 1.1,
  y: -10,
}}
```

### Rotate on Hover
```jsx
whileHover={{
  rotate: 360,
}}
transition={{ duration: 0.5 }}
```

### Slide on Hover
```jsx
whileHover={{
  x: 10,
  scale: 1.05,
}}
```

### Glow on Hover
```jsx
whileHover={{
  boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
}}
```

---

## Entrance Animations

### Fade & Slide Up
```jsx
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

### Fade & Slide Left
```jsx
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
```

### Scale & Fade
```jsx
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8 }}
```

### Spiral Entrance
```jsx
initial={{ opacity: 0, scale: 0, rotate: -180 }}
animate={{ opacity: 1, scale: 1, rotate: 0 }}
transition={{ duration: 1.2 }}
```

---

## Stagger Animations

### Container with Stagger
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
</motion.div>
```

### Custom Stagger with Index
```jsx
variants={cascadeVariants}
custom={index}
initial="hidden"
animate="visible"

const cascadeVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
    },
  }),
}
```

---

## Easing Functions

### Smooth Ease
```jsx
ease: 'easeInOut'  // Default smooth
```

### Bouncy
```jsx
ease: [0.6, 0.05, 0.01, 0.9]  // Custom bezier
```

### Sharp
```jsx
ease: [0.87, 0, 0.13, 1]  // Cinematic
```

### Linear
```jsx
ease: 'linear'  // Constant speed
```

---

## Animation Timing

### Quick (< 0.5s)
- Button clicks
- Icon rotations
- Small scale changes

### Medium (0.5s - 1s)
- Page transitions
- Card entrances
- Hover effects

### Slow (1s - 2s)
- Opening themes
- Large movements
- Dramatic reveals

### Very Slow (2s+)
- Background animations
- Ambient effects
- Continuous loops

---

## Performance Tips

### Use `will-change`
```jsx
style={{ willChange: 'transform' }}
```

### Limit Simultaneous Animations
- Max 10-15 elements animating at once
- Stagger heavy animations

### Use `transform` over `position`
```jsx
// Good
animate={{ x: 100, y: 100 }}

// Avoid
animate={{ left: 100, top: 100 }}
```

### Reduce Motion for Accessibility
```jsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

transition={{
  duration: prefersReducedMotion ? 0 : 1,
}}
```

---

## Customization Examples

### Change Opening Speed
```jsx
// Faster
transition={{ duration: 0.6 }}

// Slower
transition={{ duration: 2 }}
```

### Change Opening Direction
```jsx
// From bottom
initial={{ scaleY: 1 }}
className="origin-bottom"

// From right
initial={{ scaleX: 1 }}
className="origin-right"
```

### Add Delay
```jsx
transition={{ delay: 0.5, duration: 1 }}
```

### Change Colors
```jsx
className="bg-primary-red"  // Red
className="bg-primary-blue"  // Blue
className="bg-primary-green"  // Green
```

---

## Animation Checklist

✅ Opening theme (unique per page)
✅ Content entrance (staggered)
✅ Hover effects (all interactive elements)
✅ Continuous animations (ambient)
✅ Page transitions (smooth)
✅ Mobile optimized (reduced on small screens)
✅ Performance optimized (60fps)
✅ Accessibility (respects prefers-reduced-motion)

---

**Every animation serves a purpose: delight, guide, or inform!** ✨
