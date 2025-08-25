# Handmade Paper Portfolio

A unique, handcrafted portfolio website built with React Router v7, featuring a paper-like aesthetic with handwritten fonts and organic animations.

## 🎨 Design Philosophy

This portfolio captures the charm of handwritten notes on aged paper, combining modern web technologies with organic, tactile design elements that feel authentic and personal.

## ✨ Features

### 🎭 Visual Design
- **Handwritten Typography**: Custom font combinations (Kalam, Caveat, Crimson Text)
- **Paper Textures**: Subtle grain patterns and aging effects using CSS gradients
- **Organic Elements**: Rotated cards, hand-drawn underlines, floating animations
- **Warm Color Palette**: Cream backgrounds (#FEF7ED) with brown ink tones (#8B4513)

### 📱 User Experience
- **Staggered Hero Animations**: Choreographed loading sequence with ink blot, name, title
- **Scroll-Triggered Sections**: Intersection Observer API for smooth reveal animations
- **Mobile-First Navigation**: Floating action button expanding into contextual menu
- **Responsive Design**: Fluid layouts from mobile (320px) to desktop (1200px+)

### ⚡ Technical Implementation
- **React Router v7**: Modern file-based routing with type safety
- **Tailwind CSS v4**: Utility-first styling with custom CSS variables
- **TypeScript**: Full type safety throughout the application
- **Custom Animations**: Hand-crafted CSS keyframes for organic movement
- **Intersection Observer**: Performance-optimized scroll animations
- **Mobile-Optimized**: Touch-friendly interactions and responsive typography

## 🛠 Architecture

### Component Structure
```
app/routes/home.tsx          # Main portfolio component
app/app.css                  # Custom styles and animations
app/root.tsx                 # Application shell and fonts
```

### Design System
- **Custom CSS Properties**: Consistent color and typography variables
- **Animation Classes**: Reusable animation utilities
- **Responsive Utilities**: Mobile-first breakpoint system
- **Paper Components**: Shared styling for card-like elements

### Animation Timeline
1. **Hero Section** (0-3s): Ink blot → Name → Title → Description → Links → Navigation
2. **Scroll Sections**: Intersection Observer triggers fade-in animations
3. **Mobile Menu**: Smooth expand/collapse with staggered menu items

## 🚀 Getting Started

### Installation
```bash
bun install
```

### Development
```bash
bun run dev
```

### Build
```bash
bun run build
```

### Type Checking
```bash
bun run typecheck
```

## 📦 Dependencies

### Core
- **React Router v7**: Application framework and routing
- **React 19**: UI library with latest features
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS v4**: Utility-first CSS framework

### Fonts
- **Google Fonts**: Kalam (handwritten), Caveat (script), Crimson Text (serif)

## 🎯 Performance Optimizations

- **CSS-only animations**: No JavaScript animation libraries
- **Intersection Observer**: Efficient scroll detection
- **Responsive images**: Optimized loading for different screen sizes
- **Modern CSS**: Grid and Flexbox for efficient layouts
- **Minimal bundle**: Only essential dependencies

## 🔧 Customization

### Colors
Update CSS variables in `app.css`:
```css
--color-paper: #FEF7ED;
--color-ink: #2D3748;
--color-accent: #8B4513;
```

### Typography
Modify font imports in `root.tsx` and update CSS variables:
```css
--font-handwritten: "Kalam", cursive;
--font-script: "Caveat", cursive;
--font-sans: "Crimson Text", serif;
```

### Animations
Customize timing and easing in CSS keyframes:
```css
@keyframes gentle-float {
  0%, 100% { transform: translateY(0px) rotate(-0.5deg); }
  50% { transform: translateY(-3px) rotate(0.5deg); }
}
```

## 📱 Mobile Features

- **Floating Navigation**: Space-efficient bottom-right menu
- **Touch Interactions**: Proper sizing for thumb navigation
- **Responsive Typography**: Optimized text scaling across devices
- **Compact Layouts**: Two-column skills cards, stacked sections

## 🎨 Design Details

- **Hand-drawn Elements**: CSS-generated underlines and decorative elements
- **Paper Aging**: Subtle radial gradients for vintage appearance
- **Organic Rotations**: Slight transforms on cards for handmade feel
- **Texture Overlays**: Background patterns simulating paper grain

---

Built with ❤️ using React Router v7, creative CSS artistry and Claude Code