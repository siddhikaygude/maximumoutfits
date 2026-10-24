import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { MessageCircle, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { store, whatsappLink } from '../data/store';
import { useReducedMotion } from '../hooks/useReducedMotion';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const WA_MESSAGE = "Hi Maximum Outfits, I'm browsing your demo website and have an enquiry.";

/**
 * Navbar Component for Maximum Outfits.
 * Sticky header with animated underline on active/hover links,
 * WhatsApp quick-link, cart button with badge, and full-featured mobile drawer.
 *
 * @param {Object} props
 * @param {number} [props.cartCount=0]
 * @param {() => void} [props.onCartClick]
 */
export default function Navbar({ cartCount = 0, onCartClick }) {
  const location = useLocation();
  const isReducedMotion = useReducedMotion();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);

  // Monitor scroll for thin beige bottom border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMobileMenuOpen]);

  const waUrl = (store.whatsappLink ? store.whatsappLink(WA_MESSAGE) : whatsappLink(WA_MESSAGE));

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-cream/90 backdrop-blur-md transition-colors duration-200 ${
          isScrolled ? 'border-b border-beige shadow-xs' : 'border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Left: Wordmark */}
          <Link
            to="/"
            className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-espresso select-none group flex items-baseline gap-1"
            aria-label="Maximum Outfits - Home"
          >
            <span>Maximum</span>
            <span className="italic text-brick font-medium">Outfits</span>
          </Link>

          {/* Center (Desktop Links) */}
          <nav
            className="hidden md:flex items-center gap-8 relative"
            onMouseLeave={() => setHoveredPath(null)}
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isCurrentRoute = location.pathname === link.path;
              const isUnderlined = hoveredPath ? hoveredPath === link.path : isCurrentRoute;

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  className={({ isActive }) =>
                    `relative py-2 text-sm font-medium transition-colors tracking-wide select-none ${
                      isActive ? 'text-espresso font-semibold' : 'text-espresso/80 hover:text-espresso'
                    }`
                  }
                >
                  {link.name}

                  {isUnderlined && (
                    isReducedMotion ? (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-brick rounded-full" />
                    ) : (
                      <motion.span
                        layoutId="navbar-underline"
                        className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-brick rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right: Actions (WhatsApp, Cart, Mobile Menu toggle) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp Icon Button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Maximum Outfits on WhatsApp"
              className="p-2 text-espresso hover:text-brick hover:bg-beige/40 rounded-full transition-colors flex items-center justify-center"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={21} aria-hidden="true" />
            </a>

            {/* Cart Icon Button with count badge */}
            <button
              type="button"
              onClick={onCartClick}
              aria-label={`Shopping bag containing ${cartCount} item${cartCount === 1 ? '' : 's'}`}
              className="relative p-2 text-espresso hover:text-brick hover:bg-beige/40 rounded-full transition-colors flex items-center justify-center cursor-pointer"
            >
              <ShoppingBag size={21} aria-hidden="true" />
              <span
                className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-cream bg-brick rounded-full leading-none shadow-xs"
                aria-hidden="true"
              >
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              className="md:hidden p-2 text-espresso hover:text-brick rounded-md transition-colors flex items-center justify-center cursor-pointer"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={isReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={isReducedMotion ? false : { opacity: 0 }}
              transition={{ duration: isReducedMotion ? 0 : 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-espresso/40 backdrop-blur-xs z-50 md:hidden"
              aria-hidden="true"
            />

            {/* Slide-in menu from right */}
            <motion.aside
              id="mobile-navigation-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              initial={isReducedMotion ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={isReducedMotion ? false : { x: '100%' }}
              transition={
                isReducedMotion
                  ? { duration: 0 }
                  : { type: 'spring', damping: 28, stiffness: 280 }
              }
              className="fixed top-0 right-0 bottom-0 w-[84%] max-w-sm bg-blush shadow-2xl z-50 flex flex-col justify-between p-6 overflow-y-auto md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-espresso/10">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-2xl font-semibold tracking-tight text-espresso flex items-baseline gap-1"
                >
                  <span>Maximum</span>
                  <span className="italic text-brick font-medium">Outfits</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-2 text-espresso hover:text-brick hover:bg-beige/50 rounded-full transition-colors cursor-pointer"
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>

              {/* Drawer Links with staggered fade-in */}
              <nav className="flex flex-col gap-6 my-auto py-8" aria-label="Mobile Navigation Links">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={isReducedMotion ? false : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={
                      isReducedMotion
                        ? { duration: 0 }
                        : { delay: 0.08 + index * 0.06, duration: 0.25 }
                    }
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `font-display text-3xl font-medium tracking-tight block transition-colors ${
                          isActive
                            ? 'text-brick italic underline decoration-brick/40 underline-offset-8'
                            : 'text-espresso hover:text-brick'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer with WhatsApp CTA */}
              <div className="pt-6 border-t border-espresso/10 flex flex-col gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3 px-4 bg-espresso text-cream hover:bg-brick font-medium text-sm rounded-md transition-colors shadow-sm"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </a>

                <div className="text-center text-xs text-espresso/70 font-body">
                  <p className="font-medium text-espresso/85">{store.phoneDisplay}</p>
                  <p className="mt-0.5 truncate">{store.address}</p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
