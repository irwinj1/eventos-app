import React from "react";
import { PaginationComponent } from "./PaginationComponent";
import * as FaIcons5 from 'react-icons/fa';
import * as FaIcons6 from 'react-icons/fa6';

const FaIcons = { ...FaIcons5, ...FaIcons6 };



export function TableComponent({ 
  headers = [], 
  items = [], 
  actions = [],
  currentPage = 1,
  totalPages = 1,
  onPageChange = () => {}
}) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 backdrop-blur-sm border-b border-gray-200">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  {header.label}
                </th>
              ))}
              {actions.length > 0 && (
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider w-1 whitespace-nowrap">
                  Acciones
                </th>
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {items.length > 0 ? (
              items.map((item, rowIndex) => (
                <tr 
                  key={rowIndex} 
                  className="group hover:bg-indigo-50/30 transition-colors duration-200"
                >
                  {headers.map((header, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-6 py-4 text-sm text-gray-600 font-medium"
                    >
                      {header.render
                        ? header.render(item)
                        : item[header.key]}
                    </td>
                  ))}

                  {actions.length > 0 && (
                    <td className="px-6 py-4 w-1 whitespace-nowrap">
                      <div className="flex justify-center gap-3">
                        {actions.map((action, index) => {
                          const actionIcon = typeof action.icon === 'function' ? action.icon(item) : action.icon;
                          const actionClass = typeof action.className === 'function' ? action.className(item) : action.className;
                          const IconComponent = FaIcons[actionIcon];
                          
                          return (
                            <button
                              key={index}
                              onClick={() => action.onClick(item)}
                              title={typeof action.label === 'function' ? action.label(item) : action.label}
                              className={`p-2 rounded-lg text-white shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center ${actionClass}`}
                            >
                              {IconComponent ? <IconComponent className="text-sm" /> : <span>Acción</span>}
                            </button>
                          );
                        })}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={headers.length + (actions.length > 0 ? 1 : 0)}
                  className="px-6 py-12 text-center"
                >
                  <div className="flex flex-col items-center gap-2">
                    <FaIcons.FaInbox className="text-4xl text-gray-200" />
                    <p className="text-gray-400 font-medium text-lg">No hay datos disponibles</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {totalPages > 1 && (
        <PaginationComponent 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={onPageChange} 
        />
      )}
    </div>
  );
}