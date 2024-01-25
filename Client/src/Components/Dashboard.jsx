import React from 'react'
import {Link} from 'react-router-dom'
import { FaHotel } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
import { MdEditNote } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { VscReport } from "react-icons/vsc";
import { MdPayments } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
const Dashboard = () => {
  return (
    <div>
     
      <div className="header bg-orange-600 p-4">
      <h1 className='text-white text-4xl text-center font-extrabold capitalize'>sacadadiin hotel</h1>
      </div>
      <div className="mainsection flex">
      <div className="menus bg-orange-600 w-[190px] p-6">
        <nav>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/hotel'>
              <FaHotel className='inline-block -translate-x-2' />
                Hotel</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Employee'>
              <FaUserCircle className='inline-block -translate-x-2'  />
                Employee</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Room'>
              <MdLocalHotel className='inline-block -translate-x-2' />
                Room</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/RoomType'>
              <IoBedSharp className='inline-block -translate-x-2'  />
                RoomType</Link>
            </ul>
            
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Booking'>
              <MdEditNote  className='inline-block -translate-x-2' />
                Booking</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Guest'>
              <FaUserTie className='inline-block -translate-x-2'  />
                Guest</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Payment'>
              <MdPayments  className='inline-block -translate-x-2'    />
                Payment</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Report'>
              <VscReport className='inline-block -translate-x-2'  />
                Report</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Settings'>
              <CiSettings  className='inline-block -translate-x-2'  />
                Settings</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Login'>
              <CiLogin className='inline-block -translate-x-2'   />
                Login</Link>
            </ul>
            <ul className='bg-white text-orange-600 rounded-lg mt-3 m-auto px-2 hover:bg-orange-600 hover:text-white hover:border-2'>
              <Link to='/Logout'>
              <CiLogout className='inline-block -translate-x-2'  />
                Logout</Link>
            </ul>
        </nav>
      </div>
      <div className="img">
        <img src="./public/Hotel.webp" alt="" className='w-[1130px] h-[450px]' />
      </div>
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
