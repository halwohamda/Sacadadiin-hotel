import React from 'react'
import {Outlet} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
const App = () => {
  return (
    <div>
      <Dashboard />
      <Outlet />
    </div>
  )
}

export default App
