import React, { useState } from 'react';
import { useStore } from '../store';
import { Product } from '../types';
import { X, Star, ShoppingCart, Heart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart, wishlist, toggleWishlist, addToast } = useStore();
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  if (!product) return null;

  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full max-w-5xl max-h-[90vh] glass dark:glass rounded-3xl shadow-2xl overflow-y-auto custom-scrollbar flex flex-col lg:flex-row transform transition-all">
        
        <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors">
          <X className="h-6 w-6" />
        </button>

        {/* Left: Images */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col">
          <div className={`w-full aspect-[4/5] rounded-2xl ${product.images[activeImgIndex]} shadow-inner mb-4 relative flex items-center justify-center overflow-hidden`}>
            {/* Phone Silhouette */}
            <div className="absolute w-2/3 h-5/6 border-[8px] border-black/80 rounded-[3rem] shadow-2xl bg-black/20 backdrop-blur-sm">
                <div className="w-1/2 h-6 bg-black/80 mx-auto rounded-b-2xl"></div>
            </div>
            <div className="absolute bottom-4 left-4 flex gap-2">
               {product.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold">
                    {tag}
                  </span>
               ))}
            </div>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {product.images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImgIndex(i)}
                className={`flex-shrink-0 w-20 h-24 rounded-xl ${img} border-2 transition-all ${activeImgIndex === i ? 'border-violet-500 scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col">
          <div className="mb-6">
            <h2 className="text-violet-500 font-bold uppercase tracking-widest text-sm mb-2">{product.brand}</h2>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center bg-yellow-400/20 text-yellow-500 px-3 py-1.5 rounded-xl font-bold">
                <Star className="h-5 w-5 fill-current mr-1" />
                {product.rating}
              </div>
              <span className="text-sm opacity-60 underline cursor-pointer">{product.reviewCount} Reviews</span>
              <span className={`text-sm font-bold ${
                product.stockStatus === 'In Stock' ? 'text-green-500' :
                product.stockStatus === 'Low Stock' ? 'text-orange-500' : 'text-red-500'
              }`}>
                {product.stockStatus}
              </span>
            </div>

            <div className="flex items-end space-x-4 mb-8">
              <span className="text-5xl font-heading font-extrabold text-gradient text-glow">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-xl opacity-50 line-through mb-2">${product.originalPrice}</span>
              )}
            </div>
          </div>

          <p className="opacity-80 mb-8 max-w-md">
            Experience next-level innovation with the {product.name}. Featuring a top-tier {product.specs.display} and powered by the {product.specs.processor}.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
            <div className="flex items-center justify-between border border-black/10 dark:border-white/10 rounded-2xl px-4 py-2 w-full sm:w-32 bg-black/5 dark:bg-white/5">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-xl px-2 hover:text-violet-500">-</button>
              <span className="font-bold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="text-xl px-2 hover:text-violet-500">+</button>
            </div>
            
            <button 
              onClick={() => { addToCart(product, quantity); onClose(); }}
              disabled={product.stockStatus === 'Out of Stock'}
              className="flex-1 flex items-center justify-center space-x-2 btn-glow px-8 py-4 rounded-2xl disabled:opacity-50 disabled:hover:shadow-none"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>

            <button 
              onClick={() => toggleWishlist(product.id)}
              className={`p-4 rounded-2xl border transition-colors ${isWishlisted ? 'border-pink-500 bg-pink-500/10 text-pink-500' : 'border-black/10 dark:border-white/10 hover:border-violet-500 hover:text-violet-500'}`}
            >
              <Heart className={`h-6 w-6 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Features subset */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-black/10 dark:border-white/10 py-6 mb-8">
            <div className="flex items-center space-x-3 opacity-80">
              <ShieldCheck className="h-5 w-5 text-violet-500" />
              <span className="text-sm font-medium">1 Year Warranty</span>
            </div>
            <div className="flex items-center space-x-3 opacity-80">
              <Truck className="h-5 w-5 text-violet-500" />
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-3 opacity-80">
              <RotateCcw className="h-5 w-5 text-violet-500" />
              <span className="text-sm font-medium">30-Day Returns</span>
            </div>
          </div>

          {/* Specs Table */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4 flex items-center justify-between">
              Technical Specifications
            </h3>
            <div className="bg-black/5 dark:bg-white/5 rounded-2xl p-4 space-y-3 text-sm">
              <div className="flex justify-between border-b border-black/5 dark:border-white/5 pb-2"><span className="opacity-60">Display</span><span className="font-medium text-right">{product.specs.display}</span></div>
              <div className="flex justify-between border-b border-black/5 dark:border-white/5 pb-2"><span className="opacity-60">Processor</span><span className="font-medium text-right">{product.specs.processor}</span></div>
              <div className="flex justify-between border-b border-black/5 dark:border-white/5 pb-2"><span className="opacity-60">RAM</span><span className="font-medium text-right">{product.specs.ram}</span></div>
              <div className="flex justify-between border-b border-black/5 dark:border-white/5 pb-2"><span className="opacity-60">Storage</span><span className="font-medium text-right">{product.specs.storage}</span></div>
              <div className="flex justify-between border-b border-black/5 dark:border-white/5 pb-2"><span className="opacity-60">Camera</span><span className="font-medium text-right">{product.specs.camera}</span></div>
              <div className="flex justify-between border-b border-black/5 dark:border-white/5 pb-2"><span className="opacity-60">Battery</span><span className="font-medium text-right">{product.specs.battery}</span></div>
              <div className="flex justify-between"><span className="opacity-60">OS</span><span className="font-medium text-right">{product.specs.os}</span></div>
            </div>
          </div>

          {/* Reviews Toggle */}
          <div className="mt-8">
            <button 
              onClick={() => setIsReviewOpen(!isReviewOpen)}
              className="w-full py-4 text-center font-bold border rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors border-black/10 dark:border-white/10"
            >
              {isReviewOpen ? 'Hide Reviews' : 'View Reviews (3)'}
            </button>
            
            {isReviewOpen && (
               <div className="mt-6 space-y-4">
                 {product.reviews.map(r => (
                   <div key={r.id} className="bg-black/5 dark:bg-white/5 p-4 rounded-xl">
                     <div className="flex items-center justify-between mb-2">
                       <span className="font-bold">{r.name}</span>
                       <div className="flex items-center text-yellow-500 text-sm">
                         {Array.from({length: 5}).map((_,i) => <Star key={i} className={`h-3 w-3 ${i<r.rating ? 'fill-current' : 'opacity-30'}`} />)}
                       </div>
                     </div>
                     <p className="opacity-70 text-sm">{r.comment}</p>
                     <p className="text-xs opacity-40 mt-2">{r.date}</p>
                   </div>
                 ))}
                 
                 <div className="pt-4 mt-4 border-t border-black/10 dark:border-white/10">
                   <h4 className="font-bold mb-2">Write a Review</h4>
                   <textarea rows={3} className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-3 focus:outline-none focus:ring-2 ring-violet-500 mb-2"></textarea>
                   <button onClick={() => addToast('Review submitted!', 'success')} className="px-6 py-2 bg-violet-600 text-white rounded-lg text-sm font-bold">Submit</button>
                 </div>
               </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};
