import React, { useState } from 'react'
import { TableComponent } from '../../share/TableComponent'
import { CrearCategoria } from './crear/CrearCategoria.component'

export default function Categorias({ headers, items, actions, isOpen, onClose }) {

  return (
    <div className='w-full'>
      <div className='overflow-x-auto shadow-md sm:rounded-lg mb-6'>
        <TableComponent headers={headers} items={items} actions={actions} />
      </div>
      {/* //modal */}
      <CrearCategoria isOpen={isOpen} onClose={onClose} />
    </div>
  )
}
