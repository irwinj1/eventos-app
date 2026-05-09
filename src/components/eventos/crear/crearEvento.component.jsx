import { useForm } from 'react-hook-form';
import { Modal } from '../../share/modal.component';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { Loader } from '../../share/Loader.component';
import { EventoLogic } from './logic/logic';
import { valoresDefecto } from './logic/defaultValues';
import { schemaValidation } from './logic/dataValidations';
import { crearEvento } from '../../../services/eventos/evento.services';

export function CrearEvento({ isOpen, onClose, respuesta }) {
  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: valoresDefecto,
    resolver: yupResolver(schemaValidation)
  })
  const [loading, setLoading] = useState(false);
  const { paises, handlePaisChange, country, isDepartamento, departamentos, handleDepartamentoChange, municipios, handleMunicipioChange, isMunicipio, distritos, categoriass,getCategorias } = EventoLogic()

  useEffect(() => {
    country()
    handlePaisChange({ target: { value: 1 } })
    getCategorias()
  }, []);

  const nuevoEvento = (data) => {
    const formData = new FormData();
    
    formData.append('nombre', data.nombre);
    formData.append('descripcion', data.descripcion);
    formData.append('direccion', data.direccion);
    formData.append('id_pais', data.id_pais);
    formData.append('id_departamento', data.id_departamento);
    formData.append('id_municipio', data.id_municipio);
    formData.append('id_distrito', data.id_distrito);
    formData.append('fecha_inicio', data.fecha_inicio);
    formData.append('fecha_fin', data.fecha_fin);
    formData.append('id_categoria', data.id_categoria);
    formData.append('localidad', data.localidad);
    formData.append('cantidad_asistentes', data.cantidad_asistentes);
    formData.append('meet_url', data.meet_url || '');

    formData.append('es_online', (data.es_online === 'true' || data.es_online === true) ? 1 : 0);
    formData.append('es_silla_numerada', (data.es_silla_numerada === 'true' || data.es_silla_numerada === true) ? 1 : 0);

    if (data.imagen && data.imagen.length > 0) {
      formData.append('imagen', data.imagen[0]);
    }

    if (data.archivos && data.archivos.length > 0) {
      for (let i = 0; i < data.archivos.length; i++) {
        formData.append('archivos[]', data.archivos[i]);
      }
    }

    crearEvento(formData);
  };



  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2 className='text-2xl font-bold mb-4'>Crear Evento</h2>
        <form
          className='grid grid-cols-1 md:grid-cols-2 gap-4'
          onSubmit={handleSubmit(nuevoEvento)}
        >

          {/* Nombre */}
          <input
            type='text'
            placeholder='Nombre'
            className='border border-gray-300 rounded p-2 md:col-span-2'
            name='nombre'
            {...register('nombre')}
          />
          <p className='text-red-500'>{errors.nombre?.message}</p>


          {/* Descripción */}
          <textarea
            placeholder='Descripción'
            className='border border-gray-300 rounded p-2 md:col-span-2'
            name='descripcion'
            {...register('descripcion')}
          ></textarea>

          {/* Dirección */}
          <textarea
            placeholder='Dirección'
            className='border border-gray-300 rounded p-2 md:col-span-2'
            name='direccion'
            {...register('direccion')}
          ></textarea>

          {/* País */}
          <div>
            <label>País</label>
            <select {...register('id_pais')} name='id_pais' className='border border-gray-300 rounded p-2 w-full' onChange={handlePaisChange}>
              {paises.map((pais) => (
                <option key={pais.id} value={pais.id}>{pais.nombre}</option>
              ))}
            </select>
          </div>

          {/* Departamento */}
          <div>
            <label>Departamento</label>
            <select {...register('id_departamento')} name='id_departamento' className='border border-gray-300 rounded p-2 w-full' onChange={handleDepartamentoChange}>
              <option value=''>Seleccione departamento</option>
              {
                departamentos.map((departamento) => (
                  <option key={departamento.id} value={departamento.id}>{departamento.nombre}</option>
                ))
              }
            </select>
          </div>

          {/* Municipio */}
          <div>
            <label>Municipio</label>
            <select {...register('id_municipio')} disabled={isDepartamento} name='id_municipio' className='border border-gray-300 rounded p-2 w-full' onChange={handleMunicipioChange}>
              <option value=''>Seleccione municipio</option>\
              {
                municipios.map((municipio) => (
                  <option value={municipio.id}>{municipio.nombre}</option>
                ))
              }
            </select>
          </div>

          {/* Distrito */}
          <div>
            <label>Distrito</label>
            <select {...register('id_distrito')} name='id_distrito' disabled={isMunicipio} className='border border-gray-300 rounded p-2 w-full' >
              <option value=''>Seleccione distrito</option>
              {distritos.map((distrito) => (
                <option value={distrito.id}>{distrito.nombre}</option>
              ))}
            </select>
          </div>

          {/* Fechas */}
          <div>
            <label>Fecha de inicio</label>
            <input
              type='date'
              className='border border-gray-300 rounded p-2 w-full'
              name='fecha_inicio'
              {...register('fecha_inicio')}
            />
          </div>

          <div>
            <label>Fecha de fin</label>
            <input
              type='date'
              className='border border-gray-300 rounded p-2 w-full'
              name='fecha_fin'
              {...register('fecha_fin')}
            />
          </div>

        

          {/* Categoría */}
          <div>
            <label>Categoria</label>
            <select {...register('id_categoria')} name='id_categoria' className='border border-gray-300 rounded p-2 w-full' onChange={handleMunicipioChange}>
              <option value=''>Seleccione municipio</option>\
              {
                categoriass.map((categoria) => (
                  <option value={categoria.id}>{categoria.nombre}</option>
                ))
              }
            </select>
          </div>

          {/* Imagen */}
          <div className='md:col-span-2'>
            <label>Imagen</label>
            <input
              type='file'
              accept='image/*'
              className='border border-gray-300 rounded p-2 w-full'
              name='imagen'
              {...register('imagen')}
            />
          </div>

          {/* Localidad */}
          <input
            type='text'
            placeholder='Localidad'
            className='border border-gray-300 rounded p-2'
            name='localidad'
            {...register('localidad')}
          />


          {/* Online */}
          <div>
            <label>¿Es online?</label>
            <select {...register('es_online')} name='es_online' className='border border-gray-300 rounded p-2 w-full'>
              <option value='true'>Sí</option>
              <option value='false'>No</option>
            </select>
          </div>

          {/* Silla numerada */}
          <div>
            <label>¿Silla numerada?</label>
            <select {...register('es_silla_numerada')} name='es_silla_numerada' className='border border-gray-300 rounded p-2 w-full'>
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
            {...register('cantidad_asistentes')}
          />

          {/* Meet URL */}
          <input
            type='text'
            placeholder='URL de Meet'
            className='border border-gray-300 rounded p-2'
            name='meet_url'
            {...register('meet_url')}
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
              {...register('archivos')}
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
