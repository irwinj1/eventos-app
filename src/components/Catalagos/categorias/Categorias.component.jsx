import React, { useState } from 'react'
import { TableComponent } from '../../share/TableComponent'
import { Modal } from '../../share/modal.component'

export default function Categorias({ headers, items, actions, isOpen, onClose }) {

  return (
    <div className='w-full'>
      <div className='overflow-x-auto shadow-md sm:rounded-lg mb-6'>
        <TableComponent headers={headers} items={items} actions={actions} />
      </div>
      {/* //modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2 className='text-2xl font-bold mb-4'>Crear Categoria</h2>
        <form className='flex flex-col gap-4'>
          <input type='text' placeholder='Nombre' className='border border-gray-300 rounded p-2' />
          <input type='text' placeholder='Color' className='border border-gray-300 rounded p-2' />
          <input type='text' placeholder='Icono' className='border border-gray-300 rounded p-2' />
          <button type='submit' className='bg-blue-500 text-white rounded p-2'>Crear</button>
        </form>
      </Modal>
    </div>
  )
}
