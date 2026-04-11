import { useState } from 'react'
import { CrearCategoriaView } from './views/catalogos/categorias/CrearCategoriaView'
import {DashboardRoute} from './Navigation/Dashboard'
import { Auth } from './Navigation/auth'
import './utils/css/app.css'

function App() {
  
  const [isLogin,setIsLogin] = useState(false)
  


  return (
      <DashboardRoute />
  )
}

export default App
