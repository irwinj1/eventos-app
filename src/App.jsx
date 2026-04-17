import { useState } from 'react'
import { CrearCategoriaView } from './views/catalogos/categorias/CrearCategoriaView'
import {DashboardRoute} from './Navigation/Dashboard'
import { Auth } from './Navigation/auth'
import './utils/css/app.css'
import { LayoutProvider } from './context/SidebarContext'

function App() {
  
  const [isLogin,setIsLogin] = useState(true)
  
const AppRoutes = ()=>isLogin ? <DashboardRoute /> : <Auth />

  return (
    <LayoutProvider>
      <AppRoutes />
    </LayoutProvider>
  )
}

export default App
