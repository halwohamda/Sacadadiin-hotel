import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
     
      <div className="header bg-orange-600 p-4">
      <h1 className='text-white text-4xl text-center font-extrabold capitalize'>sacadadiin hotel</h1>
      </div>
      <div className="menus bg-orange-600 w-[150px] p-6">
        <nav>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/hotel'>Hotel</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Employee'>Employee</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Room'>Room</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/RoomType'>RoomType</Link>
            </ul>
            
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Booking'>Booking</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Guest'>Guest</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Payment'>Payment</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Report'>Report</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Settings'>Settings</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Login'>Login</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Logout'>Logout</Link>
            </ul>
        </nav>
      </div>
      <div className="footer flex justify-between bg-orange-600  p-8 text-white">
       <div className="copy">
      2024   &copy;
       </div>
       <div className="developed">
        Developed By Halwo adam
       </div>
       <div className='icons'>
        F I Y T
       </div>
      </div>
    </div>
  )
}

export default Dashboard
