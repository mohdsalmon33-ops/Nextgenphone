import React from 'react';
import { useStore } from '../store';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

export const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, cartTotal, promoDiscount, applyPromo, addToast } = useStore();
  const [promoCode, setPromoCode] = React.useState('');

  const handleApplyPromo = () => {
    const msg = applyPromo(promoCode);
    if (msg.includes('applied')) addToast(msg, 'success');
    else addToast(msg, 'error');
  };

  const discountAmount = cartTotal * promoDiscount;
  const finalTotal = cartTotal - discountAmount;

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-md shadow-2xl glass dark:glass transform transition-transform duration-300 flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="px-6 py-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
          <h2 className="font-heading text-2xl font-bold">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-70">
              <div className="w-24 h-24 mb-4 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center">
                <ShoppingCart className="h-10 w-10" />
              </div>
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm mt-2">Looks like you haven't added anything yet.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.product.id} className="flex space-x-4">
                  <div className={`w-20 h-24 rounded-xl ${item.product.images[0]} shadow-md`}></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-lg leading-tight">{item.product.name}</h3>
                    <p className="text-violet-500 font-bold">${item.product.price}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-3 bg-black/5 dark:bg-white/5 rounded-lg px-2 py-1">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1 hover:text-violet-500"><Minus className="h-4 w-4" /></button>
                        <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1 hover:text-violet-500"><Plus className="h-4 w-4" /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id)} className="text-red-500 p-2 hover:bg-red-500/10 rounded-full transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
            <div className="flex space-x-2 mb-6">
              <input 
                type="text" 
                placeholder="Promo Code (NEXGEN10)" 
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500" 
              />
              <button 
                onClick={handleApplyPromo}
                className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:opacity-90 transition-opacity"
              >
                Apply
              </button>
            </div>
            
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex justify-between opacity-80">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              {promoDiscount > 0 && (
                <div className="flex justify-between text-green-500 font-medium">
                  <span>Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-heading text-xl font-bold pt-2 border-t border-black/10 dark:border-white/10">
                <span>Total</span>
                <span className="text-violet-500">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={() => { addToast('Order placed successfully!', 'success'); setIsCartOpen(false); }}
              className="w-full py-4 rounded-xl btn-glow text-lg"
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};

// Also needed inline to fix missing import ShoppingCart in the empty state
import { ShoppingCart } from 'lucide-react';
