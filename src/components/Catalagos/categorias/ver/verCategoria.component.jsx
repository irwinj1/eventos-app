import React from 'react'
import { Modal } from '../../../share/modal.component'

export default function VerCategoria({isOpen, onClose, categorie}) {
  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
        <h2 className='text-2xl font-bold mb-4'>Ver Categoria</h2>
        <p>{categorie.nombre}</p>
        <p>{categorie.color}</p>
        <p>{categorie.icono}</p>
    </Modal>
    </>
  )
}