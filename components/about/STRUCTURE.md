# About Us Component Structure

A clean, modular, and fully responsive About Us page built with React and vanilla CSS.

## File Structure

```
about/
├── AboutUs.tsx              # Main component that orchestrates all sections
├── HeroSection.tsx          # Hero banner with title and CTA
├── StatsSection.tsx         # Key metrics display
├── StorySection.tsx         # Company background and founding story
├── ValuesSection.tsx        # Core values/principles
├── TeamSection.tsx          # Team members showcase
├── CTASection.tsx           # Call-to-action footer
├── globals.css              # Global styles, variables, animations, buttons
├── styles/
│   ├── hero.css             # Hero section styles
│   ├── stats.css            # Stats section styles
│   ├── story.css            # Story section styles
│   ├── values.css           # Values section styles
│   ├── team.css             # Team section styles
│   └── cta.css              # CTA section styles
└── index.ts                 # Named exports for easy importing
```

## Usage

### Import the full page:
```tsx
import { AboutUs } from '@/components/about';

export default function Page() {
  return <AboutUs />;
}
```

### Import individual sections:
```tsx
import { HeroSection, StatsSection, ValuesSection } from '@/components/about';

export default function CustomAbout() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ValuesSection />
    </>
  );
}
```

## Design System

### Color Variables
- `--ink`: #080c0c (dark background)
- `--cream`: #e8f0f0 (light text)
- `--warm-white`: #f0f7f7 (secondary background)
- `--gold`: #00ffef (primary accent)
- `--gold-light`: #66fff8 (light accent)
- `--muted`: #5a7070 (muted text)
- `--border`: rgba(0,255,239,0.15) (border color)

### Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 480px - 767px
- Small Mobile: <480px

### Components

#### Buttons
- `.btn.btn-outline` - Transparent with gold border and hover fill
- `.btn.btn-solid` - Solid gold background

#### Typography
- `.eyebrow` - Small uppercase labels with animation
- `.section-label` - Section headers with decorative line
- Responsive font sizing using CSS `clamp()`

#### Animations
- Fade in from bottom on page load
- Staggered animation delays (0.1s, 0.2s, 0.3s, 0.4s)
- Applied via `.fade-in-up` and `.stagger-{1-4}` classes
- Triggered by `.about-page.visible` class state

## Customization

### Modify Colors
Edit the CSS variables in `globals.css`:
```css
:root {
  --gold: #your-color;
  /* ... other variables */
}
```

### Adjust Animations
Change `--border`, opacity, and transition timings in section CSS files.

### Update Content
Edit component JSX files directly - content is hardcoded for simplicity.

### Responsive Behavior
Each section CSS file includes `@media` queries at specific breakpoints. Adjust padding, gap, and font sizes as needed.

## Key Features

✓ Fully responsive design
✓ Semantic HTML with proper `<main>`, `<section>` elements
✓ Accessibility attributes (`aria-label`)
✓ CSS animations with stagger delays
✓ Grain overlay effect
✓ Modern button interactions
✓ Clean, maintainable code structure
✓ Zero external dependencies (vanilla CSS + React)
✓ Performance optimized with IntersectionObserver

## Browser Support

Works on all modern browsers that support:
- CSS Grid & Flexbox
- CSS Custom Properties (Variables)
- CSS Gradients
- IntersectionObserver API
