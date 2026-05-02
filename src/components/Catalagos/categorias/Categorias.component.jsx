import React, { useState } from 'react'
import { TableComponent } from '../../share/TableComponent'
import { CrearCategoria } from './crear/CrearCategoria.component'
import VerCategoria from './ver/verCategoria.component'

export default function Categorias({ headers, items, actions, isOpen, onClose, isVer, onVerClose, categorie, respuesta, totalPages, currentPage }) {
  const handleOnchangePage = (page) => {
   respuesta(page)
  }
  return (
    <div className='w-full'>
      <div className='mb-6'>
        <TableComponent headers={headers} items={items} actions={actions} totalPages={totalPages} currentPage={currentPage} onPageChange={handleOnchangePage} />
      </div>
      {/* //modal */}
      <CrearCategoria isOpen={isOpen} onClose={onClose} respuesta={respuesta} />
      <VerCategoria isOpen={isVer} onClose={onVerClose} categorie={categorie} />
    </div>
  )
}
