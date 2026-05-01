import React from 'react';
import { useStore } from '../store';
import { Product } from '../types';
import { Heart, Star, ShoppingCart, GitCompare } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { wishlist, toggleWishlist, addToCart, compareList, toggleCompare } = useStore();
  const isWishlisted = wishlist.includes(product.id);
  const isCompared = compareList.some(p => p.id === product.id);

  return (
    <div className="group relative glass dark:glass-light rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.3)] transition-all duration-300">
      
      {/* Tags */}
      <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
        {product.tags.map(tag => (
          <span key={tag} className={`px-2 py-1 text-xs font-bold rounded-md
            ${tag === 'Sale' ? 'bg-red-500 text-white' : 
              tag === 'New' ? 'bg-blue-500 text-white' : 
              'bg-black/40 text-white backdrop-blur-md'}`}>
            {tag}
          </span>
        ))}
      </div>

      {/* Floating Actions */}
      <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
        <button 
          onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
          className={`p-2 rounded-full glass border border-white/20 transition-colors ${isWishlisted ? 'text-pink-500 bg-black/10' : 'text-gray-400 hover:text-pink-500 bg-white/10'}`}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); toggleCompare(product); }}
          className={`p-2 rounded-full glass border border-white/20 transition-colors ${isCompared ? 'text-blue-500 bg-black/10' : 'text-gray-400 hover:text-blue-500 bg-white/10'}`}
          title="Compare"
        >
          <GitCompare className="h-4 w-4" />
        </button>
      </div>

      {/* Image Mock */}
      <div 
        onClick={onClick}
        className={`w-full aspect-[4/5] cursor-pointer relative overflow-hidden ${product.images[0]}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* Faux phone details to make it look less like standard gradients */}
        <div className="absolute inset-x-8 top-12 bottom-8 rounded-[2rem] border-[6px] border-black inline-flex justify-center shadow-2xl bg-black/10 backdrop-blur-sm">
           <div className="w-1/3 h-5 bg-black rounded-b-xl absolute top-0"></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2 cursor-pointer" onClick={onClick}>
          <div>
            <p className="text-xs text-violet-500 font-bold tracking-wider uppercase mb-1">{product.brand}</p>
            <h3 className="font-heading font-bold text-lg leading-tight group-hover:text-violet-500 transition-colors line-clamp-1">{product.name}</h3>
          </div>
          <div className="flex items-center space-x-1 bg-yellow-400/10 text-yellow-500 px-2 py-1 rounded-lg text-xs font-bold">
            <Star className="h-3 w-3 fill-current" />
            <span>{product.rating}</span>
          </div>
        </div>

        <div className="flex items-end space-x-2 mb-4">
          <span className="text-2xl font-bold font-heading">${product.price}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm opacity-50 line-through mb-1">${product.originalPrice}</span>
          )}
        </div>

        {/* Specs highlight */}
        <div className="grid grid-cols-2 gap-2 mb-5 text-xs opacity-70">
          <div>📱 {product.specs.display.split(' ')[0]}</div>
          <div>💾 {product.specs.storage}</div>
          <div>⚡ {product.specs.ram}</div>
          <div>🔋 {product.specs.battery}</div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className={`text-xs font-bold ${
            product.stockStatus === 'In Stock' ? 'text-green-500' :
            product.stockStatus === 'Low Stock' ? 'text-orange-500' :
            'text-red-500'
          }`}>
            • {product.stockStatus}
          </span>
          <button 
            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
            disabled={product.stockStatus === 'Out of Stock'}
            className="flex items-center space-x-2 bg-black/5 dark:bg-white/10 hover:bg-violet-500 hover:text-white disabled:opacity-50 disabled:hover:bg-black/5 px-4 py-2 rounded-xl text-sm font-bold transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
