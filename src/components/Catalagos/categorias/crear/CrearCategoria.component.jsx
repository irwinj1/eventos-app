import { useForm } from 'react-hook-form';
import { Modal } from '../../../share/modal.component'
import { schema } from './validationData'
import { yupResolver } from '@hookform/resolvers/yup'
import { crearCategoria } from '../../../../services/catalogos/categorias/categorias.services';
import { useState } from 'react';
import { Loader } from '../../../share/Loader.component';

export function CrearCategoria({ isOpen, onClose, respuesta }) {
  const [loading, setLoading] = useState(false)
  let response = null
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      nombre: '',
      color: '',
      icono: ''
    },
    resolver: yupResolver(schema)
  });
  const addCategory = async (data) => {
    try {
      setLoading(true)
      response = await crearCategoria(data)
     
    } catch (error) {
      console.log(error)
    }
    finally {
       if (response.status === 200) {
        onClose()
        
      }
     setLoading(false)
      respuesta()
    }
  }
  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className='text-2xl font-bold mb-4'>Crear Categoria</h2>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(addCategory)}>
        <input type='text' placeholder='Nombre' className='border border-gray-300 rounded p-2' {...register('nombre')} />
        <p className='text-red-500'>{errors.nombre?.message}</p>
        <input type='text' placeholder='Color' className='border border-gray-300 rounded p-2' {...register('color')} />
        <p className='text-red-500'>{errors.color?.message}</p>
        <input type='text' placeholder='Icono' className='border border-gray-300 rounded p-2' {...register('icono')} />
        <p className='text-red-500'>{errors.icono?.message}</p>
        <button type='submit' className='bg-blue-500 text-white rounded p-2'>Crear</button>
      </form>
    </Modal>
    <Loader loading={loading} />
    </>
  )
}