import React from 'react'
import '../../utils/css/enventoComponent.css'
export function EventoComponent({item}) {
   
    
  return (
    <div className='card shadow-xs'>
        <div className='title'>{item.nombre}</div>
    </div>
  )
}
