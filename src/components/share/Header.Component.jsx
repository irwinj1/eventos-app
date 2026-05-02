import React from 'react'
import { useLayout } from '../../context/SidebarContext'
import { FaBarsStaggered, FaBell, FaMagnifyingGlass } from "react-icons/fa6";

export default function Header() {
  const { toggleMenu, isOpen } = useLayout()

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 w-full transition-all duration-300">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center gap-4">
            {/* Toggle Sidebar Button */}
            <button 
              onClick={toggleMenu}
              className="p-2.5 rounded-xl bg-gray-50 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all active:scale-95 shadow-sm border border-gray-100"
              title={isOpen ? "Ocultar menú" : "Mostrar menú"}
            >
              <FaBarsStaggered className="w-5 h-5" />
            </button>

            <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
              <FaMagnifyingGlass className="text-gray-400 w-4 h-4 mr-2" />
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="bg-transparent border-none outline-none text-sm text-gray-600 w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-indigo-600 transition-colors">
              <FaBell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="h-8 w-px bg-gray-100 mx-2"></div>

            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-900">Admin Usuario</p>
                <p className="text-xs text-gray-400 font-medium">Administrador</p>
              </div>
              <button className="flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-xl transition-all hover:ring-2 hover:ring-indigo-100">
                <img 
                  className="h-10 w-10 rounded-xl object-cover shadow-sm" 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Perfil" 
                />
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
