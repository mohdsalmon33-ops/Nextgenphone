import React from 'react';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

export const TrackOrderPage = () => {
  const [orderNumber, setOrderNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'tracking' | 'found'>('idle');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('tracking');
    setTimeout(() => {
      setStatus('found');
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl font-bold mb-8 text-center text-gradient">Track Your Order</h1>
        
        <div className="glass dark:glass rounded-3xl p-8 mb-8">
          <form onSubmit={handleTrack} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 opacity-80">Order Number</label>
                <input required type="text" placeholder="e.g. NXG-123456" value={orderNumber} onChange={e => setOrderNumber(e.target.value)} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 opacity-80">Email Address</label>
                <input required type="email" placeholder="Email used for order" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>
            </div>
            <button type="submit" disabled={status === 'tracking'} className="w-full py-4 btn-glow rounded-xl font-bold flex justify-center items-center">
              {status === 'tracking' ? <span className="animate-pulse">Locating Package...</span> : <span>Track Order</span>}
            </button>
          </form>
        </div>

        {status === 'found' && (
          <div className="animate-in fade-in slide-in-from-bottom flex flex-col space-y-8 relative">
            <h2 className="font-heading text-2xl font-bold">Order: {orderNumber || 'NXG-123456'}</h2>
            
            <div className="glass dark:glass-light rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-black/5 dark:bg-white/5"></div>
              
              <div className="relative pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-10 mt-1 h-4 w-4 rounded-full bg-green-500 ring-4 ring-green-500/30"></div>
                  <h3 className="font-bold text-lg">Order Confirmed</h3>
                  <p className="text-sm opacity-60">May 1, 2026 - 08:30 AM</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-10 mt-1 h-4 w-4 rounded-full bg-green-500 ring-4 ring-green-500/30"></div>
                  <h3 className="font-bold text-lg flex items-center"><Package className="h-5 w-5 mr-2" /> Processing</h3>
                  <p className="text-sm opacity-60">May 1, 2026 - 10:45 AM</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[38px] mt-1 p-1 rounded-full bg-violet-500 ring-4 ring-violet-500/30">
                    <Truck className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-violet-600 dark:text-violet-400">Out for Delivery</h3>
                  <p className="text-sm opacity-60">May 2, 2026 - 07:15 AM</p>
                  <p className="mt-2 text-sm">Your package is currently out for delivery and will arrive by 8:00 PM today.</p>
                </div>
                
                <div className="relative opacity-40">
                  <div className="absolute -left-[38px] mt-1 p-1 rounded-full bg-gray-400 ring-4 ring-gray-400/30">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">Delivered</h3>
                  <p className="text-sm opacity-60">Pending</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
