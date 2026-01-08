# Ape Design System

A modern, dark design system with glass morphism effects, subtle animations, and professional SaaS aesthetics. Built for developers who want beautiful, distinctive interfaces without the "AI slop" aesthetic.

## Features

- **2 Professional Themes** - Carefully chosen for enterprise and product use
- **System Fonts** - Clean, professional typography using native system fonts
- **Subtle Grid Overlays** - Atmospheric depth with masked radial gradients
- **Glass Morphism** - Frosted glass effects with backdrop blur
- **No Hover Animations** - Clean, professional interactions without distracting movement
- **Dark SaaS Aesthetic** - Premium, expensive-looking backgrounds
- **Fast Transitions** - All animations optimized for speed (0.12s)
- **Fully Responsive** - Mobile-first design with touch-friendly targets
- **Semantic HTML** - Works with standard HTML5 elements
- **CSS Variables** - Fully customizable via CSS custom properties

## Quick Start

### 1. Include the CSS

```html
<link rel="stylesheet" href="assets/ape-design.css">
```

### 2. Set a Theme

Add a `data-theme` attribute to your `<body>` tag:

```html
<body data-theme="cyan">
  <!-- Your content -->
</body>
```

### 3. Use Semantic HTML

The design system styles semantic HTML5 elements automatically:

```html
<header>
  <nav>
    <a href="/" class="brand">YOUR BRAND</a>
    <div class="links">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </div>
  </nav>
</header>

<main>
  <section class="hero">
    <h1>Welcome</h1>
    <p class="hero-text">Your compelling tagline here</p>
    <div class="btn-group">
      <button>Get Started</button>
      <button class="outline">Learn More</button>
    </div>
  </section>

  <section>
    <div class="container">
      <h2>Features</h2>
      <div class="grid">
        <article>
          <h3>Feature One</h3>
          <p>Description of your feature</p>
          <footer>
            <button class="outline">Learn More</button>
          </footer>
        </article>
      </div>
    </div>
  </section>
</main>
```

## Available Themes

### 1. Professional Blue (Default)
- **Theme ID:** `cyan`
- **Primary Color:** `#3b82f6` (Blue)
- **Description:** Modern SaaS aesthetic - clean, trustworthy, enterprise-ready. Perfect for B2B products, developer tools, and enterprise software. Conveys reliability and professionalism.
- **Best For:** B2B products, developer tools, enterprise software, technical documentation
- **Usage:** `<body data-theme="cyan">`

### 2. Premium Emerald
- **Theme ID:** `green`
- **Primary Color:** `#10b981` (Emerald Green)
- **Description:** Sophisticated green - growth, innovation, premium feel. Perfect for fintech, crypto, growth products, and premium services. Conveys success and forward-thinking.
- **Best For:** Fintech, crypto products, growth platforms, premium services
- **Usage:** `<body data-theme="green">`

## Design Philosophy

### Typography
- **System Fonts**: Uses native system fonts (`-apple-system`, `BlinkMacSystemFont`, etc.) for optimal performance and familiarity
- **Subtle Text Glow**: Headings have a very subtle text-shadow for depth without distraction
- **Readable Line Heights**: Optimized for long-form content (1.75 for body, 1.3 for headings)

### Colors & Backgrounds
- **Ultra-Dark Base**: Pure black (`#000000`) with minimal gradients
- **Subtle Accents**: Low-opacity accent colors (0.3 or less) for professional look
- **Grid Overlays**: Optional grid overlay with masked radial fade for atmospheric depth
- **No Aggressive Gradients**: Backgrounds are subtle and don't compete with content

### Motion
- **No Hover Animations**: Clean color-only hover states (no transforms, scales, or movement)
- **Fast Transitions**: All transitions are 0.12s for snappy feel
- **No Page Animations**: Content appears immediately without fade-ins or delays

### Glass Morphism
- **Subtle Glass Effects**: Very low opacity (0.02-0.03) for premium look
- **Backdrop Blur**: 20px blur for frosted glass effect
- **Minimal Borders**: Thin borders (0.08 opacity) for definition

## Grid Overlay

Add a subtle grid overlay to any section for atmospheric depth:

```html
<section class="hero">
  <div class="grid-overlay"></div>
  <h1>Your Title</h1>
</section>

<section class="secondary">
  <div class="grid-overlay"></div>
  <div class="container">
    <!-- Content -->
  </div>
</section>
```

The grid overlay features:
- 40px × 40px grid pattern
- Masked radial gradient fade (stronger in center, fades to edges)
- Very low opacity (0.08-0.1)
- Uses accent color for grid lines

## Component Examples

### Hero Section

```html
<section class="hero">
  <div class="grid-overlay"></div>
  <h1>Your Product Name</h1>
  <p class="hero-text">
    Compelling tagline that captures attention and explains your value proposition.
  </p>
  <div class="btn-group">
    <button>Get Started</button>
    <button class="outline">Learn More</button>
  </div>
</section>
```

### Feature Grid

```html
<section>
  <div class="container">
    <h2>Features</h2>
    <div class="grid">
      <article>
        <h3>Feature Title</h3>
        <p>Feature description goes here.</p>
        <footer>
          <button class="outline">Learn More</button>
        </footer>
      </article>
      <!-- More feature cards -->
    </div>
  </div>
</section>
```

### Secondary Section (with background)

```html
<section class="secondary">
  <div class="grid-overlay"></div>
  <div class="container">
    <h2>Testimonials</h2>
    <div class="grid">
      <article>
        <p>"Great product!"</p>
        <small class="muted">— Customer Name</small>
      </article>
    </div>
  </div>
</section>
```

### Dashboard Layout

```html
<main>
  <div class="flex gap-xl">
    <aside class="flex-col p-lg bg-secondary rounded min-w-md">
      <nav class="sidebar-nav">
        <a href="#" class="accent">Dashboard</a>
        <a href="#">Analytics</a>
        <a href="#">Settings</a>
      </nav>
    </aside>
    
    <div class="flex-1 p-lg">
      <h2>Dashboard</h2>
      <div class="grid">
        <article>
          <h3>Total Revenue</h3>
          <p class="text-2xl accent bold">$124,567</p>
          <small class="muted">+12.5% from last month</small>
        </article>
      </div>
    </div>
  </div>
</main>
```

### Product Showcase (Marketing Style)

```html
<section>
  <div class="container">
    <h2>Our Products</h2>
    <div class="grid">
      <article>
        <h3>Product Name</h3>
        <p>Product description and key features.</p>
        <footer>
          <a href="/product" role="button">Get Started</a>
          <a href="/docs" role="button" class="outline">Read Docs</a>
        </footer>
      </article>
    </div>
  </div>
</section>

<section class="secondary">
  <div class="grid-overlay"></div>
  <div class="container">
    <h2>Ecosystem</h2>
    <div class="grid compact">
      <article>
        <h4>Tool Name</h4>
        <p class="text-sm muted">Brief description</p>
      </article>
    </div>
  </div>
</section>
```

## HTML Classes Reference

### Layout & Structure

- **`.container`** - Centered container with max-width and padding
- **`.grid`** - Responsive grid layout (auto-fit, minmax 300px)
- **`.grid.compact`** - Compact grid variant (minmax 150px, smaller gap)
- **`.hero`** - Full-width hero section with subtle gradient background
- **`.hero-text`** - Styled text within hero (centered, max-width, larger font)
- **`.secondary`** - Section with glass background and subtle gradient
- **`.grid-overlay`** - Subtle grid pattern overlay for atmospheric depth

### Components

- **`.outline`** - Transparent button with subtle border
- **`.full`** - Full-width button
- **`.btn-group`** - Container for grouping buttons (flex, centered)
- **`.sidebar-nav`** - Vertical navigation for sidebars
- **`.brand`** - Brand/logo styling (bold, uppercase, monospace font)

### Utilities

#### Spacing
- **`.p-xs`, `.p-sm`, `.p-md`, `.p-lg`, `.p-xl`, `.p-2xl`** - Padding utilities
- **`.m-xs`, `.m-sm`, `.m-md`, `.m-lg`, `.m-xl`, `.m-2xl`** - Margin utilities
- **`.gap-xs`, `.gap-sm`, `.gap-md`, `.gap-lg`, `.gap-xl`** - Gap utilities

#### Display & Flexbox
- **`.flex`** - Display flex
- **`.flex-col`** - Flex direction column
- **`.flex-1`** - Flex: 1
- **`.center`** - Align items center
- **`.between`** - Justify content space-between

#### Text
- **`.text-center`** - Text align center
- **`.accent`** - Accent color text
- **`.muted`** - Muted text color
- **`.text-sm`, `.text-lg`, `.text-xl`, `.text-2xl`** - Font size utilities
- **`.bold`** - Bold font weight

#### Width & Position
- **`.w-full`** - Width 100%
- **`.max-w-md`** - Max width 32rem
- **`.sticky`** - Position sticky
- **`.relative`** - Position relative

## Semantic HTML Elements

The design system automatically styles these semantic HTML5 elements:

- **`<header>`** - Sticky header with glass background and blur
- **`<main>`** - Main content area with padding and max-width
- **`<footer>`** - Footer with border-top and grid layout
- **`<nav>`** - Navigation with flex layout
- **`<article>`** - Glass card with hover effects (color only, no movement)
- **`<section>`** - Section container
- **`<button>`** - Glass button with accent border
- **`[role="button"]`** - Anchor styled as button
- **`<code>`** - Inline code with glass background
- **`<pre>`** - Code block with glass background

## CSS Variables

All design tokens are available as CSS variables. Customize your theme by overriding these in your CSS:

```css
[data-theme="cyan"] {
  --accent: #3b82f6;
  --accent-glow: rgba(59, 130, 246, 0.3);
  --bg: #000000;
  --bg-2: #050505;
  --glass: rgba(255, 255, 255, 0.02);
  --glass-border: rgba(255, 255, 255, 0.08);
  /* ... more variables */
}
```

See `variables.html` for a complete list of all available CSS variables.

## File Structure

```
pingere/
├── assets/
│   └── ape-design.css          # Main design system CSS
├── examples/                   # Example implementations
│   ├── index.html
│   ├── product-landing.html
│   └── dashboard.html
├── marketing-website/          # Marketing site examples
│   ├── index.html
│   ├── framework.html
│   └── silverback.html
├── wireframes.html             # 12+ wireframe templates
├── docs.html                   # Documentation
├── variables.html              # CSS variables reference
└── README.md                   # This file
```

## Examples & Templates

### Wireframe Templates

See `wireframes.html` for 12+ complete wireframe templates:
1. Landing Page
2. Dashboard
3. ETH Wallet
4. White Papers & Announcements
5. Contact/Form Page
6. Portfolio/Showcase
7. About/Team Page
8. Pricing Page
9. Login/Signup
10. Documentation/Help Center
11. Profile/Settings
12. 404/Error Page
13. Product Showcase (Marketing)
14. Ecosystem Grid (Marketing)
15. Community Testimonials (Marketing)

### Example Pages

Check the `examples/` folder for:
- Product landing pages
- Dashboard interfaces
- Documentation layouts
- And more...

### Marketing Website

See `marketing-website/` for real-world examples:
- Homepage with hero, features, and CTAs
- Product pages (Framework, Silverback)
- Ecosystem showcases
- Community sections

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Custom Properties (CSS Variables)
- Backdrop Filter (for glass morphism)
- CSS Grid and Flexbox

## Performance

- **No JavaScript Required** - Pure CSS design system
- **Fast Transitions** - All animations are 0.12s or less
- **Optimized Animations** - No hover transforms or scales
- **System Fonts** - No external font loading
- **Minimal CSS** - Only essential styles included

## Contributing

This design system is part of the ApeWorX ecosystem. For questions or contributions, please refer to the main ApeWorX repository.

## License

Part of the ApeWorX open-source ecosystem.
