import React from 'react';

export function Loader({ loading, message = "Cargando..." }) {
  if (!loading) return null;
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-900/40 backdrop-blur-sm transition-opacity">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="h-20 w-20 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent animate-spin"></div>
        
        {/* Inner Pulsing Circle */}
        <div className="absolute h-10 w-10 rounded-full bg-blue-500/20 animate-pulse flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
        </div>
      </div>
      
      {/* Loading Text */}
      <span className="mt-6 text-white font-medium tracking-widest text-sm uppercase animate-pulse">
        {message}
      </span>
    </div>
  );
}

export function InlineLoader() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="h-8 w-8 rounded-full border-2 border-gray-200 border-t-blue-500 animate-spin"></div>
    </div>
  );
}
