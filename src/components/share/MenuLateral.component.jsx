import React from 'react'
import { Link, useLocation } from 'react-router'
import { useLayout } from '../../context/SidebarContext'
import { 
  FaChartPie, 
  FaUsers, 
  FaTags, 
  FaCalendarDays, 
  FaUserGear,
  FaRightFromBracket,
  FaBarsStaggered
} from "react-icons/fa6";

export function MenuLateral() {
  const { isOpen, toggleMenu } = useLayout()
  const location = useLocation()

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: FaChartPie },
    { path: '/usuarios', label: 'Usuarios', icon: FaUsers },
    { path: '/categoria', label: 'Categorías', icon: FaTags },
    { path: '/eventos', label: 'Eventos', icon: FaCalendarDays },
    { path: '/mis-eventos', label: 'Mis Eventos', icon: FaUserGear },
  ]

  return (
    <aside
      className="bg-white h-screen fixed left-0 top-0 border-r border-gray-100 transition-all duration-300 ease-in-out shadow-sm z-50 flex flex-col flex-shrink-0"
      style={{ 
        width: isOpen ? '18rem' : '0', 
        opacity: isOpen ? 1 : 0, 
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        visibility: isOpen ? 'visible' : 'hidden'
      }}
    >
      {/* Header */}
      <div className="p-6 flex-shrink-0 flex items-center justify-between border-b border-gray-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <h2 className="text-xl font-extrabold text-gray-900 tracking-tight whitespace-nowrap">Eventos App</h2>
        </div>
        {/* <button 
          onClick={toggleMenu}
          className="p-2 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors"
          title="Cerrar menú"
        >
          <FaBarsStaggered className="w-5 h-5" />
        </button> */}
      </div>

      {/* Navigation - Scrollable Area */}
      <nav className="flex-grow overflow-y-auto overflow-x-hidden px-4 py-2 space-y-1 custom-scrollbar">
        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 mt-4">Menú Principal</p>
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group whitespace-nowrap ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className={`w-5 h-5 mr-3 transition-transform group-hover:scale-110 ${isActive ? 'text-indigo-600' : 'text-gray-400'}`} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Footer - Fixed at bottom */}
      <div className="p-6 border-t border-gray-50 flex-shrink-0">
        <button className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition-all duration-200 group">
          <FaRightFromBracket className="w-5 h-5 mr-3 transition-transform group-hover:-translate-x-1" />
          <span className="whitespace-nowrap">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  )
}
