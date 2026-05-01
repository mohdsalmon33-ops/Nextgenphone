import React from 'react';
import { ArrowRight, Star, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Background aesthetic blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/20 dark:bg-blue-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-50"></div>
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-violet-500/20 dark:bg-violet-600/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gaps-12 lg:gap-8 items-center">
          
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              The Future of <br className="hidden sm:block" />
              <span className="text-gradient text-glow">Mobile Tech</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover the absolute best smartphones on the planet. Premium unboxed experiences, exclusive deals, and next-generation power.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <a href="#phones" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base rounded-full btn-glow transform hover:-translate-y-1">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-white/20 text-base font-medium rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all">
                View Deals
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-gray-200 dark:border-white/10 pt-8 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">40+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Premium Phones</div>
              </div>
              <div>
                <div className="text-3xl font-bold flex items-center justify-center lg:justify-start text-gray-900 dark:text-white">
                  10K+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold flex items-center justify-center lg:justify-start text-gray-900 dark:text-white">
                  4.9<Star className="h-5 w-5 text-yellow-400 ml-1 fill-yellow-400" />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative hidden sm:block">
            {/* Abstract mockups floating */}
            <div className="relative w-full max-w-lg mx-auto h-[500px]">
              <div className="absolute top-10 right-10 w-64 h-[450px] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] border-8 border-gray-800 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 box-glow overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-4">
                  <div className="w-full h-8 bg-black/50 rounded-full mb-4"></div>
                  <div className="w-3/4 h-32 bg-black/30 rounded-xl mb-4"></div>
                  <div className="w-full h-20 bg-black/30 rounded-xl"></div>
                </div>
              </div>
              <div className="absolute top-20 left-4 w-56 h-[400px] bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-950 rounded-[2.5rem] border-4 border-white dark:border-gray-700 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 opacity-90 backdrop-blur-xl z-20"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
