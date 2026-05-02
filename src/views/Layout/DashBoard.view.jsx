import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../components/share/Header.Component'
import { MenuLateral } from '../../components/share/MenuLateral.component'
import { useLayout } from '../../context/SidebarContext'

export default function DashBoardView() {
  const { isOpen } = useLayout()

  return (
    <div className="flex h-full bg-gray-50 overflow-hidden relative">
      <MenuLateral />

      <div 
        className="flex flex-col flex-1 h-full transition-all duration-300 ease-in-out"
        style={{ paddingLeft: isOpen ? '18rem' : '0' }}
      >
        <Header />

        <main className="flex-1 overflow-y-auto p-6 bg-gray-50/50 custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  )
}