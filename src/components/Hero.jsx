import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { store, whatsappLink } from '../data/store';
import { images } from '../data/images';
import { useReducedMotion } from '../hooks/useReducedMotion';

const HERO_WA_MESSAGE = "Hi Maximum Outfits, I'm visiting your demo site and would like to enquire about your collection.";

/**
 * Hero Component for Maximum Outfits.
 * Editorial fashion layout with animated headline, layered photo composition,
 * warm color overlay, smooth scroll parallax, and responsive structure.
 */
export default function Hero() {
  const isReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Gentle scroll parallax offsets for depth on desktop (disabled if reduced motion is requested)
  const yArch = useTransform(scrollY, [0, 600], [0, isReducedMotion ? 0 : -20]);
  const yOverlap = useTransform(scrollY, [0, 600], [0, isReducedMotion ? 0 : 30]);
  const yPill = useTransform(scrollY, [0, 600], [0, isReducedMotion ? 0 : -35]);

  const waUrl = store.whatsappLink ? store.whatsappLink(HERO_WA_MESSAGE) : whatsappLink(HERO_WA_MESSAGE);
  // Quiet address line formatting as requested
  const displayAddress = store.address.includes("Lajpat Nagar II")
    ? "K-50, Block K, Lajpat Nagar II"
    : store.address;

  return (
    <section
      aria-label="Welcome to Maximum Outfits"
      className="relative overflow-hidden bg-cream pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-18 lg:pb-24 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10">
            {/* Small location label above headline */}
            <motion.div
              initial={isReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isReducedMotion ? { duration: 0 } : { duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush/70 border border-beige/60 text-espresso text-xs tracking-widest uppercase font-medium mb-4 sm:mb-5 self-start shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brick" aria-hidden="true" />
              <span>Lajpat Nagar, New Delhi</span>
            </motion.div>

            {/* Headline with staggered reveal */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold tracking-tight text-espresso leading-[1.12] mb-5 sm:mb-6">
              <span className="block overflow-hidden">
                <motion.span
                  initial={isReducedMotion ? false : { y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={
                    isReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
                  }
                  className="block"
                >
                  Dress for every
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={isReducedMotion ? false : { y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={
                    isReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
                  }
                  className="block"
                >
                  <span className="italic text-brick font-medium">occasion</span>, under one roof.
                </motion.span>
              </span>
            </h1>

            {/* Subtext */}
            <motion.p
              initial={isReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                isReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.5, delay: 0.22, ease: 'easeOut' }
              }
              className="font-body text-base sm:text-lg text-espresso/75 leading-relaxed max-w-xl mb-7 sm:mb-8"
            >
              Menswear, ladies' wear, footwear and festive outfits at Maximum Outfits. Browse the sample collection of this concept demo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={isReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                isReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.5, delay: 0.32, ease: 'easeOut' }
              }
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <Link
                to="/shop"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-brick text-cream rounded-full font-medium text-sm sm:text-base shadow-sm hover:bg-brick/95 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <span>Explore the collection</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-cream/90 text-espresso border border-espresso/25 rounded-full font-medium text-sm sm:text-base hover:border-espresso hover:bg-beige/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle
                  size={18}
                  className="text-brick transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                />
                <span>Ask on WhatsApp</span>
              </a>
            </motion.div>

            {/* Quiet address line */}
            <motion.div
              initial={isReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={
                isReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.4 }
              }
              className="mt-7 sm:mt-8 pt-4 flex items-center gap-2 text-xs sm:text-sm text-espresso/65 font-body border-t border-espresso/10 max-w-lg"
            >
              <MapPin size={15} className="text-brick shrink-0" aria-hidden="true" />
              <span>Visit us: {displayAddress}</span>
            </motion.div>
          </div>

          {/* Right Column: Layered Photo Cards Composition */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-4 sm:py-8 overflow-visible">
            {/* Background depth blobs */}
            <div
              className="absolute -top-4 -right-4 w-60 h-60 sm:w-80 sm:h-80 bg-blush/60 rounded-full filter blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 -left-4 w-52 h-52 sm:w-72 sm:h-72 bg-beige/70 rounded-full filter blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Composition bounds - engineered to fit mobile (375px) through desktop (1280px) without overflow */}
            <div className="relative w-full max-w-[310px] sm:max-w-[390px] md:max-w-[440px] h-[390px] sm:h-[480px] md:h-[530px] flex items-center justify-center">
              {/* Card 1: Large Arch-shaped Tall Card (Menswear Ethnic) */}
              <motion.div
                style={{ y: yArch }}
                initial={isReducedMotion ? false : { opacity: 0, scale: 0.94, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={
                  isReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }
                }
                className="absolute w-[190px] sm:w-[245px] md:w-[275px] h-[285px] sm:h-[370px] md:h-[410px] rounded-t-[6.5rem] sm:rounded-t-[8.5rem] rounded-b-3xl overflow-hidden shadow-2xl shadow-espresso/15 ring-1 ring-beige/70 z-10"
              >
                <img
                  src={images.menswearEthnic}
                  alt="Festive menswear and designer ethnic sherwanis on display at Maximum Outfits"
                  width={275}
                  height={410}
                  loading="eager"
                  className="w-full h-full object-cover object-[center_70%]"
                />
                {/* Warm editorial tint overlay */}
                <div
                  className="absolute inset-0 bg-[#2A211D]/10 mix-blend-multiply pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <span className="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-4 text-[10px] sm:text-[11px] uppercase tracking-wider text-cream/90 font-medium font-body bg-espresso/50 backdrop-blur-xs px-2.5 py-0.5 sm:py-1 rounded-full">
                  Menswear & Ethnic
                </span>
              </motion.div>

              {/* Card 2: Overlapping Rounded Card (Ladies Kurtis & Festive Wear) */}
              <motion.div
                style={{ y: yOverlap }}
                initial={isReducedMotion ? false : { opacity: 0, scale: 0.9, y: 30 }}
                animate={
                  isReducedMotion
                    ? { opacity: 1, scale: 1, y: 0 }
                    : {
                        opacity: 1,
                        scale: 1,
                        y: [0, -6, 0],
                        transition: {
                          y: {
                            duration: 5.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                          opacity: { duration: 0.7, delay: 0.25 },
                          scale: { duration: 0.7, delay: 0.25 },
                        },
                      }
                }
                className="absolute right-0 sm:-right-1 md:right-1 bottom-1 sm:bottom-4 w-[130px] sm:w-[170px] md:w-[195px] h-[130px] sm:h-[170px] md:h-[195px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-espresso/20 ring-4 ring-cream z-20"
              >
                <img
                  src={images.ladiesKurtisJeans}
                  alt="Curated festive kurtis and contemporary ladies wear collection"
                  width={195}
                  height={195}
                  loading="eager"
                  className="w-full h-full object-cover object-[center_35%]"
                />
                {/* Warm editorial tint */}
                <div
                  className="absolute inset-0 bg-[#2A211D]/10 mix-blend-multiply pointer-events-none"
                  aria-hidden="true"
                />
                <span className="absolute bottom-2 right-2 sm:bottom-2.5 sm:right-3 text-[9px] sm:text-[10px] uppercase tracking-wider text-cream/95 font-medium font-body bg-espresso/60 backdrop-blur-xs px-2 py-0.5 rounded-full">
                  Ladies Couture
                </span>
              </motion.div>

              {/* Card 3: Overlapping Circle / Pill Card (Footwear & Accessories) */}
              <motion.div
                style={{ y: yPill }}
                initial={isReducedMotion ? false : { opacity: 0, scale: 0.88, y: -15 }}
                animate={
                  isReducedMotion
                    ? { opacity: 1, scale: 1, y: 0 }
                    : {
                        opacity: 1,
                        scale: 1,
                        y: [0, 6, 0],
                        transition: {
                          y: {
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 0.6,
                          },
                          opacity: { duration: 0.7, delay: 0.38 },
                          scale: { duration: 0.7, delay: 0.38 },
                        },
                      }
                }
                className="absolute left-0 sm:-left-2 md:left-0 top-3 sm:top-5 w-[92px] sm:w-[118px] md:w-[135px] h-[92px] sm:h-[118px] md:h-[135px] rounded-full overflow-hidden shadow-lg shadow-espresso/20 ring-4 ring-cream z-30"
              >
                <img
                  src={images.footwearWall}
                  alt="Traditional embroidered juttis and ethnic footwear"
                  width={135}
                  height={135}
                  loading="eager"
                  className="w-full h-full object-cover object-center"
                />
                {/* Warm editorial tint */}
                <div
                  className="absolute inset-0 bg-[#2A211D]/10 mix-blend-multiply pointer-events-none"
                  aria-hidden="true"
                />
                <span className="absolute inset-x-0 bottom-2 text-center text-[8px] sm:text-[9px] uppercase tracking-wider text-cream font-medium font-body drop-shadow-sm">
                  Footwear
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
