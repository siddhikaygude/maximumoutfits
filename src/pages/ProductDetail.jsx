import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, ShoppingBag, Check, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { images } from '../data/images';
import { store } from '../data/store';
import { formatPrice } from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState(null);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex-1 max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-semibold text-espresso mb-3">
          Sample Product Not Found
        </h1>
        <p className="font-body text-sm text-espresso/70 mb-6">
          The requested sample item does not exist in our catalog.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brick text-cream text-sm font-medium hover:bg-brick/90 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Shop</span>
        </Link>
      </div>
    );
  }

  const category = categories.find((c) => c.id === product.categoryId);
  const imageSrc = images[product.imageKey] || images.menswearEthnic;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleAddToCart = () => {
    setToastMessage('Cart coming in next stage');
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  const waEnquiryText = `Hi Maximum Outfits, I am interested in ${product.name} (Sample item ₹${product.price}) from your demo website.`;
  const waUrl = store.whatsappLink(waEnquiryText);

  return (
    <div className="flex-1 bg-cream pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumb & Back */}
        <div className="flex items-center gap-2 text-xs font-body text-espresso/60 mb-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="hover:text-espresso flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Back</span>
          </button>
          <span>/</span>
          <Link to="/shop" className="hover:text-espresso">
            Shop
          </Link>
          {category && (
            <>
              <span>/</span>
              <Link to={`/shop?category=${category.id}`} className="hover:text-espresso">
                {category.name}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-espresso truncate max-w-[200px]">{product.name}</span>
        </div>

        {/* Product Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Image Card */}
          <div className="md:col-span-6 relative aspect-[4/5] rounded-3xl overflow-hidden bg-beige/40 border border-beige shadow-lg">
            <img
              src={imageSrc}
              alt={product.name}
              width={600}
              height={750}
              style={{ objectPosition: product.objectPosition || 'center' }}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-[#2A211D]/10 mix-blend-multiply pointer-events-none"
              aria-hidden="true"
            />
            <span className="absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-wider text-cream font-medium bg-espresso/80 backdrop-blur-xs rounded-full">
              Sample item
            </span>
          </div>

          {/* Right: Info */}
          <div className="md:col-span-6 flex flex-col pt-2">
            {category && (
              <span className="text-xs uppercase tracking-widest text-brick font-semibold mb-2">
                {category.name}
              </span>
            )}

            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-espresso tracking-tight mb-3">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-body text-2xl sm:text-3xl font-semibold text-espresso">
                {formatPrice(product.price)}
              </span>
              <span className="text-xs text-espresso/50 font-normal">Illustrative sample price</span>
            </div>

            <p className="font-body text-sm text-espresso/80 leading-relaxed mb-6 pb-6 border-b border-beige">
              {product.description}
            </p>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <span className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2.5">
                  Color: <span className="font-normal text-espresso/70">{selectedColor}</span>
                </span>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                      className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
                        selectedColor === c.name
                          ? 'border-brick scale-110 shadow-xs'
                          : 'border-cream shadow-2xs hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-8">
                <span className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2.5">
                  Size
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`min-w-[44px] px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                        selectedSize === s
                          ? 'bg-espresso text-cream border-espresso'
                          : 'bg-cream text-espresso border-espresso/20 hover:border-espresso'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Toast notice */}
            {toastMessage && (
              <div className="flex items-center gap-2 p-3 bg-blush border border-brick/30 text-espresso rounded-xl text-xs font-medium mb-4 animate-in fade-in">
                <Check size={16} className="text-brick" />
                <span>{toastMessage}</span>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-brick text-cream font-medium text-sm hover:bg-brick/95 transition-colors cursor-pointer shadow-sm active:scale-98"
              >
                <ShoppingBag size={18} />
                <span>Add to Cart</span>
              </button>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-cream text-espresso border border-espresso/30 hover:border-espresso hover:bg-beige/30 font-medium text-sm transition-colors"
              >
                <MessageCircle size={18} className="text-brick" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>

            {/* Store Guarantee note */}
            <div className="p-4 bg-beige/25 rounded-2xl border border-beige/60 text-xs text-espresso/70 flex items-start gap-2.5">
              <ShieldCheck size={18} className="text-brick shrink-0 mt-0.5" />
              <span>
                Maximum Outfits is a premier retail destination in Lajpat Nagar II, New Delhi. This concept demo showcases illustrative sample products.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
