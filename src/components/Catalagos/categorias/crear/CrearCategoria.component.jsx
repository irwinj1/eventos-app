import React from 'react'
import { Modal } from '../../../share/modal.component'
import { useForm } from 'react-hook-form'
import { schema } from './validationData'
import { yupResolver } from '@hookform/resolvers/yup'

export function CrearCategoria({ isOpen, onClose }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      nombre: '',
      color: '',
      icono: ''
    },
    resolver: yupResolver(schema)

  });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className='text-2xl font-bold mb-4'>Crear Categoria</h2>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(data => console.log(data))}>
        <input type='text' placeholder='Nombre' className='border border-gray-300 rounded p-2' {...register('nombre')} />
        <input type='text' placeholder='Color' className='border border-gray-300 rounded p-2' {...register('color')} />
        <input type='text' placeholder='Icono' className='border border-gray-300 rounded p-2' {...register('icono')} />
        <button type='submit' className='bg-blue-500 text-white rounded p-2'>Crear</button>
      </form>
    </Modal>
  )
}