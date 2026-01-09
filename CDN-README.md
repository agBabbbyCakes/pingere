# Ape Design System - CDN Ready

This design system is structured to be easily deployed as a CDN package. All assets are self-contained and can be served from any CDN.

## CDN Structure

```
ape-design-system/
├── css/
│   └── ape-design.css          # Complete design system CSS
├── js/
│   ├── mobile-menu.js          # Mobile navigation
│   └── additional-tricks.js    # Alpine.js utilities & code components
└── index.html                  # Example usage
```

## CDN Usage

### Basic Setup

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  
  <!-- Ape Design System CSS -->
  <link rel="stylesheet" href="https://cdn.example.com/ape-design-system/css/ape-design.css">
  
  <!-- Alpine.js (required for interactive components) -->
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
  
  <!-- Ape Design System JS -->
  <script src="https://cdn.example.com/ape-design-system/js/mobile-menu.js" defer></script>
  <script src="https://cdn.example.com/ape-design-system/js/additional-tricks.js" defer></script>
</head>
<body data-theme="cyan">
  <!-- Your content -->
</body>
</html>
```

## Code Snippet Component

The code snippet component allows you to display copyable code blocks like modern SaaS documentation.

### Basic Usage

```html
<figure class="code-snippet" x-data="codeSnippet('pip install apeworx', 'bash', 'Terminal')">
  <div class="code-snippet-header">
    <span class="code-snippet-title" x-text="title || language"></span>
    <div class="code-snippet-actions">
      <button 
        class="code-snippet-copy-btn"
        :class="{ copied: copied }"
        @click="copy()"
        x-text="copied ? 'Copied!' : 'Copy'">
      </button>
    </div>
  </div>
  <div class="code-snippet-body">
    <pre class="code-snippet-content"><code x-text="code"></code></pre>
  </div>
</figure>
```

### Python Example

```html
<figure class="code-snippet" x-data="codeSnippet(`from ape import accounts, project

def main():
    account = accounts[0]
    contract = project.MyContract.deploy(sender=account)
    print(f'Deployed at: {contract.address}')`, 'python', 'Python')">
  <div class="code-snippet-header">
    <span class="code-snippet-title" x-text="title || language"></span>
    <div class="code-snippet-actions">
      <button 
        class="code-snippet-copy-btn"
        :class="{ copied: copied }"
        @click="copy()"
        x-text="copied ? 'Copied!' : 'Copy'">
      </button>
    </div>
  </div>
  <div class="code-snippet-body">
    <pre class="code-snippet-content"><code x-text="code"></code></pre>
  </div>
</figure>
```

## Semantic HTML Structure

The code snippet component uses semantic HTML:

- `<figure>` - Container for the code snippet
- `<div class="code-snippet-header">` - Header with title and actions
- `<div class="code-snippet-body">` - Body containing the code
- `<pre><code>` - Semantic code block

## Alpine.js Components

All interactive components use Alpine.js and are defined in `additional-tricks.js`:

- `codeSnippet(code, language, title)` - Code snippet with copy functionality
- `codeViewer(initialCode)` - Full-featured code viewer
- `copyToClipboard()` - Copy utility
- `toggle()` - Toggle visibility
- `tabs()` - Tab component
- `accordion()` - Accordion component
- `modal()` - Modal component
- `tooltip()` - Tooltip component
- And more...

## Themes

The design system supports multiple themes via the `data-theme` attribute:

```html
<body data-theme="cyan">   <!-- Professional Blue -->
<body data-theme="green">  <!-- Premium Emerald -->
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Custom Properties (CSS Variables)
- Backdrop Filter (for glass morphism)
- Clipboard API (with fallback for older browsers)

## Dependencies

- **Alpine.js 3.x** - Required for interactive components
- No other dependencies required

## CDN Deployment Checklist

- [ ] Minify CSS (`ape-design.css`)
- [ ] Minify JS files (`mobile-menu.js`, `additional-tricks.js`)
- [ ] Set proper CORS headers
- [ ] Enable gzip/brotli compression
- [ ] Set cache headers appropriately
- [ ] Test all components across browsers
- [ ] Verify Alpine.js compatibility
- [ ] Test clipboard functionality
- [ ] Verify theme switching works

## Versioning

When deploying to CDN, use versioned URLs:

```
https://cdn.example.com/ape-design-system/v1.0.0/css/ape-design.css
https://cdn.example.com/ape-design-system/v1.0.0/js/additional-tricks.js
```

## License

Part of the ApeWorX open-source ecosystem.
