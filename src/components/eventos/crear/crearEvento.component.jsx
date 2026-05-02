import { useForm } from 'react-hook-form';
import { Modal } from '../../share/modal.component';
import { schema } from './logic/dataValidations';
import { yupResolver } from '@hookform/resolvers/yup';
import { crearEvento } from '../../../services/eventos/evento.services';
import { useEffect, useState } from 'react';
import { Loader } from '../../share/Loader.component';
import { EventoLogic } from './logic/logic';

export function CrearEvento({ isOpen, onClose, respuesta }) {
  const [loading, setLoading] = useState(false);
  const { paises, handlePaisChange, country } = EventoLogic()

  useEffect(() => {
    country()
    handlePaisChange({ target: { value: 1 } })
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2 className='text-2xl font-bold mb-4'>Crear Evento</h2>
        <form
          className='grid grid-cols-1 md:grid-cols-2 gap-4'

        >

          {/* Nombre */}
          <input
            type='text'
            placeholder='Nombre'
            className='border border-gray-300 rounded p-2 md:col-span-2'
            name='nombre'
            required
          />

          {/* Descripción */}
          <textarea
            placeholder='Descripción'
            className='border border-gray-300 rounded p-2 md:col-span-2'
            name='descripcion'
          ></textarea>

          {/* País */}
          <div>
            <label>País</label>
            <select name='id_pais' className='border border-gray-300 rounded p-2 w-full' onChange={handlePaisChange}>
              {paises.map((pais) => (
                <option key={pais.id} value={pais.id}>{pais.nombre}</option>
              ))}
            </select>
          </div>

          {/* Departamento */}
          <div>
            <label>Departamento</label>
            <select name='id_departamento' className='border border-gray-300 rounded p-2 w-full'>
              <option value=''>Seleccione departamento</option>
            </select>
          </div>

          {/* Municipio */}
          <div>
            <label>Municipio</label>
            <select name='id_municipio' className='border border-gray-300 rounded p-2 w-full'>
              <option value=''>Seleccione municipio</option>
            </select>
          </div>

          {/* Distrito */}
          <div>
            <label>Distrito</label>
            <select name='id_distrito' className='border border-gray-300 rounded p-2 w-full'>
              <option value=''>Seleccione distrito</option>
            </select>
          </div>

          {/* Fechas */}
          <div>
            <label>Fecha de inicio</label>
            <input
              type='date'
              className='border border-gray-300 rounded p-2 w-full'
              name='fecha_inicio'
              required
            />
          </div>

          <div>
            <label>Fecha de fin</label>
            <input
              type='date'
              className='border border-gray-300 rounded p-2 w-full'
              name='fecha_fin'
              required
            />
          </div>

          {/* Capacidad */}
          <input
            type='number'
            placeholder='Capacidad'
            className='border border-gray-300 rounded p-2'
            name='capacidad'
          />

          {/* Categoría */}
          <input
            type='number'
            placeholder='ID Categoría'
            className='border border-gray-300 rounded p-2'
            name='id_categoria'
            required
          />

          {/* Imagen */}
          <div className='md:col-span-2'>
            <label>Imagen</label>
            <input
              type='file'
              accept='image/*'
              className='border border-gray-300 rounded p-2 w-full'
              name='imagen'
              required
            />
          </div>

          {/* Localidad */}
          <input
            type='text'
            placeholder='Localidad'
            className='border border-gray-300 rounded p-2'
            name='localidad'
          />

          {/* Dirección */}
          <input
            type='text'
            placeholder='Dirección'
            className='border border-gray-300 rounded p-2'
            name='direccion'
          />

          {/* Online */}
          <div>
            <label>¿Es online?</label>
            <select name='es_online' className='border border-gray-300 rounded p-2 w-full'>
              <option value='true'>Sí</option>
              <option value='false'>No</option>
            </select>
          </div>

          {/* Silla numerada */}
          <div>
            <label>¿Silla numerada?</label>
            <select name='es_silla_numerada' className='border border-gray-300 rounded p-2 w-full'>
              <option value='true'>Sí</option>
              <option value='false'>No</option>
            </select>
          </div>

          {/* Cantidad asistentes */}
          <input
            type='number'
            placeholder='Cantidad de asistentes'
            className='border border-gray-300 rounded p-2'
            name='cantidad_asistentes'
            required
          />

          {/* Meet URL */}
          <input
            type='text'
            placeholder='URL de Meet'
            className='border border-gray-300 rounded p-2'
            name='meet_url'
          />

          {/* Archivos */}
          <div className='md:col-span-2'>
            <label>Archivos (PDF, DOC)</label>
            <input
              type='file'
              multiple
              className='border border-gray-300 rounded p-2 w-full'
              name='archivos[]'
              accept='.pdf,.doc,.docx'
            />
          </div>

          {/* Botón */}
          <div className='flex justify-center md:col-span-2'>
            <button type='button' className='border border-red-500 m-2 cursor-pointer text-red-500 rounded p-2 hover:bg-red-500 hover:text-white w-25' onClick={onClose}>Cancelar</button>
            <button
              type='submit'
              className='bg-blue-500 cursor-pointer text-white rounded p-2 m-2 hover:bg-blue-600 w-25'
            >
              Crear
            </button>
          </div>

        </form>


      </Modal>
      <Loader loading={loading} />
    </>
  );
}
