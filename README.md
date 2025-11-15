# Rupiya.app - Complete Website UI/UX

A comprehensive, production-ready website for rupiya.app - India's largest platform for residue-free farming, regenerative agriculture-based carbon credit generation, and farmer financial inclusivity.

[Visit Rupiya.app](https://rupiya-app-123.vercel.app/)

## 🚀 Features

### 1. Residue-Free Farming Section
- ✅ Satellite-based soil testing with before/after comparisons
- ✅ AI-driven satellite crop monitoring & traceability
- ✅ Agronomy advisory (app + field experts)
- ✅ 35 residue-free agricultural inputs marketplace
- ✅ Parametric Insurance dashboard
- ✅ Farm credit support
- ✅ Buy-back from Farm Gate program

### 2. Carbon Credits Section
- ✅ Simple visual explanation of carbon credits
- ✅ How regenerative agriculture increases soil carbon
- ✅ Farmer income calculator (₹800 per credit)
- ✅ Partnership with Carboneg (Europe)
- ✅ Growth vision (5,00,000 hectares | 50,000+ farmers)

### 3. Multi-Audience Pages
- ✅ **For Farmers**: Supported crops, adoption guide, income breakdown
- ✅ **For FPOs**: Empowerment benefits, training, revenue pipeline
- ✅ **For Buyers**: Traceability module, certifications, procurement flow
- ✅ **For Investors**: Impact numbers, growth charts, achievements

### 4. Digital Wallet (Super-App)
- ✅ Recharge & bill payments
- ✅ Travel bookings
- ✅ Insurance
- ✅ Digital gold
- ✅ Loans
- ✅ Cashback system

## 📁 Project Structure

```
rupiya.app/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── smart-farming/          # Smart farming pages
│   ├── carbon-credits/         # Carbon credits pages
│   ├── farmers/                # Farmers landing page
│   ├── fpos/                   # FPOs landing page
│   ├── buyers/                 # Buyers landing page
│   ├── investors/              # Investors landing page
│   └── wallet/                 # Digital wallet page
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation header
│   │   └── Footer.tsx          # Site footer
│   └── ui/                     # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── tabs.tsx
│       ├── accordion.tsx
│       └── navigation-menu.tsx
├── lib/
│   └── utils.ts                # Utility functions
├── docs/
│   ├── SITEMAP.md              # Complete sitemap
│   ├── WIREFRAMES.md           # Layout wireframes
│   ├── DESIGN_SYSTEM.md       # Design tokens & guidelines
│   └── UI_COPY.md              # Copywriting guide
└── README.md                   # This file
```

## 🎨 Design System

### Colors
- **Primary**: Forest Green (`forest-600`)
- **Secondary**: Beige (`beige-50` to `beige-900`)
- **Accent**: Sky Blue (`sky-500` to `sky-700`)

### Typography
- **Font**: Inter (Google Fonts)
- **Sizes**: Responsive from `text-sm` to `text-6xl`

### Components
- Built with **shadcn/ui** components
- Fully responsive design
- Accessible (WCAG compliant)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to `http://localhost:3000`

## 📄 Documentation

- **Sitemap**: See `docs/SITEMAP.md` for complete navigation structure
- **Wireframes**: See `docs/WIREFRAMES.md` for layout designs
- **Design System**: See `docs/DESIGN_SYSTEM.md` for design tokens
- **UI Copy**: See `docs/UI_COPY.md` for all copywriting

## 🎯 Key Pages

### Homepage (`/`)
- Multiple hero sections
- Services grid
- Products showcase
- Testimonials
- Awards & recognition

### Smart Farming (`/smart-farming`)
- Tabbed interface for all features
- Soil testing, monitoring, advisory, inputs
- Insurance, credit, buy-back programs

### Carbon Credits (`/carbon-credits`)
- Visual explanations
- Income calculator
- Partnership details
- Growth vision

### Multi-Audience Pages
- `/farmers` - For individual farmers
- `/fpos` - For Farmer Producer Organizations
- `/buyers` - For institutional buyers
- `/investors` - For investors

### Digital Wallet (`/wallet`)
- All fintech services
- Cashback highlights
- Service cards

## 🎨 Design Principles

1. **Trust-First**: Clean, professional design
2. **Agritech Focus**: Visual elements connect to farming
3. **Global Standard**: Modern, international design
4. **Visual Education**: Clear diagrams and explanations
5. **Multi-Audience**: Different paths for different users
6. **Mobile-First**: Fully responsive

## 📱 Responsive Design

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1400px+

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast (WCAG AA)
- Focus states

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify color palette.

### Components
All components are in `components/ui/` and can be customized.

### Content
Update copy in respective page files or see `docs/UI_COPY.md`.

## 📝 License

This project is proprietary software for rupiya.app.


---

**Built with ❤️ for Indian Farmers**

