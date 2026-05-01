import React from 'react';
import { Smartphone, RefreshCw, DollarSign, Check } from 'lucide-react';
import { useStore } from '../store';

export const TradeInPage = () => {
  const { addToast } = useStore();
  const [device, setDevice] = React.useState('');
  const [condition, setCondition] = React.useState('');

  const submitTradeIn = (e: React.FormEvent) => {
    e.preventDefault();
    addToast(`Trade-in estimate requested for ${device}. Check your email!`, 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-gradient tracking-tight">Trade In & Upgrade</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">Turn your old device into credit towards a new NexGen phone. Fast, easy, and good for the planet.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <div className="glass dark:glass rounded-3xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold mb-8">Get Your Estimate</h2>
            <form onSubmit={submitTradeIn} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 opacity-80">What device are you trading in?</label>
                <input required type="text" placeholder="e.g. iPhone 13 Pro 256GB" value={device} onChange={e => setDevice(e.target.value)} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 opacity-80">Condition</label>
                <select required value={condition} onChange={e => setCondition(e.target.value)} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 [&>option]:text-black dark:[&>option]:text-black">
                  <option value="" disabled>Select condition...</option>
                  <option value="flawless">Flawless (Looks new)</option>
                  <option value="good">Good (Normal wear)</option>
                  <option value="cracked">Cracked Screen</option>
                  <option value="broken">broken (Does not turn on)</option>
                </select>
              </div>
              <button type="submit" className="w-full py-4 btn-glow rounded-xl font-bold text-lg mt-4">
                Calculate Value
              </button>
            </form>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="p-3 rounded-full bg-violet-100 dark:bg-violet-900 shadow-sm mr-6">
              <RefreshCw className="h-8 w-8 text-violet-600 dark:text-violet-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">1. Get a quote</h3>
              <p className="opacity-70 leading-relaxed">Tell us about your current device and its condition, and we'll give you an instant estimated value.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 shadow-sm mr-6">
              <Smartphone className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">2. Ship it for free</h3>
              <p className="opacity-70 leading-relaxed">We'll send you a prepaid shipping kit. Back up your data, factory reset the device, and put it in the mail.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 shadow-sm mr-6">
              <DollarSign className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">3. Get paid</h3>
              <p className="opacity-70 leading-relaxed">Once we receive and verify your device, you'll get instant credit or a direct transfer to your bank.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
