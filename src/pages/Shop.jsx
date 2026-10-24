import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useReducedMotion } from '../hooks/useReducedMotion';

const ALL_FILTER = { id: 'all', name: 'All Departments' };

/**
 * Shop Page Component for Maximum Outfits.
 * Supports URL searchParams category filtering, sticky horizontal filter chips,
 * price/featured sorting, animated layout transitions, and empty state.
 */
export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isReducedMotion = useReducedMotion();

  const [sortBy, setSortBy] = useState('featured');

  const selectedCategory = searchParams.get('category') || 'all';

  const filterList = useMemo(() => [ALL_FILTER, ...categories], []);

  // Update query params when filter chip is clicked
  const handleCategorySelect = (categoryId) => {
    const nextParams = new URLSearchParams(searchParams);
    if (categoryId === 'all') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', categoryId);
    }
    setSearchParams(nextParams);
  };

  // Filter & Sort
  const displayedProducts = useMemo(() => {
    let result = products;

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.categoryId === selectedCategory);
    }

    const sorted = [...result];
    if (sortBy === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      // 'featured'
      sorted.sort((a, b) => {
        if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
        if (a.isNew !== b.isNew) return a.isNew ? -1 : 1;
        return 0;
      });
    }

    return sorted;
  }, [selectedCategory, sortBy]);

  const activeCategoryObj = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="flex-1 bg-cream pb-20">
      {/* Header Banner */}
      <section className="bg-cream pt-10 pb-8 sm:pt-14 sm:pb-10 border-b border-beige/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-brick font-semibold mb-2">
            Showroom Catalog
          </p>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-espresso mb-3">
            {activeCategoryObj ? activeCategoryObj.name : 'Shop Collections'}
          </h1>
          <p className="font-body text-xs sm:text-sm text-espresso/70 max-w-xl mx-auto">
            Sample products and illustrative prices for this concept demo.
          </p>
        </div>
      </section>

      {/* Sticky Filter & Sort Bar */}
      <div className="sticky top-18 z-30 bg-cream/95 backdrop-blur-md border-b border-beige shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Horizontally scrollable filter chips on mobile */}
          <div
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none select-none"
            role="tablist"
            aria-label="Category filters"
          >
            {filterList.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-espresso text-cream shadow-xs'
                      : 'bg-beige/40 text-espresso hover:bg-beige/80 hover:text-espresso'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-beige/40">
            <span className="text-xs text-espresso/60 font-body">
              {displayedProducts.length} item{displayedProducts.length === 1 ? '' : 's'}
            </span>

            <div className="relative inline-flex items-center">
              <label htmlFor="shop-sort-select" className="sr-only">
                Sort products
              </label>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-cream border border-espresso/20 rounded-full text-xs font-medium text-espresso shadow-2xs">
                <ArrowUpDown size={13} className="text-brick shrink-0" aria-hidden="true" />
                <select
                  id="shop-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-espresso text-xs font-medium focus:outline-none cursor-pointer pr-1"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {displayedProducts.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20 px-4 bg-beige/20 rounded-3xl border border-beige/60 max-w-xl mx-auto my-8">
            <SlidersHorizontal size={36} className="mx-auto text-brick/70 mb-3" aria-hidden="true" />
            <h2 className="font-display text-2xl font-semibold text-espresso mb-2">
              No products found
            </h2>
            <p className="font-body text-sm text-espresso/70 mb-6">
              There are currently no sample products matching this category selection.
            </p>
            <button
              type="button"
              onClick={() => handleCategorySelect('all')}
              className="px-6 py-2.5 bg-brick text-cream text-xs sm:text-sm font-medium rounded-full shadow-sm hover:bg-brick/90 transition-colors cursor-pointer"
            >
              Show all departments
            </button>
          </div>
        ) : (
          /* Products Grid with Layout Animation */
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {displayedProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={isReducedMotion ? false : { opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={isReducedMotion ? false : { opacity: 0, scale: 0.92 }}
                  transition={
                    isReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.28, ease: 'easeOut' }
                  }
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
