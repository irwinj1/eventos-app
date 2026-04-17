import {Routes, Route} from 'react-router'
import DashBoardView from '../../views/Layout/DashBoard.view'
import { CategoriaRoutes } from './categoria'
import { EventosRouter } from './eventos.router'

export function DashboardRoute(){
return(
       <Routes>
        <Route path='/' element={<DashBoardView />}>
          <Route path="categoria/*" element={<CategoriaRoutes />} />
          <Route path="eventos/*" element={<EventosRouter />} />
        </Route>
       </Routes>
    )
}