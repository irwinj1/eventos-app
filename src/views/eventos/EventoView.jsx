import React from 'react'
import { EventoComponent } from '../../components/eventos/EventoComponent'
import './envento.css'

export function Evento({data}) {
  return (
   <>
   <h1 className='text-center text-4xl font-bold'>Eventos</h1>
   <div className='grid grid-cols-4 gap-2'>
      {
        data.map(item=>(
          <EventoComponent item={item} key={item.id} />
        ))
      }
   </div>
   </>
  )
}
