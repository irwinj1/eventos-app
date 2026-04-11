import {Routes, Route} from 'react-router'
import Login from '../../views/auth/Login'

export function Auth() {
  return (
    <Routes>
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}
