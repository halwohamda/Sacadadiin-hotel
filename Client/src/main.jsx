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
//End points Hotel
import Post from './Components/Pages/Hotel/Post.jsx';
import Update from './Components/Pages/Hotel/Update.jsx';
// End Point Employee
import PostEmployee from './Components/Pages/Employee/PostEmployee.jsx';
import UpdateEmployee from './Components/Pages/Employee/UpdateEmployee.jsx';
import UpdateGuest from './Components/Pages/Guest/UpdateGuest.jsx';
import PostGuest from './Components/Pages/Guest/PostGuest.jsx';

//booking
import UpdateBooking from './Components/Pages/Booking/UpdateBooking.jsx';
import PostBooking from './Components/Pages/Booking/PostBooking.jsx';
import UpdateRoomType from './Components/Pages/RoomType/UpdateRoomType.jsx';
import PostRoomType from './Components/Pages/RoomType/PostRoomType.jsx';
///
import UpdatePayment from './Components/Pages/Payment/UpdatePayment.jsx';
import PostPayment from './Components/Pages/Payment/PostPayment.jsx';
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
      // Roomtype end points
      {
        path: '/UpdateRoomType',
        element: <UpdateRoomType/>
      },
      {
        path: '/PostRoomType',
        element: <PostRoomType/>
      },
      {
        path: '/Booking',
        element: <Booking />
      },

      /// booking endpoints
      {
        path: '/UpdateBooking',
        element: <UpdateBooking/>
      },
      {
        path: '/PostBooking',
        element: <PostBooking/>
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
      // end points
      { 
        path: '/UpdatePayment',
        element: <UpdatePayment/>

      },
      {
        path: '/PostPayment',
        element: <PostPayment/>
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Logout',
        element: <Logout />
      },
      // End Points Employee
      {
        path: '/PostEmployee',
        element: <PostEmployee/>
      },
      {
        path: '/UpdateEmployee',
        element: <UpdateEmployee/>
      },

     //  End points Guest
     {
      path: '/UpdateGuest',
      element: <UpdateGuest/>
    },
    {
      path: '/PostGuest',
      element: <PostGuest/>
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



