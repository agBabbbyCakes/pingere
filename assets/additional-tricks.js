/**
 * Additional Tricks - Alpine.js Utilities for Ape Design System
 * Efficient, expert-level utilities for common interactions
 */

// Copy to clipboard utility
document.addEventListener('alpine:init', () => {
  Alpine.data('copyToClipboard', () => ({
    copied: false,
    async copy(text) {
      try {
        await navigator.clipboard.writeText(text);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 2000);
        } catch (e) {
          console.error('Fallback copy failed:', e);
        }
        document.body.removeChild(textarea);
      }
    }
  }));

  // Code viewer component with syntax highlighting support
  Alpine.data('codeViewer', (initialCode = '') => ({
    code: initialCode,
    copied: false,
    showLineNumbers: true,
    language: 'python',
    selectedLines: null,
    
    init() {
      // Auto-detect language from code if not set
      if (!initialCode && this.code) {
        this.detectLanguage();
      }
    },
    
    detectLanguage() {
      const firstLine = this.code.trim().split('\n')[0];
      if (firstLine.includes('def ') || firstLine.includes('import ') || firstLine.includes('from ')) {
        this.language = 'python';
      } else if (firstLine.includes('function') || firstLine.includes('const ') || firstLine.includes('let ')) {
        this.language = 'javascript';
      } else if (firstLine.includes('<!DOCTYPE') || firstLine.includes('<html')) {
        this.language = 'html';
      } else if (firstLine.includes('{') && firstLine.includes(':')) {
        this.language = 'json';
      }
    },
    
    async copyCode() {
      const textToCopy = this.selectedLines ? this.getSelectedText() : this.code;
      try {
        await navigator.clipboard.writeText(textToCopy);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
          this.selectedLines = null;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
            this.selectedLines = null;
          }, 2000);
        } catch (e) {
          console.error('Fallback copy failed:', e);
        }
        document.body.removeChild(textarea);
      }
    },
    
    getLines() {
      return this.code.split('\n');
    },
    
    getSelectedText() {
      if (!this.selectedLines) return this.code;
      const lines = this.getLines();
      const [start, end] = this.selectedLines;
      return lines.slice(start - 1, end).join('\n');
    },
    
    selectLines(start, end) {
      this.selectedLines = [start, end];
    },
    
    formatCode() {
      // Basic formatting - can be extended with prettier or similar
      return this.code;
    }
  }));

  // Code snippet component for individual copyable blocks (like modern SaaS docs)
  Alpine.data('codeSnippet', (code = '', language = 'python', title = '', showLineNumbers = false, showDownload = true, maxHeight = null) => ({
    code: code,
    language: language,
    title: title,
    copied: false,
    showLineNumbers: showLineNumbers,
    showDownload: showDownload,
    copyAnimation: false,
    expanded: false,
    collapsed: false,
    maxHeight: maxHeight,
    showCollapse: false,
    
    init() {
      // Check if code is long enough to collapse
      const lines = this.code.split('\n').length;
      if (lines > 15 || (this.maxHeight && this.code.length > 500)) {
        this.showCollapse = true;
        this.collapsed = true;
      }
      
      // Add keyboard shortcut hint
      this.$el.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'c' && e.target.closest('.code-snippet-content')) {
          // Allow native copy for selected text
          return;
        }
      });
    },
    
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
    
    copyWithoutComments() {
      // Remove single-line comments (// and #)
      let cleaned = this.code.replace(/\/\/.*$/gm, '').replace(/#.*$/gm, '');
      // Remove multi-line comments (/* */)
      cleaned = cleaned.replace(/\/\*[\s\S]*?\*\//g, '');
      // Remove empty lines
      cleaned = cleaned.split('\n').filter(line => line.trim()).join('\n');
      
      this.copyText(cleaned);
    },
    
    async copyText(text) {
      try {
        await navigator.clipboard.writeText(text);
        this.copied = true;
        this.copyAnimation = true;
        setTimeout(() => {
          this.copyAnimation = false;
        }, 300);
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          this.copied = true;
          this.copyAnimation = true;
          setTimeout(() => {
            this.copyAnimation = false;
          }, 300);
          setTimeout(() => {
            this.copied = false;
          }, 2000);
        } catch (e) {
          console.error('Fallback copy failed:', e);
        }
        document.body.removeChild(textarea);
      }
    },
    
    async copy() {
      this.copyText(this.code);
    },
    
    openFullscreen() {
      // Create modal for fullscreen code view
      const modal = document.createElement('div');
      modal.className = 'code-fullscreen-modal';
      modal.innerHTML = `
        <div class="code-fullscreen-content">
          <div class="code-fullscreen-header">
            <span>${this.title || this.language}</span>
            <button class="code-fullscreen-close" onclick="this.closest('.code-fullscreen-modal').remove()">×</button>
          </div>
          <pre class="code-fullscreen-body"><code>${this.escapeHtml(this.code)}</code></pre>
          <div class="code-fullscreen-actions">
            <button onclick="navigator.clipboard.writeText(\`${this.code.replace(/`/g, '\\`')}\`)">Copy</button>
            <button onclick="this.closest('.code-fullscreen-modal').remove()">Close</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      setTimeout(() => modal.classList.add('active'), 10);
    },
    
    escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    },
    
    download() {
      const blob = new Blob([this.code], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${this.title || this.language || 'code'}.${this.getFileExtension()}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },
    
    getFileExtension() {
      const extensions = {
        'python': 'py',
        'javascript': 'js',
        'typescript': 'ts',
        'solidity': 'sol',
        'bash': 'sh',
        'shell': 'sh',
        'html': 'html',
        'css': 'css',
        'json': 'json',
        'yaml': 'yml',
        'rust': 'rs',
        'go': 'go',
        'java': 'java',
        'cpp': 'cpp',
        'c': 'c'
      };
      return extensions[this.language.toLowerCase()] || 'txt';
    },
    
    selectAll() {
      const codeElement = this.$el.querySelector('.code-snippet-content code');
      if (codeElement) {
        const range = document.createRange();
        range.selectNodeContents(codeElement);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
    },
    
    getLines() {
      return this.code.split('\n');
    }
  }));

  // Toggle visibility component
  Alpine.data('toggle', (initialState = false) => ({
    open: initialState,
    toggle() {
      this.open = !this.open;
    },
    show() {
      this.open = true;
    },
    hide() {
      this.open = false;
    }
  }));

  // Tab component
  Alpine.data('tabs', (defaultTab = 0) => ({
    activeTab: defaultTab,
    setActive(index) {
      this.activeTab = index;
    },
    isActive(index) {
      return this.activeTab === index;
    }
  }));

  // Accordion component
  Alpine.data('accordion', () => ({
    openItems: new Set(),
    toggle(index) {
      if (this.openItems.has(index)) {
        this.openItems.delete(index);
      } else {
        this.openItems.add(index);
      }
    },
    isOpen(index) {
      return this.openItems.has(index);
    }
  }));

  // Modal component
  Alpine.data('modal', () => ({
    open: false,
    show() {
      this.open = true;
      document.body.style.overflow = 'hidden';
    },
    hide() {
      this.open = false;
      document.body.style.overflow = '';
    }
  }));

  // Tooltip component
  Alpine.data('tooltip', () => ({
    show: false,
    position: 'top',
    showTooltip() {
      this.show = true;
    },
    hideTooltip() {
      this.show = false;
    }
  }));

  // Debounce utility
  Alpine.data('debounce', (callback, delay = 300) => ({
    timeout: null,
    debounced(...args) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        callback(...args);
      }, delay);
    }
  }));

  // Form validation
  Alpine.data('formValidation', () => ({
    errors: {},
    touched: {},
    
    validate(field, value, rules) {
      this.touched[field] = true;
      const fieldErrors = [];
      
      if (rules.required && !value) {
        fieldErrors.push(`${field} is required`);
      }
      if (rules.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        fieldErrors.push(`${field} must be a valid email`);
      }
      if (rules.minLength && value && value.length < rules.minLength) {
        fieldErrors.push(`${field} must be at least ${rules.minLength} characters`);
      }
      if (rules.maxLength && value && value.length > rules.maxLength) {
        fieldErrors.push(`${field} must be no more than ${rules.maxLength} characters`);
      }
      
      if (fieldErrors.length > 0) {
        this.errors[field] = fieldErrors;
      } else {
        delete this.errors[field];
      }
      
      return fieldErrors.length === 0;
    },
    
    isValid() {
      return Object.keys(this.errors).length === 0;
    },
    
    hasError(field) {
      return this.touched[field] && this.errors[field];
    }
  }));

  // Search/filter utility
  Alpine.data('search', (items = []) => ({
    query: '',
    items: items,
    filteredItems: items,
    
    init() {
      this.$watch('query', () => {
        this.filter();
      });
    },
    
    filter() {
      if (!this.query.trim()) {
        this.filteredItems = this.items;
        return;
      }
      
      const query = this.query.toLowerCase();
      this.filteredItems = this.items.filter(item => {
        if (typeof item === 'string') {
          return item.toLowerCase().includes(query);
        }
        if (typeof item === 'object') {
          return Object.values(item).some(val => 
            String(val).toLowerCase().includes(query)
          );
        }
        return false;
      });
    }
  }));

  // Counter component
  Alpine.data('counter', (initialValue = 0) => ({
    count: initialValue,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = initialValue;
    }
  }));

  // Local storage persistence
  Alpine.data('persist', (key, defaultValue = null) => ({
    value: defaultValue,
    
    init() {
      const stored = localStorage.getItem(key);
      if (stored !== null) {
        try {
          this.value = JSON.parse(stored);
        } catch (e) {
          this.value = stored;
        }
      }
      
      this.$watch('value', (newValue) => {
        if (newValue !== null) {
          localStorage.setItem(key, typeof newValue === 'string' ? newValue : JSON.stringify(newValue));
        } else {
          localStorage.removeItem(key);
        }
      });
    }
  }));

  // Intersection observer for animations
  Alpine.data('intersect', (callback) => ({
    init() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            callback(entry);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(this.$el);
    }
  }));

  // Resize observer utility
  Alpine.data('resize', (callback) => ({
    init() {
      const observer = new ResizeObserver((entries) => {
        entries.forEach(entry => {
          callback(entry);
        });
      });
      
      observer.observe(this.$el);
    }
  }));
});

// Global clipboard helper
window.copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
};
