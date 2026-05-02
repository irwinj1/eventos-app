import React from 'react';

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      
      {/* Fondo oscuro */}
      <div 
        className='absolute inset-0 bg-black/50' 
        onClick={onClose}
      ></div>

      {/* Contenedor modal */}
      <div className='relative bg-white rounded-lg w-full max-w-3xl mx-4 max-h-[90vh] flex flex-col'>
        
        {/* Header */}
        <div className='flex justify-between items-center p-4 border-b'>
          <h2 className='font-semibold'>Crear Evento</h2>
          <button onClick={onClose} className='text-gray-500 hover:text-black'>
            ✕
          </button>
        </div>

        {/* Body con scroll */}
        <div className='p-4 overflow-y-auto'>
          {children}
        </div>

      </div>
    </div>
  );
}