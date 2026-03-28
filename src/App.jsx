import { useState, useEffect } from 'react'
import { CrearCategoriaView } from './views/catalogos/categorias/CrearCategoriaView'
import './utils/css/app.css'
import { categorias } from './services/catalogos/categorias/categorias.services'
import { Evento } from './views/eventos'
function App() {
  const [data, setData] = useState([])
  
  const respuesta = async()=>{
    try {
      const data = await categorias()
      setData(data)
    } catch (error) {
      alert(error.message)
    }
  }
  useEffect(() => {
    respuesta()
  }, [])

  return (
    <>
      <CrearCategoriaView respuesta={respuesta}  />
      <Evento data={data} />
    </>
  )
}

export default App
