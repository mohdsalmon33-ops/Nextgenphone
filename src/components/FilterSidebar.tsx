import React from 'react';

interface FilterProps {
  brands: string[];
  selectedBrands: string[];
  toggleBrand: (b: string) => void;
  priceRange: number;
  setPriceRange: (val: number) => void;
  sortOption: string;
  setSortOption: (val: string) => void;
}

export const FilterSidebar: React.FC<FilterProps> = ({ 
  brands, selectedBrands, toggleBrand, 
  priceRange, setPriceRange,
  sortOption, setSortOption 
}) => {
  return (
    <div className="w-full lg:w-64 flex-shrink-0 space-y-8 glass dark:glass-light rounded-2xl p-6 h-fit sticky top-24 border border-black/10 dark:border-white/10">
      
      {/* Sort */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-4">Sort By</h3>
        <select 
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          <option value="popular">Most Popular</option>
          <option value="newest">Newest First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Brands Filter */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-4">Brands</h3>
        <div className="space-y-3">
          {brands.map(brand => (
            <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedBrands.includes(brand) ? 'bg-violet-500 border-violet-500' : 'border-black/20 dark:border-white/20 group-hover:border-violet-500'}`}>
                {selectedBrands.includes(brand) && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
              </div>
              <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-4">Max Price: ${priceRange}</h3>
        <input 
          type="range" 
          min="200" max="2000" step="50"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-violet-500 bg-black/10 dark:bg-white/10 rounded-full appearance-none h-1.5"
        />
        <div className="flex justify-between text-xs opacity-50 mt-2">
          <span>$200</span>
          <span>$2000+</span>
        </div>
      </div>
      
    </div>
  );
};
