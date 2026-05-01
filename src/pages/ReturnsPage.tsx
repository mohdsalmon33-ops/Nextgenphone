import React from 'react';
import { RotateCcw, Box, ArrowRight, ShieldCheck } from 'lucide-react';
import { useStore } from '../store';

export const ReturnsPage = () => {
  const { addToast } = useStore();
  const [orderId, setOrderId] = React.useState('');
  const [reason, setReason] = React.useState('');

  const handleReturn = (e: React.FormEvent) => {
    e.preventDefault();
    addToast('Return request submitted. We will email you the shipping label.', 'success');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-violet-100 dark:bg-violet-900/30 rounded-full mb-6">
          <RotateCcw className="h-10 w-10 text-violet-600 dark:text-violet-400" />
        </div>
        <h1 className="font-heading text-4xl font-bold mb-4">Hassle-Free Returns</h1>
        <p className="text-lg opacity-80">Not completely satisfied? Return your device within 30 days for a full refund.</p>
      </div>

      <div className="glass dark:glass rounded-3xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Start a Return</h2>
        <form onSubmit={handleReturn} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 opacity-80">Order Number</label>
              <input required type="text" placeholder="NXG-XXXXX" value={orderId} onChange={e => setOrderId(e.target.value)} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 opacity-80">Reason for Return</label>
              <select required value={reason} onChange={e => setReason(e.target.value)} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 [&>option]:text-black dark:[&>option]:text-black">
                <option value="" disabled>Select reason...</option>
                <option value="changed_mind">Changed my mind</option>
                <option value="defective">Defective or broken</option>
                <option value="wrong_item">Received wrong item</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full py-4 btn-glow rounded-xl font-bold mt-2">
            Generate Return Label
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass dark:glass-light rounded-2xl p-6 flex flex-col items-center text-center">
          <Box className="h-8 w-8 text-blue-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Original Packaging</h3>
          <p className="opacity-70 text-sm">Please return the device with all original accessories and packaging to avoid restocking fees.</p>
        </div>
        <div className="glass dark:glass-light rounded-2xl p-6 flex flex-col items-center text-center">
          <ShieldCheck className="h-8 w-8 text-green-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Data Privacy</h3>
          <p className="opacity-70 text-sm">Ensure you back up your data and factory reset the device before sending it back.</p>
        </div>
      </div>
    </div>
  );
};
