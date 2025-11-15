# Rupiya.app - Design System

## Color Palette

### Primary Colors
- **Forest Green** (Primary)
  - `forest-50`: #f0f9f4
  - `forest-100`: #dcf2e3
  - `forest-200`: #bce4ca
  - `forest-300`: #8fcea5
  - `forest-400`: #5cb078
  - `forest-500`: #389155 (Main)
  - `forest-600`: #2a7443
  - `forest-700`: #245d38
  - `forest-800`: #204b2f
  - `forest-900`: #1c3f28

### Secondary Colors
- **Beige** (Neutral/Warm)
  - `beige-50`: #faf9f7
  - `beige-100`: #f5f3f0
  - `beige-200`: #eae6e0
  - `beige-300`: #d9d2c7
  - `beige-400`: #c4b9a9
  - `beige-500`: #b09f8c
  - `beige-600`: #9d8a75
  - `beige-700`: #827263
  - `beige-800`: #6b5f53
  - `beige-900`: #584f46

- **Sky Blue** (Accent)
  - `sky-50`: #f0f9ff
  - `sky-100`: #e0f2fe
  - `sky-200`: #bae6fd
  - `sky-300`: #7dd3fc
  - `sky-400`: #38bdf8
  - `sky-500`: #0ea5e9
  - `sky-600`: #0284c7
  - `sky-700`: #0369a1
  - `sky-800`: #075985
  - `sky-900`: #0c4a6e

### Semantic Colors
- Success: `forest-600`
- Info: `sky-600`
- Warning: `yellow-600`
- Error: `red-600`

## Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: system-ui, -apple-system, sans-serif

### Font Sizes
- `text-xs`: 0.75rem (12px)
- `text-sm`: 0.875rem (14px)
- `text-base`: 1rem (16px)
- `text-lg`: 1.125rem (18px)
- `text-xl`: 1.25rem (20px)
- `text-2xl`: 1.5rem (24px)
- `text-3xl`: 1.875rem (30px)
- `text-4xl`: 2.25rem (36px)
- `text-5xl`: 3rem (48px)
- `text-6xl`: 3.75rem (60px)

### Font Weights
- `font-light`: 300
- `font-normal`: 400
- `font-medium`: 500
- `font-semibold`: 600
- `font-bold`: 700

### Line Heights
- `leading-tight`: 1.25
- `leading-snug`: 1.375
- `leading-normal`: 1.5
- `leading-relaxed`: 1.625

## Spacing

### Container
- Max width: `1400px` (2xl breakpoint)
- Padding: `2rem` (32px) on mobile, responsive on larger screens

### Section Spacing
- Section padding: `py-20` (80px vertical)
- Card spacing: `gap-6` (24px)
- Grid spacing: `gap-6` to `gap-8` (24px to 32px)

## Components

### Buttons
- **Primary**: `bg-forest-600 hover:bg-forest-700`
- **Secondary**: `bg-white text-forest-600 hover:bg-beige-50`
- **Outline**: `border border-input hover:bg-accent`
- **Ghost**: `hover:bg-accent hover:text-accent-foreground`
- **Sizes**: `sm`, `default`, `lg`

### Cards
- Border radius: `rounded-lg` (0.5rem)
- Shadow: `shadow-sm` (default), `shadow-lg` (hover)
- Padding: `p-6` (24px)
- Border: `border` (1px solid)

### Navigation
- Header height: `h-16` (64px)
- Sticky positioning: `sticky top-0 z-50`
- Background: `bg-background/95 backdrop-blur`

## Layout Patterns

### Hero Sections
- Gradient backgrounds: `bg-gradient-to-br from-forest-50 via-beige-50 to-sky-50`
- Text alignment: Center or left-aligned
- CTA buttons: Large size with icons

### Feature Grids
- 2-4 columns on desktop
- 1 column on mobile
- Card-based layout with icons

### Content Sections
- Max width: `max-w-4xl` for text content
- Centered: `mx-auto`
- Spacing: `space-y-6` to `space-y-12`

## Icons

### Icon Library
- **Lucide React**: Primary icon library
- Size: `h-4 w-4` (small), `h-5 w-5` (medium), `h-6 w-6` (large), `h-8 w-8` (xlarge)
- Color: Inherit from parent or use semantic colors

### Common Icons
- `Leaf`: Farming, agriculture
- `TrendingUp`: Growth, success
- `Users`: Community, farmers
- `Shield`: Security, insurance
- `CreditCard`: Payments, finance
- `ShoppingCart`: Buy-back, marketplace
- `Satellite`: Monitoring, technology
- `Brain`: AI, intelligence

## Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px

## Animation

### Transitions
- Default: `transition-colors`
- Hover: `hover:shadow-lg transition-shadow`
- Focus: `focus-visible:ring-2 focus-visible:ring-ring`

### Keyframes
- Accordion: `accordion-down`, `accordion-up`
- Fade: `fade-in`, `fade-out`
- Slide: `slide-in-from-*`, `slide-out-to-*`

## Accessibility

### Color Contrast
- Text on background: Minimum 4.5:1 ratio
- Large text: Minimum 3:1 ratio

### Focus States
- Visible focus rings on interactive elements
- Keyboard navigation support

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels where needed
- Alt text for images

## Design Principles

1. **Trust-First**: Clean, professional design that builds confidence
2. **Agritech Focus**: Visual elements that connect to farming
3. **Global Standard**: Modern, international design language
4. **Visual Education**: Clear diagrams and explanations
5. **Multi-Audience**: Different paths for different user types
6. **Mobile-First**: Responsive design for all devices

