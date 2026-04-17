import React from 'react'
import { EventoComponent } from '../../components/eventos/EventoComponent'
import './envento.css'
import { TableComponent } from '../../components/share/TableComponent'
import { eliminarCategoria } from '../../services/catalogos/categorias/categorias.services';

export function EventoView({data, respuesta}) {
  
  return (
   <>
   <h1 className='text-center text-4xl font-bold mb-6'>Eventos</h1>
   <div className='w-full px-4 sm:px-6 lg:px-8'>
      <div className='overflow-x-auto shadow-md sm:rounded-lg mb-6'>
        <EventoComponent />
      </div>
   </div>
   </>
  )
}
