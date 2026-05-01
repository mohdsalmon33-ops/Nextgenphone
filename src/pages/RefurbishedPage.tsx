import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { productsList } from '../data';
import { Award, Zap, Shield } from 'lucide-react';

export const RefurbishedPage = () => {
  const refurbishedProducts = productsList.map(p => ({
    ...p,
    price: p.price * 0.7, // 30% off
    name: `Refurbished ${p.name}`,
    id: `refurb-${p.id}`
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 font-bold text-sm mb-4">
          Certified Pre-Owned
        </div>
        <h1 className="font-heading text-5xl font-bold mb-6 text-gradient tracking-tight">Like New, For Less</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">Premium smartphones certified to work properly and look great, backed by a 1-year warranty.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 px-8">
        <div className="glass dark:glass rounded-2xl p-8 text-center flex flex-col items-center border-[0.5px] border-black/5 dark:border-white/5">
          <Award className="h-10 w-10 text-yellow-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Rigorous Testing</h3>
          <p className="opacity-70 text-sm leading-relaxed">Every device passes an intensive 100-point inspection covering hardware and software.</p>
        </div>
        <div className="glass dark:glass rounded-2xl p-8 text-center flex flex-col items-center border-[0.5px] border-black/5 dark:border-white/5">
          <Zap className="h-10 w-10 text-violet-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Battery Health</h3>
          <p className="opacity-70 text-sm leading-relaxed">Guaranteed minimum 85% battery capacity compared to a brand new device.</p>
        </div>
        <div className="glass dark:glass rounded-2xl p-8 text-center flex flex-col items-center border-[0.5px] border-black/5 dark:border-white/5">
          <Shield className="h-10 w-10 text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Full Warranty</h3>
          <p className="opacity-70 text-sm leading-relaxed">1-year comprehensive warranty covers any defects, just like a new phone.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-8">Available Refurbished Models</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {refurbishedProducts.map(product => (
          <ProductCard key={product.id} product={product as any} />
        ))}
      </div>
    </div>
  );
};
