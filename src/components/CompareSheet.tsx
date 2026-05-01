import React from 'react';
import { useStore } from '../store';
import { X, GitCompare } from 'lucide-react';

export const CompareSheet = () => {
  const { compareList, toggleCompare, isCompareOpen, setIsCompareOpen } = useStore();

  return (
    <>
      {/* Floating Button if sheet is closed but there are items */}
      {!isCompareOpen && compareList.length > 0 && (
        <button 
          onClick={() => setIsCompareOpen(true)}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 btn-glow px-6 py-3 rounded-full flex items-center space-x-2 animate-in slide-in-from-bottom"
        >
          <GitCompare className="h-5 w-5" />
          <span>Compare {compareList.length} Phone{compareList.length > 1 ? 's' : ''}</span>
        </button>
      )}

      {/* The Sheet */}
      <div 
        className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 transition-opacity duration-300 ${isCompareOpen && compareList.length > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCompareOpen(false)}></div>
        
        <div className={`relative w-full max-w-6xl max-h-[90vh] glass dark:glass rounded-3xl shadow-2xl p-6 overflow-hidden flex flex-col transform transition-transform duration-300 ${isCompareOpen ? 'translate-y-0 scale-100' : 'translate-y-full scale-95'}`}>
          <button onClick={() => setIsCompareOpen(false)} className="absolute top-4 right-4 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors z-20">
            <X className="h-6 w-6" />
          </button>
          
          <h2 className="font-heading text-2xl font-bold mb-6 flex items-center">
            <GitCompare className="h-6 w-6 mr-3 text-violet-500" />
            Product Comparison
          </h2>

          <div className="flex-1 overflow-auto custom-scrollbar">
            <div className="grid grid-cols-4 gap-6 min-w-[800px]">
              
              {/* Feature/Spec Row Labels */}
              <div className="col-span-1 space-y-6 pt-[180px] font-medium opacity-70 border-r border-black/10 dark:border-white/10 pr-6">
                <div className="h-10 flex items-center">Price</div>
                <div className="h-10 flex items-center">Rating</div>
                <div className="h-14 flex items-center">Display</div>
                <div className="h-14 flex items-center">Processor</div>
                <div className="h-10 flex items-center">RAM</div>
                <div className="h-10 flex items-center">Storage</div>
                <div className="h-14 flex items-center">Camera</div>
                <div className="h-10 flex items-center">Battery</div>
                <div className="h-10 flex items-center">OS</div>
              </div>

              {/* Product Columns */}
              {compareList.map(product => (
                <div key={product.id} className="col-span-1 flex flex-col relative text-sm">
                  {/* Remove Button */}
                  <button onClick={() => toggleCompare(product)} className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full translate-x-2 -translate-y-2 hover:bg-red-600 transition-colors z-10">
                    <X className="h-3 w-3" />
                  </button>

                  <div className={`w-full h-32 rounded-xl ${product.images[0]} mb-3 shadow-inner relative`}></div>
                  <h3 className="font-bold text-lg leading-tight mb-1">{product.name}</h3>
                  <p className="text-violet-500 text-xs font-bold uppercase tracking-wider mb-4 h-4">{product.brand}</p>
                  
                  <div className="space-y-6 flex-1">
                    <div className="h-10 flex items-center text-xl font-bold text-gradient">${product.price}</div>
                    <div className="h-10 flex items-center font-bold text-yellow-500">{product.rating}</div>
                    <div className="h-14 flex items-center">{product.specs.display}</div>
                    <div className="h-14 flex items-center">{product.specs.processor}</div>
                    <div className="h-10 flex items-center font-bold text-blue-500">{product.specs.ram}</div>
                    <div className="h-10 flex items-center font-bold text-violet-500">{product.specs.storage}</div>
                    <div className="h-14 flex items-center text-xs opacity-80">{product.specs.camera}</div>
                    <div className="h-10 flex items-center font-bold text-green-500">{product.specs.battery}</div>
                    <div className="h-10 flex items-center">{product.specs.os}</div>
                  </div>
                </div>
              ))}

              {/* Empty placeholder if < 3 */}
              {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                <div key={i} className="col-span-1 flex flex-col items-center justify-center border-2 border-dashed border-black/10 dark:border-white/10 rounded-2xl opacity-50">
                  <p className="text-center p-4">Add another phone to compare</p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
