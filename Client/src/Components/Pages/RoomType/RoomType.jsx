import React from 'react'
import {Link} from 'react-router-dom'
import { MdAddBox } from "react-icons/md";

const RoomType = () => {
  const handleDelete=()=>{
    alert("Deleted RoomType!")
  }
  return (
    <div>
     <div className="container -translate-y-[470px]">
      <div className="add ml-[1200px] text-6xl text-green-600">
        <Link to='/PostEmployee'>
        <MdAddBox />
        </Link>
      </div>
     <table className='translate-x-[190px] ml-2'>
       <thead className=' bg-gray-400 text-white'>
         <tr className=''>
           <th className=' w-[75px]'>Booking_id</th>
           <th className=' w-[75px]'>Room_Numer</th>
           <th className=' w-[75px]'>Guest_Id</th>
           <th className=' w-[75px]'>Totalprice</th>
           <th className=' w-[75px]'>Cheack_In</th>
           <th className=' w-[75px]'>Check_OUT</th>
           <th className=' w-[75px]'>Actions</th>
         </tr>
       </thead>
       <tbody>
        <tr>
          <td className='text-center bg-gray-200 translate-y-2 '>1</td>
          <td className='text-center bg-gray-200 translate-y-2 '>4</td>
          <td className='text-center bg-gray-200 translate-y-2 '>2</td>
          <td className='text-center bg-gray-200 translate-y-2 '>2500</td>
          <td className='text-center bg-gray-200 translate-y-2 '>1/1/2024</td>
          <td className='text-center bg-gray-200 translate-y-2 '>1/10/2024</td>
         <div className="btns flex">
         <div className="update">
          <button className='bg-orange-600 px-4 border-2 border-white translate-y-2 text-white'>
            <Link to='/UpdateRoomType'>Update</Link>
          </button>
          </div>
         <div className="delete">
         <button onClick={handleDelete}  className='bg-red-600 border-2 border-white translate-y-2 text-white  px-4  '>
            <Link>Delete</Link>
          </button>
         </div>
         </div>
        </tr>
       </tbody>
     </table>
     </div>
    </div>
  )
}

export default RoomType
