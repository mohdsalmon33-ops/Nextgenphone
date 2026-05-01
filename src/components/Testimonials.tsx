import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    { name: 'Sarah Jenkins', role: 'Tech Enthusiast', rating: 5, comment: 'NexGen completely transformed how I buy tech. The comparison tool is a lifesaver, and delivery was next day.', avatar: 'bg-gradient-to-br from-pink-500 to-orange-400' },
    { name: 'David Lee', role: 'Professional Photographer', rating: 5, comment: 'I needed a specific camera setup and the specs table here let me filter exactly what I needed. Buying process was buttery smooth.', avatar: 'bg-gradient-to-br from-blue-500 to-cyan-400' },
    { name: 'Emma Watson', role: 'Verified Buyer', rating: 4, comment: 'Great prices and amazing dark mode UI! Only giving 4 stars because the exact color I wanted was out of stock.', avatar: 'bg-gradient-to-br from-violet-500 to-purple-600' }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-heading text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="opacity-70 max-w-2xl mx-auto">Don't just take our word for it.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="glass dark:glass-light p-8 rounded-3xl relative hover:-translate-y-2 transition-transform duration-300">
            <div className={`absolute -top-6 left-8 w-12 h-12 rounded-full shadow-lg border-2 border-white dark:border-slate-900 ${r.avatar}`}></div>
            <div className="flex items-center text-yellow-500 mb-6 mt-2">
              {Array.from({length: 5}).map((_,j) => <Star key={j} className={`h-4 w-4 ${j < r.rating ? 'fill-current' : 'opacity-30'}`} />)}
            </div>
            <p className="opacity-80 italic mb-6">"{r.comment}"</p>
            <div>
              <h4 className="font-bold">{r.name}</h4>
              <p className="text-xs text-violet-500">{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
