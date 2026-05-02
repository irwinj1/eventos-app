import React from 'react'

export function Titulos({titulo}) {
  return (
    <div className='relative'>
        <h1 className='text-3xl font-extrabold text-gray-900 tracking-tight'>{titulo}</h1>
        <div className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-600 rounded-full"></div>
    </div>
  )
}

