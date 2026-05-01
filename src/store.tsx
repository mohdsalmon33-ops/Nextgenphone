import React, { createContext, useContext, useEffect, useState } from 'react';
import { Product, CartItem, User } from './types';

interface StoreContextType {
  // Theme
  isDark: boolean;
  toggleTheme: () => void;
  
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  cartTotal: number;
  cartCount: number;
  promoDiscount: number;
  applyPromo: (code: string) => string; // returns message
  clearCart: () => void;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  
  // Compare
  compareList: Product[];
  toggleCompare: (product: Product) => void;
  
  // Auth
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  
  // UI State
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isCompareOpen: boolean;
  setIsCompareOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  
  // Toasts
  toasts: Toast[];
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  currentPage: 'home' | 'refurbished' | 'trade-in' | 'profile' | 'track-order' | 'returns';
  setCurrentPage: (page: 'home' | 'refurbished' | 'trade-in' | 'profile' | 'track-order' | 'returns') => void;

}

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within StoreProvider');
  return context;
};

export const StoreProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  
  // Initialize state from localStorage where appropriate
  const [cart, setCart] = useState<CartItem[]>(() => {
    try { const item = localStorage.getItem('cart'); return item ? JSON.parse(item) : []; } catch { return []; }
  });
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try { const item = localStorage.getItem('wishlist'); return item ? JSON.parse(item) : []; } catch { return []; }
  });
  const [user, setUser] = useState<User | null>(() => {
    try { const item = localStorage.getItem('user'); return item ? JSON.parse(item) : null; } catch { return null; }
  });
  
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [promoDiscount, setPromoDiscount] = useState(0);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'refurbished' | 'trade-in' | 'profile' | 'track-order' | 'returns'>('home');
  
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Add toast
  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const clearCart = () => {
    setCart([]);
    setPromoDiscount(0);
  };

  // Sync to local storage
  useEffect(() => { localStorage.setItem('cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem('wishlist', JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => { 
    if (user) localStorage.setItem('user', JSON.stringify(user)); 
    else localStorage.removeItem('user');
  }, [user]);

  // Theme Sync
  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    if (isDark) {
      root.classList.add('dark');
      body.classList.add('dark', 'bg-slate-950', 'text-slate-50');
      body.classList.remove('bg-slate-50', 'text-slate-900');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark', 'bg-slate-950', 'text-slate-50');
      body.classList.add('bg-slate-50', 'text-slate-900');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const exists = prev.find(item => item.product.id === product.id);
      if (exists) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { product, quantity }];
    });
    addToast(`${product.name} added to cart!`, 'success');
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return removeFromCart(productId);
    setCart(prev => prev.map(item => item.product.id === productId ? { ...item, quantity } : item));
  };

  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const applyPromo = (code: string) => {
    const c = code.toUpperCase();
    if (c === 'NEXGEN10') { setPromoDiscount(0.1); return '10% discount applied!'; }
    if (c === 'SAVE20') { setPromoDiscount(0.2); return '20% discount applied!'; }
    if (c === 'FREESHIP') { setPromoDiscount(0); return 'Free shipping applied!'; }
    setPromoDiscount(0);
    return 'Invalid promo code.';
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        addToast('Removed from wishlist', 'info');
        return prev.filter(id => id !== productId);
      }
      addToast('Added to wishlist', 'success');
      return [...prev, productId];
    });
  };

  const toggleCompare = (product: Product) => {
    setCompareList(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) return prev.filter(p => p.id !== product.id);
      if (prev.length >= 3) {
        addToast('Can only compare up to 3 phones', 'error');
        return prev;
      }
      return [...prev, product];
    });
  };

  const login = (userData: User) => {
    setUser(userData);
    addToast(`Welcome back, ${userData.name}!`, 'success');
  };

  const logout = () => {
    setUser(null);
    addToast('Logged out successfully', 'info');
  };

  return (
    <StoreContext.Provider value={{
      isDark, toggleTheme,
      cart, addToCart, removeFromCart, updateQuantity, cartTotal, cartCount, promoDiscount, applyPromo,
      wishlist, toggleWishlist,
      compareList, toggleCompare,
      user, login, logout,
      isCartOpen, setIsCartOpen,
      isWishlistOpen, setIsWishlistOpen,
      isCompareOpen, setIsCompareOpen,
      isCheckoutOpen, setIsCheckoutOpen,
      currentPage, setCurrentPage,
      clearCart,
      toasts, addToast
    }}>
      {children}
    </StoreContext.Provider>
  );
};
