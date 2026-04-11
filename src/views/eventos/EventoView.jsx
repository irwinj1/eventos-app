import React from 'react'
import { EventoComponent } from '../../components/eventos/EventoComponent'
import './envento.css'
import { TableComponent } from '../../components/share/TableComponent'
import { eliminarCategoria } from '../../services/catalogos/categorias/categorias.services';

export function Evento({data, respuesta}) {
  const headers = [
    { key: "nombre", label: "Nombre" },
    { 
      key: "estado", 
      label: "Estado",
      render: (item) => (
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.estado ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {item.estado ? 'Activo' : 'Inactivo'}
        </span>
      )
    },
  ];
const eliminar = async(item)=>{
        const response = await eliminarCategoria(item.id)
        console.log(response)
        if (response.status === 200) {
          respuesta()
        }
    }
  const items = data;

  const actions = [
    {
      label: "Ver",
      className: "bg-gray-500 hover:bg-gray-600",
      onClick: (item) => console.log("Ver", item),
    },
    {
      label: "Editar",
      className: "bg-blue-500 hover:bg-blue-600",
      onClick: (item) => console.log("Editar", item),
    },
    {
      label: (item) => item.estado ? "Desactivar" : "Activar",
      className: (item) => item.estado ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600",
      onClick: (item) => eliminar(item),
    },
  ];

  return (
   <>
   <h1 className='text-center text-4xl font-bold mb-6'>Eventos</h1>
   <div className='w-full px-4 sm:px-6 lg:px-8'>
      <div className='overflow-x-auto shadow-md sm:rounded-lg mb-6'>
        <TableComponent headers={headers} items={items} actions={actions} />
      </div>
   </div>
   </>
  )
}
