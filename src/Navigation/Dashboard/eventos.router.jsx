import { Routes, Route } from 'react-router'
import { EventoView } from '../../views/eventos/EventoView'

export function EventosRouter() {
  return (
    <Routes>
        <Route path='/' element={<EventoView />} />
    </Routes>
  )
}
