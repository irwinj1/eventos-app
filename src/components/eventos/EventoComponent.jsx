import React from 'react'
import '../../utils/css/enventoComponent.css'
import { eliminarCategoria } from '../../services/catalogos/categorias/categorias.services'
import { FaPen,FaBan,FaCheck    } from "react-icons/fa6";

export function EventoComponent({item, respuesta}) {
   
    const eliminar = async()=>{
        const response = await eliminarCategoria(item.id)
        console.log(response)
        if (response.status === 200) {
          respuesta()
        }
    }
    const handleEditar = ()=>{
      console.log('editar')
    }
  return (
    <>
    <div className='card shadow-xs'>
     
      <div className='flex justify-between'>
        <div className='title'>{item.nombre}</div>
       <div className='flex gap-2'>
         <FaPen className={item.estado ? 'text-blue-500' : 'text-gray-500'} command="show-modal" commandfor="dialog"  title='Editar' cursor='pointer' />
        {
          item.estado ? (
            <FaBan className='text-red-500' onClick={eliminar} title='Eliminar' cursor='pointer' />
          ) : (
            <FaCheck className='text-green-500' onClick={eliminar} title='Activar' cursor='pointer' />
          )
        }
       </div>
      </div>
    </div>
   
    </>
  )
}
