import React from 'react'
import { crearCategoria } from '../../../services/catalogos/categorias/categorias.services'

export function CrearCategoriaView({respuesta}) {
  
        const nombre = document.getElementById('nombre')
        const color = document.getElementById('color')
        const icono = document.getElementById('icono')
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data = {
            nombre: nombre.value,
            color: color.value,
            icono: icono.value
        }
        const response = await crearCategoria(data)
        console.log(response);
        
        if(response){
            respuesta()
            nombre.value = ''
            color.value = ''
            icono.value = ''
        }
    }
        
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-1/2'>
          <h1 className='text-center text-4xl font-bold'>Crear Categoria</h1>
          <form className='flex flex-col gap-2'>
            <input type='text' placeholder='Nombre' className='border border-gray-300 rounded p-2' id='nombre' />
            <input type='text' placeholder='Color' className='border border-gray-300 rounded p-2' id='color' />
            <input type='text' placeholder='Icono' className='border border-gray-300 rounded p-2' id='icono' />

            <button type='submit' onClick={handleSubmit} className='bg-blue-500 text-white rounded p-2'>Crear</button>
          </form>
        </div>
      </div>
      <div >
        
      </div>
    </>
  )
}
