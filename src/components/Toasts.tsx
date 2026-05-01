import React from 'react';
import { useStore } from '../store';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toasts = () => {
  const { toasts } = useStore();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col space-y-2 pointer-events-none">
      {toasts.map((toast) => (
        <div 
          key={toast.id}
          className={`flex items-center space-x-3 px-4 py-3 rounded-xl shadow-2xl glass transform transition-transform animate-in slide-in-from-right-8 pointer-events-auto
            ${toast.type === 'success' ? 'border-green-500/50 bg-green-500/10' : 
              toast.type === 'error' ? 'border-red-500/50 bg-red-500/10' : 
              'border-blue-500/50 bg-blue-500/10'} backdrop-blur-xl`}
        >
          {toast.type === 'success' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
          {toast.type === 'error' && <AlertCircle className="h-5 w-5 text-red-500" />}
          {toast.type === 'info' && <Info className="h-5 w-5 text-blue-500" />}
          <span className="font-medium text-sm text-gray-900 dark:text-gray-100">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
