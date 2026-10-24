import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DemoBanner from './components/DemoBanner';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleCartClick = () => {
    console.log("Cart clicked. Count:", cartCount);
  };

  return (
    <div className="min-h-screen bg-cream text-espresso font-body flex flex-col selection:bg-blush selection:text-espresso">
      {/* Slim demo disclaimer at the very top */}
      <DemoBanner />

      {/* Main navigation */}
      <Navbar cartCount={cartCount} onCartClick={handleCartClick} />

      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Route content */}
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
