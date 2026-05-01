import React from 'react';
import { useStore } from '../store';
import { ProductCard } from './ProductCard';
import { productsList } from '../data';
import { X, Heart } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  onProductClick: (p: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ onProductClick }) => {
  const { isWishlistOpen, setIsWishlistOpen, wishlist } = useStore();
  
  const wishlistedProducts = productsList.filter(p => wishlist.includes(p.id));

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${isWishlistOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsWishlistOpen(false)}
      />
      
      <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-md shadow-2xl glass dark:glass transform transition-transform duration-300 flex flex-col ${isWishlistOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-6 py-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between shadow-sm z-10">
          <h2 className="font-heading text-2xl font-bold flex items-center">
             <Heart className="h-6 w-6 mr-2 text-pink-500 fill-pink-500" />
             My Wishlist
          </h2>
          <button onClick={() => setIsWishlistOpen(false)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scroll-smooth grid gap-6 grid-cols-1">
          {wishlistedProducts.length === 0 ? (
             <div className="h-full flex flex-col items-center justify-center text-center opacity-70">
               <div className="w-24 h-24 mb-4 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center">
                 <Heart className="h-10 w-10 text-pink-500" />
               </div>
               <p className="text-lg font-medium">Your wishlist is empty</p>
               <p className="text-sm mt-2">Save your favorite phones here!</p>
             </div>
          ) : (
             wishlistedProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onClick={() => {
                     onProductClick(product);
                     setIsWishlistOpen(false);
                  }} 
                />
             ))
          )}
        </div>
      </div>
    </>
  );
};
