import React from 'react';
import { Truck, ShieldCheck, RotateCcw, Clock, CreditCard, Tag } from 'lucide-react';

export const Features = () => {
  const features = [
    { icon: <Truck className="h-8 w-8 text-violet-500" />, title: 'Free Shipping', desc: 'On all orders over $500' },
    { icon: <ShieldCheck className="h-8 w-8 text-blue-500" />, title: '1-Year Warranty', desc: 'Manufacturer guarantee included' },
    { icon: <RotateCcw className="h-8 w-8 text-pink-500" />, title: 'Easy Returns', desc: '30-day hassle-free returns' },
    { icon: <Clock className="h-8 w-8 text-violet-500" />, title: '24/7 Support', desc: 'Expert help when you need it' },
    { icon: <CreditCard className="h-8 w-8 text-blue-500" />, title: 'Secure Payment', desc: '256-bit encrypted checkout' },
    { icon: <Tag className="h-8 w-8 text-pink-500" />, title: 'Price Match', desc: 'Find it cheaper? We match it.' },
  ];

  return (
    <section className="py-20 bg-black/5 dark:bg-white/5 border-y border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all">
                {f.icon}
              </div>
              <h4 className="font-bold mb-1">{f.title}</h4>
              <p className="text-xs opacity-70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
