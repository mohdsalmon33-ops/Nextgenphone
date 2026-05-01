import React, { useState } from 'react';
import { useStore } from '../store';
import { X, CreditCard, ShieldCheck } from 'lucide-react';

export const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cartTotal, promoDiscount, clearCart, addToast } = useStore();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', address: '', city: '', zip: '',
    cardNumber: '', expiry: '', cvc: ''
  });

  if (!isCheckoutOpen) return null;

  const discountAmount = cartTotal * promoDiscount;
  const finalTotal = cartTotal - discountAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Process payment
      setIsCheckoutOpen(false);
      clearCart();
      setStep(1);
      addToast('Payment successful! Your order is on the way.', 'success');
      setFormData({
        name: '', email: '', address: '', city: '', zip: '',
        cardNumber: '', expiry: '', cvc: ''
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCheckoutOpen(false)}></div>
      <div className="relative w-full max-w-2xl glass dark:glass rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-all">
        
        {/* Order Summary Sidebar */}
        <div className="w-full md:w-1/3 bg-black/5 dark:bg-white/5 p-6 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 hidden md:block">
          <h3 className="font-heading font-bold text-lg mb-4">Order Summary</h3>
          <div className="space-y-3 text-sm opacity-80 mb-6">
            <div className="flex justify-between"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
            {promoDiscount > 0 && <div className="flex justify-between text-green-500"><span>Discount</span><span>-${discountAmount.toFixed(2)}</span></div>}
            <div className="flex justify-between font-bold text-base pt-3 border-t border-black/10 dark:border-white/10 opacity-100">
              <span>Total</span><span className="text-violet-500">${finalTotal.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs opacity-60">
            <ShieldCheck className="h-4 w-4" />
            <span>Secure 256-bit SSL encryption</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 p-6 sm:p-8">
          <button onClick={() => setIsCheckoutOpen(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center space-x-2 mb-8">
            <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-violet-500' : 'bg-black/10 dark:bg-white/10'}`}></div>
            <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-violet-500' : 'bg-black/10 dark:bg-white/10'}`}></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 ? (
              <div className="animate-in fade-in slide-in-from-right-4">
                <h2 className="font-heading text-2xl font-bold mb-6">Shipping Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium mb-1 opacity-80">Full Name</label>
                    <input required type="text" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium mb-1 opacity-80">Email</label>
                    <input required type="email" value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium mb-1 opacity-80">Address</label>
                    <input required type="text" value={formData.address} onChange={e=>setFormData({...formData, address: e.target.value})} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium mb-1 opacity-80">City</label>
                    <input required type="text" value={formData.city} onChange={e=>setFormData({...formData, city: e.target.value})} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium mb-1 opacity-80">Zip Code</label>
                    <input required type="text" value={formData.zip} onChange={e=>setFormData({...formData, zip: e.target.value})} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-right-4">
                <h2 className="font-heading text-2xl font-bold mb-6 flex items-center"><CreditCard className="h-6 w-6 mr-3 text-violet-500" /> Payment</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 opacity-80">Card Number</label>
                    <input required type="text" placeholder="0000 0000 0000 0000" maxLength={19} value={formData.cardNumber} onChange={e=>setFormData({...formData, cardNumber: e.target.value})} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 font-mono" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 opacity-80">Expiry (MM/YY)</label>
                      <input required type="text" placeholder="MM/YY" maxLength={5} value={formData.expiry} onChange={e=>setFormData({...formData, expiry: e.target.value})} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 font-mono" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 opacity-80">CVC</label>
                      <input required type="text" placeholder="123" maxLength={4} value={formData.cvc} onChange={e=>setFormData({...formData, cvc: e.target.value})} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 font-mono" />
                    </div>
                  </div>
                </div>
                
                {/* Mobile order summary */}
                <div className="md:hidden mt-6 pt-6 border-t border-black/10 dark:border-white/10">
                  <div className="flex justify-between font-bold text-base">
                    <span>Total to pay</span><span className="text-violet-500">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 pt-6 flex space-x-3">
              {step === 2 && (
                <button type="button" onClick={() => setStep(1)} className="px-6 py-3 rounded-xl border border-black/10 dark:border-white/10 font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  Back
                </button>
              )}
              <button type="submit" className="flex-1 py-3 px-4 btn-glow rounded-xl font-bold shadow-lg">
                {step === 1 ? 'Continue to Payment' : `Pay $${finalTotal.toFixed(2)}`}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};
