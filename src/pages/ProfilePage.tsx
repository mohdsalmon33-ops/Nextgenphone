import React from 'react';
import { useStore } from '../store';
import { User, Settings, Package, Heart, Bell, Shield, CreditCard } from 'lucide-react';

export const ProfilePage = () => {
  const { user, setCurrentPage } = useStore();

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Please log in to view your profile</h2>
        <button className="btn-glow px-8 py-3 rounded-full" onClick={() => setCurrentPage('home')}>Return Home</button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <div className="glass dark:glass rounded-3xl p-6 text-center">
            <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-tr from-violet-500 to-blue-500 flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg">
              {user.avatar ? <img src={user.avatar} alt="Avatar" className="rounded-full h-full w-full object-cover" /> : user.name.charAt(0)}
            </div>
            <h2 className="font-bold text-xl">{user.name}</h2>
            <p className="opacity-70 text-sm mb-4">{user.email}</p>
            <div className="bg-black/5 dark:bg-white/5 rounded-xl p-3 flex justify-between items-center text-sm">
              <span className="opacity-80">Reward Points</span>
              <span className="font-bold text-violet-500">1,250</span>
            </div>
          </div>

          <div className="glass dark:glass-light rounded-3xl overflow-hidden">
            <div className="border-b border-black/5 dark:border-white/5">
              <button className="w-full flex items-center px-6 py-4 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors bg-black/5 dark:bg-white/5 font-medium border-l-4 border-violet-500">
                <User className="h-5 w-5 mr-3 text-violet-500" /> Account Details
              </button>
            </div>
            <div className="border-b border-black/5 dark:border-white/5">
              <button onClick={() => setCurrentPage('track-order')} className="w-full flex items-center px-6 py-4 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors opacity-80 hover:opacity-100">
                <Package className="h-5 w-5 mr-3" /> Orders
              </button>
            </div>
            <div className="border-b border-black/5 dark:border-white/5">
              <button className="w-full flex items-center px-6 py-4 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors opacity-80 hover:opacity-100">
                <Heart className="h-5 w-5 mr-3" /> Wishlist
              </button>
            </div>
            <div className="border-b border-black/5 dark:border-white/5">
              <button className="w-full flex items-center px-6 py-4 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors opacity-80 hover:opacity-100">
                <CreditCard className="h-5 w-5 mr-3" /> Payment Methods
              </button>
            </div>
            <div>
              <button className="w-full flex items-center px-6 py-4 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors opacity-80 hover:opacity-100">
                <Settings className="h-5 w-5 mr-3" /> Preferences
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          <div className="glass dark:glass rounded-3xl p-8">
            <h3 className="font-heading text-2xl font-bold mb-6">Personal Information</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-80">Full Name</label>
                  <input type="text" defaultValue={user.name} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-80">Email Address</label>
                  <input type="email" defaultValue={user.email} className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-80">Phone Number</label>
                  <input type="tel" defaultValue="+1 (555) 000-0000" className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-80">Date of Birth</label>
                  <input type="date" defaultValue="1990-01-01" className="w-full px-4 py-3 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" />
                </div>
              </div>
              <div className="flex justify-end">
                <button type="button" className="btn-glow px-8 py-3 rounded-xl font-bold tracking-wide">
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass dark:glass rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <Bell className="h-6 w-6 mr-3 text-violet-500" />
                <h3 className="font-bold text-xl">Notifications</h3>
              </div>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 rounded-xl border border-black/5 dark:border-white/5 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5">
                  <div>
                    <div className="font-medium">Order Updates</div>
                    <div className="text-sm opacity-60">Get notified about status changes</div>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5 rounded text-violet-500" />
                </label>
                <label className="flex items-center justify-between p-4 rounded-xl border border-black/5 dark:border-white/5 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5">
                  <div>
                    <div className="font-medium">Exclusive Offers</div>
                    <div className="text-sm opacity-60">Marketing and promotions</div>
                  </div>
                  <input type="checkbox" className="h-5 w-5 rounded text-violet-500" />
                </label>
              </div>
            </div>

            <div className="glass dark:glass rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 mr-3 text-violet-500" />
                <h3 className="font-bold text-xl">Security</h3>
              </div>
              <div className="space-y-4">
                <button className="w-full flex justify-between items-center p-4 rounded-xl border border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <span className="font-medium">Change Password</span>
                  <span className="text-sm opacity-60 flex items-center">Last changed 3 months ago &rarr;</span>
                </button>
                <button className="w-full flex justify-between items-center p-4 rounded-xl border border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <span className="font-medium">Two-Factor Auth</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-bold rounded-md">Enabled</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
