import React, { useEffect, useState } from 'react'
import '../../utils/css/enventoComponent.css'
import { FaPen, FaBan, FaCheck, FaPlus } from "react-icons/fa6";
import { Titulos } from '../share/Titulos.component';
import { TableComponent } from '../share/TableComponent';
import { CrearEvento } from './crear/crearEvento.component';
import { getEventos } from '../../services/eventos/evento.services';


export function EventoComponent({item}) {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventos, setEventos] = useState([]);
  const respuesta = async()=>{
    try {
      const response = await getEventos();
      console.log(response);
      setEventos(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    respuesta()
  }, []);

  const headers = [
    {
      key: 'nombre',
      label: 'Nombre'
    },
    {
      key: 'descripcion',
      label: 'Descripción'
    },
    {
      key: 'slug',
      label: 'Slug'
    }
  ]
  
  const items = [];

  const actions = [
    {
      label: 'Editar',
      icon: 'FaEdit',
      className: 'bg-indigo-500 hover:bg-indigo-600',
      onClick: (item) => console.log('Editar', item)
    },
    {
      label: 'Eliminar',
      icon: 'FaTrash',
      className: 'bg-red-500 hover:bg-red-600',
      onClick: (item) => console.log('Eliminar', item)
    }
  ];
    
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <Titulos titulo="Gestión de Eventos"/>
        <button 
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-indigo-200 transition-all active:scale-95"
        >
          <FaPlus />
          Agregar Evento
        </button>
      </div>

      <TableComponent 
        headers={headers} 
        items={items} 
        actions={actions}
        currentPage={currentPage}
        totalPages={1} 
        onPageChange={(page) => setCurrentPage(page)}
      />

      <CrearEvento isOpen={open} onClose={() => setOpen(false)} respuesta={respuesta} />
    </div>
  )
}

