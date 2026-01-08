/**
 * Robust Mobile Menu System
 * Future-proof, accessible, and reusable mobile navigation
 * 
 * Features:
 * - Slide-in panel with overlay
 * - Body scroll lock
 * - Keyboard navigation (Escape to close)
 * - Focus management
 * - Click outside to close
 * - ARIA attributes for accessibility
 * - Theme switcher integration
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    overlaySelector: '#mobileMenuOverlay',
    panelSelector: '#mobileMenuPanel',
    toggleSelector: '#mobileMenuToggle',
    closeSelector: '#mobileMenuClose',
    bodyLockClass: 'mobile-menu-open',
    activeClass: 'active',
    animationDuration: 300
  };

  // State
  let isOpen = false;
  let savedScrollPosition = 0;

  // Get elements
  const getElements = () => {
    return {
      overlay: document.querySelector(CONFIG.overlaySelector),
      panel: document.querySelector(CONFIG.panelSelector),
      toggle: document.querySelector(CONFIG.toggleSelector),
      close: document.querySelector(CONFIG.closeSelector)
    };
  };

  // Lock body scroll
  const lockBodyScroll = () => {
    savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.style.top = `-${savedScrollPosition}px`;
    document.body.classList.add(CONFIG.bodyLockClass);
  };

  // Unlock body scroll
  const unlockBodyScroll = () => {
    document.body.classList.remove(CONFIG.bodyLockClass);
    document.body.style.top = '';
    window.scrollTo(0, savedScrollPosition);
  };

  // Open menu
  const openMenu = () => {
    const { overlay, panel, toggle } = getElements();
    if (!overlay || !panel || !toggle) return;

    isOpen = true;
    lockBodyScroll();
    
    overlay.classList.add(CONFIG.activeClass);
    panel.classList.add(CONFIG.activeClass);
    toggle.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-hidden', 'false');
    panel.setAttribute('aria-hidden', 'false');

    // Focus management - focus first focusable element
    const firstFocusable = panel.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
      setTimeout(() => firstFocusable.focus(), 50);
    }

    // Dispatch custom event
    document.dispatchEvent(new CustomEvent('mobileMenu:open'));
  };

  // Close menu
  const closeMenu = () => {
    const { overlay, panel, toggle } = getElements();
    if (!overlay || !panel || !toggle) return;

    isOpen = false;
    unlockBodyScroll();
    
    overlay.classList.remove(CONFIG.activeClass);
    panel.classList.remove(CONFIG.activeClass);
    toggle.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
    panel.setAttribute('aria-hidden', 'true');

    // Return focus to toggle button
    if (toggle) {
      setTimeout(() => toggle.focus(), 50);
    }

    // Dispatch custom event
    document.dispatchEvent(new CustomEvent('mobileMenu:close'));
  };

  // Toggle menu
  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Initialize
  const init = () => {
    const { overlay, panel, toggle, close } = getElements();
    
    if (!overlay || !panel || !toggle) {
      console.warn('Mobile menu elements not found');
      return;
    }

    // Toggle button
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close button
    if (close) {
      close.addEventListener('click', closeMenu);
    }

    // Close on overlay click
    overlay.addEventListener('click', closeMenu);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    });

    // Close on link click (navigation)
    const links = panel.querySelectorAll('a[href]');
    links.forEach(link => {
      link.addEventListener('click', () => {
        // Only close if it's not an anchor link on the same page
        const href = link.getAttribute('href');
        if (href && !href.startsWith('#')) {
          closeMenu();
        } else if (href && href.startsWith('#')) {
          // Close after a short delay to allow smooth scroll
          setTimeout(closeMenu, 100);
        }
      });
    });

    // Prevent panel clicks from closing menu
    panel.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Handle window resize - close menu if window becomes large
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 768 && isOpen) {
          closeMenu();
        }
      }, 250);
    });

    // Handle theme switcher in mobile menu
    const mobileThemeButton = document.getElementById('mobileThemeButton');
    const mobileThemeMenu = document.getElementById('mobileThemeMenu');
    
    if (mobileThemeButton && mobileThemeMenu) {
      mobileThemeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileThemeMenu.classList.toggle('open');
        mobileThemeButton.classList.toggle('open');
      });

      // Close theme menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileThemeButton.contains(e.target) && !mobileThemeMenu.contains(e.target)) {
          mobileThemeMenu.classList.remove('open');
          mobileThemeButton.classList.remove('open');
        }
      });

      // Handle theme selection
      const themeOptions = mobileThemeMenu.querySelectorAll('.theme-option');
      themeOptions.forEach(option => {
        option.addEventListener('click', () => {
          const theme = option.getAttribute('data-theme');
          
          // Trigger theme change (assuming theme system exists)
          if (typeof window.changeTheme === 'function') {
            window.changeTheme(theme);
          } else {
            // Fallback: direct theme change
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('ape-theme', theme);
            
            // Update mobile theme button text if themeNames exists
            if (typeof window.themeNames === 'object' && window.themeNames[theme]) {
              const mobileThemeButtonText = document.getElementById('mobileThemeButtonText');
              if (mobileThemeButtonText) {
                mobileThemeButtonText.textContent = window.themeNames[theme];
              }
            }
            
            // Update active state
            themeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Sync with main theme switcher if it exists
            const mainThemeButtonText = document.getElementById('themeButtonText');
            if (mainThemeButtonText && window.themeNames && window.themeNames[theme]) {
              mainThemeButtonText.textContent = window.themeNames[theme];
            }
            const mainThemeOptions = document.querySelectorAll('#themeMenu .theme-option');
            mainThemeOptions.forEach(opt => {
              opt.classList.remove('active');
              if (opt.getAttribute('data-theme') === theme) {
                opt.classList.add('active');
              }
            });
          }
          
          mobileThemeMenu.classList.remove('open');
          mobileThemeButton.classList.remove('open');
        });
      });
    }
  };

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export API for programmatic control
  window.MobileMenu = {
    open: openMenu,
    close: closeMenu,
    toggle: toggleMenu,
    isOpen: () => isOpen
  };

})();

