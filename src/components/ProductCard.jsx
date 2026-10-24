import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Check } from 'lucide-react';
import { images } from '../data/images';
import { categories } from '../data/categories';

/**
 * Formats a number in Indian Rupee currency format (e.g., ₹3,499)
 */
export function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * ProductCard Component for Maximum Outfits.
 * Displays image with 4:5 aspect ratio, hover zoom, sample item tag,
 * category label, price in INR, and interactive 'Add to cart' feedback.
 */
export default function ProductCard({ product }) {
  const [toastMessage, setToastMessage] = useState(null);

  const imageSrc = images[product.imageKey] || images.menswearEthnic;
  const category = categories.find((c) => c.id === product.categoryId);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setToastMessage('Cart coming in next stage');
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  return (
    <article className="group relative flex flex-col bg-cream rounded-2xl overflow-hidden border border-beige/60 shadow-2xs hover:shadow-lg transition-all duration-300">
      {/* Toast Feedback */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="absolute top-3 inset-x-3 z-30 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-espresso text-cream text-xs font-medium rounded-full shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <Check size={14} className="text-blush" aria-hidden="true" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Card Link to Product Detail */}
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col flex-1 focus-visible:outline-2 focus-visible:outline-brick focus-visible:rounded-2xl"
        aria-label={`${product.name}, ${category ? category.name : ''}, ${formatPrice(product.price)}`}
      >
        {/* Image Container with 4:5 aspect ratio */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-beige/40">
          <img
            src={imageSrc}
            alt={product.name}
            width={320}
            height={400}
            loading="lazy"
            style={{ objectPosition: product.objectPosition || 'center' }}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Editorial Warm Overlay */}
          <div
            className="absolute inset-0 bg-[#2A211D]/10 mix-blend-multiply pointer-events-none"
            aria-hidden="true"
          />

          {/* Sample Item Badge */}
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-cream font-medium bg-espresso/75 backdrop-blur-xs rounded-full shadow-xs">
            Sample item
          </span>

          {/* Category Tag */}
          {category && (
            <span className="absolute bottom-3 left-3 z-10 px-2.5 py-0.5 text-[10px] tracking-wide text-espresso font-medium bg-cream/90 backdrop-blur-xs rounded-full shadow-2xs">
              {category.name}
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 p-4 sm:p-5 justify-between">
          <div>
            <h3 className="font-display text-lg sm:text-xl font-medium text-espresso group-hover:text-brick transition-colors leading-snug line-clamp-1 mb-1">
              {product.name}
            </h3>

            <p className="font-body text-xs text-espresso/65 line-clamp-1 mb-3">
              {product.description}
            </p>
          </div>

          {/* Bottom Bar: Price & Add to Cart */}
          <div className="flex items-center justify-between gap-2 pt-2 border-t border-beige/40">
            <span className="font-body text-base sm:text-lg font-semibold text-espresso">
              {formatPrice(product.price)}
            </span>

            <button
              type="button"
              onClick={handleAddToCart}
              aria-label={`Add ${product.name} to cart`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-beige/40 text-espresso hover:bg-brick hover:text-cream border border-espresso/15 hover:border-transparent transition-all duration-200 cursor-pointer active:scale-95"
            >
              <ShoppingBag size={14} aria-hidden="true" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}
