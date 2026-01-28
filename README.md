# Sports Betting Platform

A responsive, interactive sports betting landing page featuring modern UI design
and smooth animations. Built with component-driven architecture using React,
Styled Components, and Framer Motion

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Styled Components** - CSS-in-JS styling
- **CSS Animation** - CSS Animations and Transform
- **Framer Motion** - Animation library
- **JavaScript** - No TypeScript for simplicity
- **Component-driven architecture** - Reusable, maintainable components

## Overview

A production-ready landing page showcasing:

- Modern sports betting interface design
- Responsive layouts (mobile-first approach)
- Smooth animations and interactions
- Component-based architecture
- Design engineering best practices

## Key Features

- **Player Stats Section**: Tab-based filtering with hover effects
- **Latest News Carousel**: Horizontal scrollable gallery (drag-to-scroll on mobile)
- **Lucky Spades Gaming**: Animated jackpot counter with prize tiers
- **Hero Section**: Dynamic promotional banner with gradient overlays
- **New Customer CTA**: Conversion-focused call-to-action section

## Features

### Responsive Design

- Mobile-first approach (320px - 1440px+)
- Breakpoints: Mobile (640px), Tablet (768px), Desktop (1024px)
- Touch-friendly interactions on mobile

### Interactive Components

- **Header**: Sticky navigation with logo
- **Player Stats**: Tab-based filtering system with hover effects
- **Latest News**: Horizontal scrollable carousel (desktop row, mobile drag-to-scroll)
- **New Customer CTA**: Gradient background with call-to-action

### Animations & Interactions

- Smooth hover effects on cards and buttons
- Scroll-triggered animations
- Drag-to-scroll news carousel on mobile
- Button state transitions

### Performance Optimizations

- Lazy loading considerations
- Optimized image handling
- CSS-in-JS with theme system
- Component-based architecture

## Project Structure

```
bet365-landing/
├── public/
│   └── assets/
│       ├── bet365.svg
│       ├── Flag1.svg, Flag2.svg, Flag3.svg, FlagGrey.svg
│       └── News1.png - News5.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── PlayerStatsSection.jsx
│   │   ├── LatestNewsSection.jsx
│   │   └── NewCustomerCTA.jsx
│   ├── styles/
│   │   ├── theme.js
│   │   └── GlobalStyles.js
│   ├── config/
│   │   └── assets.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone [your-repo-url]
cd bet365-landing

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173/`

## Design System

### Color Palette

```javascript
darkGreen: "#1a4d2e"; // Header background
darkerGreen: "#0d2818"; // Main background
cyan: "#00e5b0"; // Accent color
yellow: "#ffd93d"; // CTA buttons
```

### Typography

- System fonts for optimal performance
- Font stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto

### Spacing

- Consistent spacing scale (0.5rem - 3rem)
- Responsive padding/margins

## Responsive Behavior

### Desktop (1024px+)

- Full 5-column news grid
- Horizontal layout for all sections
- Hover states on interactive elements

### Tablet (768px - 1024px)

- Adjusted grid layouts
- Optimized spacing

### Mobile (< 640px)

- Single column layouts
- Horizontal scrolling for news cards
- Full-width buttons
- Touch-optimized interactions

## Assets

### Current Asset Status

- **Logo**: bet365.svg (provided)
- **Flags**: SVG placeholders (4 flags)
- **News Images**: 5 placeholder images ready for replacement

### Adding Your Own Assets

Place assets in `public/assets/`:

```
public/assets/
├── bet365.svg           (logo)
├── Flag1-4.svg          (country flags)
└── News1-5.png          (news images)
```

Update paths in `src/config/assets.js` if needed.

## 🔧 Configuration

### Theme Customization

Edit `src/styles/theme.js` to customize:

- Colors
- Breakpoints
- Spacing scale
- Typography

### Adding New Sections

1. Create component in `src/components/`
2. Import and add to `src/App.jsx`
3. Follow existing styled-components pattern

## Build & Deployment

### Build for Production

```bash
npm run build
```

Creates optimized production build in `dist/` folder.

### Deployment Options

- **Vercel**: Drag & drop `dist/` folder (recommended)
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Deploy `dist/` directory
- Any static hosting service

### Build Output

- Optimized JS bundles
- Minified CSS
- Compressed assets
- Production-ready

## Component Architecture

### Reusable Patterns

- Styled components for consistent styling
- Theme provider for global design tokens
- Centralized asset configuration
- Responsive design utilities

### Code Quality

- Clean component structure
- Proper prop handling
- Semantic HTML
- Accessible markup

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Development Notes

### Design Decisions

**Lucky Spades Connecting Lines**
Implemented connecting lines using pure CSS (gradients + pseudo-elements) instead of SVG assets for:

- Pixel-perfect positioning across all screen sizes
- Better responsive behavior (lines adapt to container width)
- Reduced asset loading time
- Easier maintenance and customization
- Consistent rendering across browsers
- **Prize tier connectors**: Simplified from original design for responsive compatibility
- **News carousel**: Drag-to-scroll on mobile for better UX
- **System fonts**: Zero loading time, native feel

### Future Enhancements

- Loading states
- Add more sections (Hero, Lucky Spades)
- Add form validation
- Animation refinements

## Contributing

This is a portfolio/prototype project. For any questions or suggestions, feel free to reach out.

## 📄 License

This project is for demonstration purposes only.

---

**Built with 🧡 by Ifeoma Nwosu**
# sports-betting-ui-showcase
