import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { categorias } from '../../../services/catalogos/categorias/categorias.services'

export function CategoriasView() {
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
    <NavLink to='/crear'>Crear Categoria</NavLink>
  )
}
