# Rupiya.app - Component Architecture

## Overview

This document outlines the complete component structure and architecture for rupiya.app website.

## Layout Components

### Header (`components/layout/Header.tsx`)
**Purpose**: Main navigation header with dropdown menus

**Features**:
- Sticky navigation
- Responsive mobile menu
- Dropdown navigation for:
  - Smart Farming (6 sub-items)
  - Carbon Credits (3 sub-items)
  - Digital Wallet (5 sub-items)
- Login button
- Download CTA button

**Props**: None (uses client-side state for mobile menu)

**Dependencies**:
- `@/components/ui/navigation-menu`
- `@/components/ui/button`
- `lucide-react` icons

### Footer (`components/layout/Footer.tsx`)
**Purpose**: Site footer with links and contact information

**Sections**:
- Company info & social links
- Services links
- Quick links
- Contact information
- Legal links

**Dependencies**:
- `lucide-react` icons

## UI Components (shadcn/ui)

### Button (`components/ui/button.tsx`)
**Variants**:
- `default`: Primary action
- `destructive`: Delete/danger actions
- `outline`: Secondary actions
- `secondary`: Alternative primary
- `ghost`: Subtle actions
- `link`: Text links

**Sizes**: `sm`, `default`, `lg`, `icon`

### Card (`components/ui/card.tsx`)
**Sub-components**:
- `Card`: Container
- `CardHeader`: Header section
- `CardTitle`: Title text
- `CardDescription`: Description text
- `CardContent`: Main content
- `CardFooter`: Footer section

### Tabs (`components/ui/tabs.tsx`)
**Sub-components**:
- `Tabs`: Root container
- `TabsList`: Tab buttons container
- `TabsTrigger`: Individual tab button
- `TabsContent`: Tab content panel

**Usage**: Used in Smart Farming page for feature navigation

### Accordion (`components/ui/accordion.tsx`)
**Sub-components**:
- `Accordion`: Root container
- `AccordionItem`: Individual accordion item
- `AccordionTrigger`: Clickable header
- `AccordionContent`: Collapsible content

### Navigation Menu (`components/ui/navigation-menu.tsx`)
**Sub-components**:
- `NavigationMenu`: Root container
- `NavigationMenuList`: Menu items container
- `NavigationMenuItem`: Individual menu item
- `NavigationMenuTrigger`: Dropdown trigger
- `NavigationMenuContent`: Dropdown content
- `NavigationMenuLink`: Link component

## Page Components

### Homepage (`app/page.tsx`)
**Sections**:
1. Hero Section 1 - Main CTA
2. Hero Section 2 - Regenerative Farming
3. Hero Section 3 - Quick Services
4. Trust Section
5. Carbon Credits Highlight
6. Services Grid (6 cards)
7. Products Showcase
8. Testimonials
9. Awards & Recognition
10. Final CTA

**Key Features**:
- Multiple hero sections
- Service cards with icons
- Product grid
- Testimonial cards
- Award showcase

### Smart Farming Page (`app/smart-farming/page.tsx`)
**Structure**:
- Hero section
- Tabbed interface with 4 tabs:
  1. Soil Testing
  2. Crop Monitoring
  3. Advisory
  4. Inputs
- Additional features section (Insurance, Credit, Buy-Back)

**Components Used**:
- `Tabs` for feature navigation
- `Card` for feature cards
- `Button` for CTAs

### Carbon Credits Page (`app/carbon-credits/page.tsx`)
**Sections**:
1. Hero
2. What are Carbon Credits (icon-based explanation)
3. How Regenerative Agriculture Works
4. Farmer Income Calculator (interactive)
5. Partnership Section
6. Growth Vision

**Key Features**:
- Interactive calculator
- Visual process flow
- Progress bars for growth targets

### Multi-Audience Pages

#### Farmers Page (`app/farmers/page.tsx`)
**Sections**:
- Hero
- Supported Crops Grid
- Adoption Guide (7 steps)
- Income Breakdown (3 cards)
- Benefits with Advisory
- Success Stories

#### FPOs Page (`app/fpos/page.tsx`)
**Sections**:
- Hero
- FPO Benefits (4 cards)
- Collaboration Workflow (6 steps)
- Revenue Pipeline
- Case Studies

#### Buyers Page (`app/buyers/page.tsx`)
**Sections**:
- Hero
- Traceability Module
- Certifications (3 cards)
- Supply Chain Quality
- Crop Portfolio Grid
- Procurement Flow (4 steps)

#### Investors Page (`app/investors/page.tsx`)
**Sections**:
- Hero
- Impact Numbers (4 stat cards)
- Growth Charts (3 visualizations)
- Partnerships (4 cards)
- Farmer Testimonials
- Achievements Timeline
- Investment Opportunities

### Digital Wallet Page (`app/wallet/page.tsx`)
**Sections**:
- Hero
- Services Grid (6 service cards)
- Cashback Highlight
- Features (4 cards)
- CTA

**Service Cards**:
1. Recharge
2. Bookings
3. Insurance
4. Gold Solutions
5. Loans
6. More Services

## Component Patterns

### Hero Pattern
```tsx
<section className="bg-gradient-to-br from-forest-50 to-beige-50 py-20">
  <div className="container">
    <div className="max-w-3xl mx-auto text-center space-y-6">
      <h1>Heading</h1>
      <p>Description</p>
      <Button>CTA</Button>
    </div>
  </div>
</section>
```

### Feature Card Pattern
```tsx
<Card className="hover:shadow-lg transition-shadow">
  <CardHeader>
    <Icon />
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content</p>
    <Button>Action</Button>
  </CardContent>
</Card>
```

### Grid Pattern
```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* Cards */}
</div>
```

### Step-by-Step Pattern
```tsx
<div className="space-y-6">
  {steps.map((step, i) => (
    <Card key={i} className="border-l-4 border-l-forest-600">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <NumberBadge>{i + 1}</NumberBadge>
          <div>
            <CardTitle>{step.title}</CardTitle>
            <CardDescription>{step.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  ))}
</div>
```

## Styling Patterns

### Color Usage
- **Primary Actions**: `bg-forest-600 hover:bg-forest-700`
- **Secondary Actions**: `bg-white text-forest-600 hover:bg-beige-50`
- **Backgrounds**: `bg-forest-50`, `bg-beige-50`, `bg-sky-50`
- **Gradients**: `bg-gradient-to-br from-forest-600 to-forest-800`

### Spacing
- **Section Padding**: `py-20` (80px)
- **Card Gap**: `gap-6` (24px)
- **Container**: `container` (max-width with padding)

### Typography
- **Headings**: `text-3xl md:text-4xl font-bold`
- **Subheadings**: `text-xl md:text-2xl font-semibold`
- **Body**: `text-lg text-muted-foreground`

## State Management

### Client Components
- Header (mobile menu state)
- Carbon Credits Calculator (input state)
- Any interactive components

### Server Components
- Most pages are server components
- Static content rendering
- SEO optimized

## Data Flow

1. **Static Content**: Directly in components
2. **Dynamic Content**: Future API integration points marked
3. **User Interactions**: Client components handle state
4. **Navigation**: Next.js App Router

## Future Enhancements

### API Integration Points
- Product catalog API
- Farmer testimonials API
- Impact numbers API
- Calculator backend
- Form submissions

### Interactive Features
- Real-time dashboard (crop monitoring)
- Live calculator updates
- Form validation
- Search functionality

## Performance Considerations

- **Image Optimization**: Next.js Image component ready
- **Code Splitting**: Automatic with App Router
- **Static Generation**: Most pages are static
- **Lazy Loading**: Components load on demand

## Accessibility Features

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast compliance

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

