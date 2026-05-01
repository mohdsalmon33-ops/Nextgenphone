import React, { useState } from 'react';
import { useStore } from '../store';
import { Send } from 'lucide-react';

export const Newsletter = () => {
  const { addToast } = useStore();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      addToast('Successfully subscribed to the newsletter!', 'success');
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-violet-600/10 dark:bg-violet-900/20 mix-blend-multiply"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-heading text-4xl font-bold mb-4">Stay in the Loop</h2>
        <p className="opacity-80 mb-8">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
          <input 
             type="email" 
             placeholder="Your email address" 
             required
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className="w-full pl-6 pr-32 py-4 rounded-full glass shadow-xl border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button 
            type="submit" 
            className={`absolute right-2 top-2 bottom-2 px-6 rounded-full flex items-center space-x-2 transition-all ${
              submitted ? 'bg-green-500 text-white' : 'btn-glow'
            }`}
          >
            <span>{submitted ? 'Subscribed!' : 'Subscribe'}</span>
            {!submitted && <Send className="h-4 w-4" />}
          </button>
        </form>
      </div>
    </section>
  );
};
