import React, { useState } from 'react';
import { useStore } from '../store';
import { ShoppingCart, Heart, User, Search, Moon, Sun, Menu, X, LogOut, Settings, RotateCcw } from 'lucide-react';
import { AuthModal } from './AuthModal';

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ searchTerm, setSearchTerm }) => {
  const { isDark, toggleTheme, cartCount, wishlist, setIsCartOpen, setIsWishlistOpen, user, logout, currentPage, setCurrentPage } = useStore();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 w-full glass dark:glass border-b border-white/10 dark:border-white/10 shadow-sm backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <button onClick={() => setCurrentPage('home')} className="font-heading font-bold text-2xl tracking-tighter text-gradient text-glow">
                NexGen
              </button>
            </div>

            {/* Desktop Navigation & Search */}
            <div className="hidden md:flex items-center space-x-8 flex-1 ml-12">
              <div className="flex space-x-6 text-sm font-medium">
                <button onClick={() => setCurrentPage('home')} className={`transition-colors ${currentPage === 'home' ? 'text-violet-500 font-bold' : 'hover:text-violet-500'}`}>Home</button>
                <button onClick={() => setCurrentPage('refurbished')} className={`transition-colors ${currentPage === 'refurbished' ? 'text-violet-500 font-bold' : 'hover:text-violet-500'}`}>Refurbished</button>
                <button onClick={() => setCurrentPage('trade-in')} className={`transition-colors ${currentPage === 'trade-in' ? 'text-violet-500 font-bold' : 'hover:text-violet-500'}`}>Trade-In</button>
                <button onClick={() => setCurrentPage('track-order')} className={`transition-colors ${currentPage === 'track-order' ? 'text-violet-500 font-bold' : 'hover:text-violet-500'}`}>Track Order</button>
              </div>
              
              <div className="flex-1 max-w-md relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search phones, brands, specs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-black/10 dark:border-white/10 rounded-full leading-5 bg-black/5 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 sm:text-sm transition-all"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
              </button>
              
              <button onClick={() => setIsWishlistOpen(true)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors relative">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-pink-500 text-white text-[10px] font-bold text-center leading-4">
                    {wishlist.length}
                  </span>
                )}
              </button>

              <button onClick={() => setIsCartOpen(true)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-blue-500 text-white text-[10px] font-bold text-center leading-4">
                    {cartCount}
                  </span>
                )}
              </button>

              {user ? (
                <div className="relative">
                  <button 
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="flex items-center space-x-2 p-1 pl-2 pr-3 rounded-full hover:bg-black/5 dark:hover:bg-white/10 border border-black/5 dark:border-white/5 transition-all"
                  >
                    <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-violet-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                      {user.avatar ? <img src={user.avatar} alt="Avatar" className="rounded-full" /> : user.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium hidden sm:block">{user.name.split(' ')[0]}</span>
                  </button>
                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg glass dark:glass-light ring-1 ring-black ring-opacity-5 z-50 overflow-hidden">
                      <div className="py-1">
                        <button onClick={() => { setCurrentPage('profile'); setIsUserDropdownOpen(false); }} className="flex w-full items-center px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">
                          <User className="h-4 w-4 mr-2" /> My Profile
                        </button>
                        <button onClick={() => { setCurrentPage('returns'); setIsUserDropdownOpen(false); }} className="flex w-full items-center px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">
                          <RotateCcw className="h-4 w-4 mr-2" /> Returns
                        </button>
                        <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">
                          <Settings className="h-4 w-4 mr-2" /> Settings
                        </button>
                        <button onClick={() => { logout(); setIsUserDropdownOpen(false); setCurrentPage('home'); }} className="flex w-full items-center px-4 py-2 text-sm text-red-500 hover:bg-black/5 dark:hover:bg-white/10">
                          <LogOut className="h-4 w-4 mr-2" /> Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button onClick={() => setIsAuthOpen(true)} className="hidden sm:flex items-center space-x-1 btn-glow px-4 py-2 rounded-full text-sm">
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </button>
              )}

              {/* Mobile menu button */}
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 pt-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl md:hidden flex flex-col items-center space-y-8 p-8 animate-in slide-in-from-top-4">
          <button onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }} className={`text-2xl font-bold ${currentPage === 'home' ? 'text-violet-500' : ''}`}>Home</button>
          <button onClick={() => { setCurrentPage('refurbished'); setIsMobileMenuOpen(false); }} className={`text-2xl font-bold ${currentPage === 'refurbished' ? 'text-violet-500' : ''}`}>Refurbished</button>
          <button onClick={() => { setCurrentPage('trade-in'); setIsMobileMenuOpen(false); }} className={`text-2xl font-bold ${currentPage === 'trade-in' ? 'text-violet-500' : ''}`}>Trade-In</button>
          <button onClick={() => { setCurrentPage('track-order'); setIsMobileMenuOpen(false); }} className={`text-2xl font-bold ${currentPage === 'track-order' ? 'text-violet-500' : ''}`}>Track Order</button>
          
          <div className="w-full max-w-sm mt-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 rounded-full bg-black/5 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {isAuthOpen && <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />}
    </>
  );
};
