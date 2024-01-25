import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Dashboard from './Components/Dashboard.jsx';
import Hotel from './Components/Pages/Hotel/Hotel.jsx'
import Employee from './Components/Pages/Employee/Employee.jsx'
import Room from './Components/Pages/Room/Room.jsx'
import Booking from './Components/Pages/Booking/Booking.jsx';
import Guest from './Components/Pages/Guest/Guest.jsx';
import Payment from './Components/Pages/Payment/Payment.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import Logout from './Components/Pages/Logout/Logout.jsx';
import RoomType from './Components/Pages/RoomType/RoomType.jsx';
//End points
import Post from './Components/Pages/Hotel/Post.jsx';
import Update from './Components/Pages/Hotel/Update.jsx';
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
        path: '/RoomType',
        element: <RoomType />
      },
      {
        path: '/Booking',
        element: <Booking />
      },
      //Hotel End points
      {
        path: '/Post',
        element: <Post/>
      },
      {
        path: '/Update',
        element: <Update/>
      },
      {
        path: '/Guest',
        element: <Guest />
      },
      {
        path: '/Payment',
        element: <Payment />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Logout',
        element: <Logout />
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
