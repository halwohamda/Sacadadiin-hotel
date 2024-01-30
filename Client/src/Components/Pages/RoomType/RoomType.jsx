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
           <th className=' w-[75px]'>RoomType_id</th>
           <th className=' w-[75px]'>Name</th>
           <th className=' w-[75px]'>Pricepernight</th>
           <th className=' w-[75px]'>Description</th>
           <th className=' w-[75px]'>capacity</th>
           <th className=' w-[75px]'>Actions</th>
         </tr>
       </thead>
       <tbody>
        <tr>
          <td className='text-center bg-gray-200 translate-y-2 '>1</td>
          <td className='text-center bg-gray-200 translate-y-2 '>halwo</td>
          <td className='text-center bg-gray-200 translate-y-2 '>25000</td>
          <td className='text-center bg-gray-200 translate-y-2 '>fast wi-fi</td>
          <td className='text-center bg-gray-200 translate-y-2 '>1</td>
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
