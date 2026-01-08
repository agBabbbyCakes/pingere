# pingere

## Available Themes

The Ape Design System includes 5 distinct dark themes with glass morphism effects and neon accents. Apply a theme by adding the `data-theme` attribute to your `<body>` tag.

### 1. Cyan Nexus (Default)
- **Theme ID:** `cyan`
- **Primary Color:** `#00ffff`
- **Description:** Default theme with vibrant cyan accents. Perfect for tech and developer tools.
- **Usage:** `<body data-theme="cyan">`

### 2. Purple Matrix
- **Theme ID:** `purple`
- **Primary Color:** `#a855f7`
- **Description:** Deep purple with magenta highlights. Matrix-inspired with a modern twist.
- **Usage:** `<body data-theme="purple">`

### 3. Green Terminal
- **Theme ID:** `green`
- **Primary Color:** `#00ff88`
- **Description:** Classic terminal green with lime accents. Nostalgic yet futuristic.
- **Usage:** `<body data-theme="green">`

### 4. Orange Fusion
- **Theme ID:** `orange`
- **Primary Color:** `#ff6b35`
- **Description:** Warm orange with amber glow. Energy and warmth in a dark interface.
- **Usage:** `<body data-theme="orange">`

### 5. Pink Neon
- **Theme ID:** `pink`
- **Primary Color:** `#ff00ff`
- **Description:** Vibrant pink with magenta pulse. Bold and energetic.
- **Usage:** `<body data-theme="pink">`

## HTML Classes Reference

### Layout & Structure Classes

#### Hero Section
- **`.hero`** - Full-width hero section with radial gradient background and CRT scanline overlay
- **`.hero-text`** - Styled text within hero section (centered, max-width 600px, larger font)
- **`.hero-logo`** - Logo image styling in hero section (8rem height, screen blend mode)

#### Container & Grid
- **`.container`** - Centered container with max-width and padding
- **`.grid`** - Responsive grid layout (auto-fit, minmax 300px, gap spacing)
- **`.grid.compact`** - Compact grid variant (minmax 150px, smaller gap, centered content)

#### Sections
- **`.secondary`** - Section with glass background, full-width margin, and radial gradient overlay
- **`.legal`** - Footer legal text styling (border-top, muted color, centered)

### Component Classes

#### Buttons
- **`.outline`** - Transparent button with subtle border (for secondary actions)
- **`.full`** - Full-width button
- **`.btn-group`** - Container for grouping buttons (flex, centered, wrapped)

#### Navigation
- **`.brand`** - Brand/logo styling in navigation (bold, uppercase, monospace font)
- **`.brand-logo`** - Logo image in navigation (1.5rem height, inverted filter)
- **`.links`** - Container for navigation links (flex with gap)

#### Theme Switcher
- **`.theme-switcher`** - Container for theme switcher dropdown
- **`.theme-dropdown`** - Theme dropdown container
- **`.theme-dropdown-button`** - Theme dropdown button (glass style, with arrow indicator)
- **`.theme-dropdown-button.open`** - Open state (rotates arrow)
- **`.theme-dropdown-menu`** - Theme dropdown menu (positioned absolutely, hidden by default)
- **`.theme-dropdown-menu.open`** - Open state (visible, animated)
- **`.theme-option`** - Individual theme option item
- **`.theme-option.active`** - Active/selected theme option
- **`.theme-option-color`** - Color indicator circle for theme option
- **`.theme-option-label`** - Container for theme option text
- **`.theme-option-name`** - Theme option name text
- **`.theme-option-desc`** - Theme option description text

### Utility Classes

#### Spacing - Padding
- **`.p-0`** - No padding
- **`.p-sm`** - Small padding (0.5rem)
- **`.p-md`** - Medium padding (1rem)
- **`.p-lg`** - Large padding (1.5rem)
- **`.p-xl`** - Extra large padding (2rem)
- **`.p-2xl`** - 2X large padding (3rem)

#### Spacing - Margin
- **`.m-0`** - No margin
- **`.m-sm`** - Small margin (0.5rem)
- **`.m-md`** - Medium margin (1rem)
- **`.m-lg`** - Large margin (1.5rem)
- **`.m-xl`** - Extra large margin (2rem)
- **`.m-2xl`** - 2X large margin (3rem)
- **`.m-auto`** - Auto margin (centers horizontally)

#### Spacing - Gap
- **`.gap-sm`** - Small gap (0.5rem)
- **`.gap-md`** - Medium gap (1rem)
- **`.gap-lg`** - Large gap (1.5rem)
- **`.gap-xl`** - Extra large gap (2rem)

#### Display
- **`.flex`** - Display flex
- **`.grid`** - Display grid
- **`.block`** - Display block
- **`.inline`** - Display inline
- **`.hidden`** - Display none

#### Flexbox Utilities
- **`.flex-col`** - Flex direction column
- **`.flex-row`** - Flex direction row
- **`.center`** - Align items center
- **`.start`** - Align items flex-start
- **`.end`** - Align items flex-end
- **`.justify-center`** - Justify content center
- **`.between`** - Justify content space-between
- **`.justify-start`** - Justify content flex-start
- **`.justify-end`** - Justify content flex-end
- **`.flex-wrap`** - Flex wrap
- **`.flex-1`** - Flex: 1

#### Text Utilities
- **`.text-center`** - Text align center
- **`.text-left`** - Text align left
- **`.text-right`** - Text align right
- **`.accent`** - Accent color text
- **`.muted`** - Muted text color
- **`.text`** - Primary text color
- **`.text-sm`** - Small font size (0.875rem)
- **`.text-md`** - Medium font size (1rem)
- **`.text-lg`** - Large font size (1.125rem)
- **`.text-xl`** - Extra large font size (1.25rem)
- **`.bold`** - Bold font weight (700)
- **`.normal`** - Normal font weight (400)

#### Width Utilities
- **`.w-full`** - Width 100%
- **`.w-auto`** - Width auto
- **`.max-w-sm`** - Max width 24rem
- **`.max-w-md`** - Max width 32rem
- **`.max-w-lg`** - Max width 48rem
- **`.max-w-xl`** - Max width 64rem
- **`.max-w-full`** - Max width 100%

#### Border Utilities
- **`.border`** - Standard border (1px solid glass-border)
- **`.border-accent`** - Accent border (1px solid glass-accent)
- **`.border-t`** - Border top
- **`.border-b`** - Border bottom
- **`.rounded`** - Border radius (12px)
- **`.rounded-sm`** - Small border radius (8px)
- **`.rounded-lg`** - Large border radius (16px)

#### Background Utilities
- **`.bg-secondary`** - Glass background
- **`.bg-card`** - Glass hover background

#### Position Utilities
- **`.sticky`** - Position sticky
- **`.relative`** - Position relative
- **`.absolute`** - Position absolute
- **`.fixed`** - Position fixed
- **`.top-0`** - Top: 0
- **`.z-100`** - Z-index: 100

#### Overflow Utilities
- **`.overflow-hidden`** - Overflow hidden
- **`.overflow-auto`** - Overflow auto

#### Cursor Utilities
- **`.cursor-pointer`** - Pointer cursor
- **`.cursor-not-allowed`** - Not-allowed cursor

### Semantic HTML Elements

The design system also styles these semantic HTML elements automatically:

- **`<header>`** - Sticky header with glass background and blur
- **`<main>`** - Main content area with padding and max-width
- **`<footer>`** - Footer with border-top and grid layout
- **`<nav>`** - Navigation with flex layout
- **`<article>`** - Glass card with hover effects and shimmer animation
- **`<section>`** - Section container
- **`<button>`** - Glass button with neon glow on hover
- **`[role="button"]`** - Anchor styled as button
- **`<code>`** - Inline code with glass background
- **`<pre>`** - Code block with glass background and hover effects

## Wireframe Templates

Common website wireframe patterns using the Ape Design System. See `wireframes.html` for live demos.

### 1. Landing Page
```html
<section class="hero">
  <h1>Your Product Name</h1>
  <p class="hero-text">Compelling tagline that captures attention</p>
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
        <p>Description of feature</p>
      </article>
      <!-- More feature cards -->
    </div>
  </div>
</section>

<section class="secondary">
  <div class="container">
    <h2>Testimonials</h2>
    <!-- Testimonial cards -->
  </div>
</section>
```

### 2. Dashboard
```html
<main class="flex">
  <aside class="flex-col p-lg bg-secondary">
    <nav class="flex-col gap-md">
      <a href="#">Dashboard</a>
      <a href="#">Analytics</a>
      <a href="#">Settings</a>
    </nav>
  </aside>
  
  <div class="flex-1 p-lg">
    <header class="flex between center mb-xl">
      <h2>Dashboard</h2>
      <button>New Item</button>
    </header>
    
    <div class="grid">
      <article>
        <h3>Widget Title</h3>
        <p>Widget content</p>
      </article>
      <!-- More widgets -->
    </div>
  </div>
</main>
```

### 3. E-commerce Product Page
```html
<section>
  <div class="container">
    <div class="grid">
      <article class="bg-secondary rounded p-xl">
        <!-- Product image placeholder -->
        <div class="bg-card rounded p-2xl text-center">Image</div>
      </article>
      
      <article>
        <h1>Product Name</h1>
        <p class="text-xl accent bold">$99.99</p>
        <p>Product description goes here</p>
        <div class="flex gap-md mt-xl">
          <button class="flex-1">Add to Cart</button>
          <button class="outline">Wishlist</button>
        </div>
      </article>
    </div>
    
    <section class="mt-2xl">
      <h2>Reviews</h2>
      <div class="grid">
        <article>
          <h4>Review Title</h4>
          <p>Review content</p>
        </article>
      </div>
    </section>
  </div>
</section>
```

### 4. Blog/Article List
```html
<main>
  <section>
    <div class="container">
      <div class="grid">
        <div class="flex-1">
          <article>
            <h2>Article Title</h2>
            <small class="muted">Published on Date</small>
            <p>Article excerpt...</p>
            <footer>
              <button class="outline">Read More</button>
            </footer>
          </article>
          <!-- More articles -->
        </div>
        
        <aside class="max-w-md">
          <article class="bg-secondary rounded p-lg">
            <h3>Categories</h3>
            <nav class="flex-col gap-sm mt-md">
              <a href="#">Category 1</a>
              <a href="#">Category 2</a>
            </nav>
          </article>
        </aside>
      </div>
    </div>
  </section>
</main>
```

### 5. Contact/Form Page
```html
<section>
  <div class="container">
    <h2>Get in Touch</h2>
    <div class="grid">
      <article>
        <form class="flex-col gap-lg">
          <input type="text" placeholder="Name" class="p-md bg-secondary rounded border">
          <input type="email" placeholder="Email" class="p-md bg-secondary rounded border">
          <textarea placeholder="Message" class="p-md bg-secondary rounded border"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </article>
      
      <article class="bg-secondary rounded p-lg">
        <h3>Contact Info</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 234 567 8900</p>
      </article>
    </div>
  </div>
</section>
```

### 6. Portfolio/Showcase
```html
<section>
  <div class="container">
    <div class="flex between center mb-xl">
      <h2>Portfolio</h2>
      <div class="flex gap-sm">
        <button class="outline">All</button>
        <button class="outline">Web</button>
        <button class="outline">Design</button>
      </div>
    </div>
    
    <div class="grid">
      <article>
        <div class="bg-card rounded p-2xl text-center mb-md">Project Image</div>
        <h3>Project Name</h3>
        <p>Project description</p>
        <footer>
          <button class="outline">View Project</button>
        </footer>
      </article>
      <!-- More portfolio items -->
    </div>
  </div>
</section>
```

### 7. About/Team Page
```html
<section class="hero">
  <h1>About Us</h1>
  <p class="hero-text">Our mission and vision</p>
</section>

<section>
  <div class="container">
    <h2>Our Team</h2>
    <div class="grid compact">
      <article class="text-center">
        <div class="bg-card rounded-full w-full max-w-sm m-auto p-2xl mb-md">Avatar</div>
        <h4>Team Member</h4>
        <p class="muted">Role</p>
      </article>
      <!-- More team members -->
    </div>
  </div>
</section>
```

### 8. Pricing Page
```html
<section>
  <div class="container">
    <h2>Choose Your Plan</h2>
    <div class="grid">
      <article>
        <h3>Basic</h3>
        <p class="text-2xl accent bold">$9<span class="text-sm">/mo</span></p>
        <ul class="flex-col gap-sm mt-lg">
          <li>Feature 1</li>
          <li>Feature 2</li>
        </ul>
        <footer>
          <button class="full">Get Started</button>
        </footer>
      </article>
      <!-- More pricing tiers -->
    </div>
  </div>
</section>
```

### 9. Login/Signup
```html
<section>
  <div class="container max-w-md">
    <article class="bg-secondary rounded p-2xl">
      <h2>Sign In</h2>
      <form class="flex-col gap-lg mt-xl">
        <input type="email" placeholder="Email" class="p-md bg-card rounded border">
        <input type="password" placeholder="Password" class="p-md bg-card rounded border">
        <button type="submit" class="full">Sign In</button>
        <div class="text-center">
          <a href="#" class="accent">Forgot password?</a>
        </div>
      </form>
      <div class="text-center mt-lg">
        <button class="outline full">Sign in with Google</button>
      </div>
    </article>
  </div>
</section>
```

### 10. Documentation/Help Center
```html
<main class="flex">
  <aside class="max-w-sm p-lg bg-secondary">
    <nav class="flex-col gap-md">
      <h3>Documentation</h3>
      <a href="#">Getting Started</a>
      <a href="#">API Reference</a>
      <a href="#">Guides</a>
    </nav>
  </aside>
  
  <article class="flex-1 p-lg">
    <h1>Page Title</h1>
    <p>Content goes here</p>
    <pre><code>Code examples</code></pre>
  </article>
</main>
```

### 11. Profile/Settings
```html
<section>
  <div class="container">
    <div class="flex gap-xl">
      <aside class="max-w-sm">
        <article class="bg-secondary rounded p-lg text-center">
          <div class="bg-card rounded-full w-full max-w-md m-auto p-2xl mb-md">Avatar</div>
          <h3>User Name</h3>
          <p class="muted">user@example.com</p>
        </article>
      </aside>
      
      <article class="flex-1">
        <h2>Settings</h2>
        <div class="flex-col gap-lg mt-xl">
          <div class="bg-secondary rounded p-lg">
            <h4>Profile</h4>
            <form class="flex-col gap-md mt-md">
              <input type="text" placeholder="Name" class="p-md bg-card rounded border">
              <button>Save Changes</button>
            </form>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
```

### 12. 404/Error Page
```html
<section class="hero">
  <h1>404</h1>
  <p class="hero-text">Page not found</p>
  <div class="btn-group">
    <a href="/" role="button">Go Home</a>
    <a href="#" role="button" class="outline">Search</a>
  </div>
</section>
```