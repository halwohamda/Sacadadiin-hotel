import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Dashboard from './Components/Dashboard.jsx';
import Hotel from './Components/Pages/Hotel/Hotel.jsx'
import Employee from './Components/Pages/Employee/Employee.jsx'
import Room from './Components/Pages/Rooms/Room.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/Dashboard',
        element: <Dashboard />,
      },
      {
        path:'/Hotel',
        element: <Hotel/>
      },
      {
        path: '/Employee',
        element: <Employee />
      },
      {
        path: '/Room',
        element: <Room />
      },
      {
        path: '/Booking',
        element: <Room />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
