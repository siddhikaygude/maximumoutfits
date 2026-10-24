import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { categories } from '../data/categories';
import { images } from '../data/images';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * CategoryGrid Component for Maximum Outfits.
 * Displays a 2-column (mobile) to 4-column (desktop) grid of categories
 * with slow hover zoom, reveal-on-scroll animation, and links to /shop?category=<id>.
 */
export default function CategoryGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const isReducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      aria-labelledby="category-heading"
      className="bg-cream py-16 sm:py-20 lg:py-28 border-t border-beige/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="font-body text-xs uppercase tracking-widest text-brick font-semibold mb-2">
            Showroom Departments
          </p>
          <h2
            id="category-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-espresso"
          >
            Shop by category
          </h2>
          <p className="font-body text-sm sm:text-base text-espresso/70 mt-3 leading-relaxed">
            Select a department to view illustrative sample outfits and tailored garments.
          </p>
        </div>

        {/* 2 columns mobile, 4 columns desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {categories.map((category, index) => {
            const imageSrc = images[category.imageKey] || images.menswearEthnic;

            return (
              <motion.div
                key={category.id}
                initial={isReducedMotion ? false : { opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={
                  isReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.5, delay: index * 0.06, ease: 'easeOut' }
                }
              >
                <Link
                  to={`/shop?category=${category.id}`}
                  className="group relative flex flex-col justify-end aspect-[3/4] rounded-2xl overflow-hidden bg-beige/40 shadow-xs hover:shadow-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-brick"
                  aria-label={`Shop ${category.name}`}
                >
                  {/* Background Image with Hover Zoom */}
                  <img
                    src={imageSrc}
                    alt={category.name}
                    width={340}
                    height={450}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Editorial Warm Overlay */}
                  <div
                    className="absolute inset-0 bg-[#2A211D]/15 mix-blend-multiply pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Gradient for Text Contrast */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/30 to-transparent pointer-events-none transition-opacity duration-300 group-hover:from-espresso/90"
                    aria-hidden="true"
                  />

                  {/* Tile Content */}
                  <div className="relative z-10 p-3.5 sm:p-5 flex flex-col">
                    <div className="flex items-start justify-between gap-1">
                      <h3 className="font-display text-base sm:text-xl md:text-2xl font-semibold text-cream leading-tight">
                        {category.name}
                      </h3>
                      <span className="p-1 sm:p-1.5 rounded-full bg-cream/20 text-cream backdrop-blur-xs shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </span>
                    </div>

                    <p className="font-body text-[11px] sm:text-xs text-cream/75 line-clamp-1 mt-1 font-normal">
                      {category.shortDescription}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
