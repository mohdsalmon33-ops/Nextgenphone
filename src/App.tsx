import React, { useState, useMemo } from 'react';
import { useStore } from './store';
import { productsList } from './data';
import { Product } from './types';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandsMarquee } from './components/BrandsMarquee';
import { FilterSidebar } from './components/FilterSidebar';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CompareSheet } from './components/CompareSheet';
import { Toasts } from './components/Toasts';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { WishlistDrawer } from './components/WishlistDrawer';
import { AuthPage } from './components/AuthPage';

export default function App() {
  const { user } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(2000);
  const [sortOption, setSortOption] = useState('popular');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const allBrands = Array.from(new Set(productsList.map(p => p.brand)));

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = productsList;

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.brand.toLowerCase().includes(term) ||
        p.specs.processor.toLowerCase().includes(term)
      );
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }

    // Price filter
    result = result.filter(p => p.price <= priceRange);

    // Sorting
    result = [...result].sort((a, b) => {
      switch (sortOption) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'newest': return b.tags.includes('New') ? 1 : -1;
        case 'popular': default: return b.reviewCount - a.reviewCount;
      }
    });

    return result;
  }, [searchTerm, selectedBrands, priceRange, sortOption]);

  if (!user) {
    return (
      <>
        <AuthPage />
        <Toasts />
      </>
    );
  }

  return (
    <div className="min-h-screen relative selection:bg-violet-500/30">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <main>
        <Hero />
        <BrandsMarquee />

        <section id="phones" className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Discover the Collection</h2>
            <p className="opacity-70 max-w-2xl mx-auto">Use our filters to find the perfect device for your lifestyle.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <FilterSidebar 
              brands={allBrands} 
              selectedBrands={selectedBrands} 
              toggleBrand={toggleBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              sortOption={sortOption}
              setSortOption={setSortOption}
            />

            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="w-full text-center py-32 glass rounded-3xl border border-black/10 dark:border-white/10">
                  <p className="text-2xl font-heading mb-2">No results found</p>
                  <p className="opacity-60">Try adjusting your filters or search term.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onClick={() => setSelectedProduct(product)} 
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Deals Banner */}
        <section id="deals" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full rounded-[2.5rem] bg-gradient-to-tr from-blue-600 via-indigo-700 to-violet-800 p-10 sm:p-16 text-white shadow-[0_0_50px_rgba(139,92,246,0.3)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl mix-blend-screen -mb-20 -mr-20"></div>
            <div className="relative z-10 max-w-xl">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold tracking-wider uppercase backdrop-blur-md mb-6 inline-block text-yellow-300">Flash Sale - 24 Hours Only</span>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-6">Upgrade to Pro Level.</h2>
              <p className="text-blue-100 text-lg mb-8">Get up to 20% off flagship devices when you use promo code <strong className="text-white bg-black/20 px-2 py-1 rounded">SAVE20</strong> at checkout.</p>
              <button className="bg-white text-violet-900 px-8 py-4 rounded-full font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all">Claim Offer Now</button>
            </div>
            
            <div className="relative z-10 flex gap-4 text-center">
              <div className="bg-black/30 backdrop-blur-md p-4 rounded-2xl w-20">
                <div className="text-3xl font-bold font-heading">12</div>
                <div className="text-xs uppercase mt-1 opacity-80">Hours</div>
              </div>
              <div className="bg-black/30 backdrop-blur-md p-4 rounded-2xl w-20">
                <div className="text-3xl font-bold font-heading">45</div>
                <div className="text-xs uppercase mt-1 opacity-80">Mins</div>
              </div>
              <div className="bg-black/30 backdrop-blur-md p-4 rounded-2xl w-20">
                <div className="text-3xl font-bold font-heading">22</div>
                <div className="text-xs uppercase mt-1 opacity-80">Secs</div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <Testimonials />
        <Newsletter />
      </main>

      <footer className="footer bg-black/5 dark:bg-white/5 border-t border-black/10 dark:border-white/10 mt-0 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="font-heading font-bold text-3xl tracking-tighter text-gradient text-glow inline-block mb-4">NexGen</a>
            <p className="opacity-70 max-w-sm">The world's premier destination for high-end mobile technology. Curating the best flagship experience globally.</p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-70">
              <li><a href="#" className="hover:text-violet-500 hover:underline">Shop All Phones</a></li>
              <li><a href="#" className="hover:text-violet-500 hover:underline">Accessories</a></li>
              <li><a href="#" className="hover:text-violet-500 hover:underline">Trade-In Program</a></li>
              <li><a href="#" className="hover:text-violet-500 hover:underline">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 opacity-70">
              <li><a href="#" className="hover:text-violet-500 hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-violet-500 hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:text-violet-500 hover:underline">Return Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center opacity-50 text-sm border-t border-black/10 dark:border-white/10 pt-8">
          &copy; {new Date().getFullYear()} NexGen Phones. All rights reserved.
        </div>
      </footer>

      {/* Overlays / Modals */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <CartDrawer />
      <WishlistDrawer onProductClick={setSelectedProduct} />
      <CompareSheet />
      <Toasts />
    </div>
  );
}
