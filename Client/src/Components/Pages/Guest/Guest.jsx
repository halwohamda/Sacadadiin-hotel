import React from 'react'
import {Link} from 'react-router-dom'
import { MdAddBox } from "react-icons/md";

const Guest = () => {
  const handleDelete=()=>{
    alert("Deleted!")
  }
  return (
    <div>
     <div className="container -translate-y-[470px]">
      <div className="add ml-[1200px] text-6xl text-green-600">
        <Link to='/PostGuest'>
        <MdAddBox />
        </Link>
      </div>
     <table className='translate-x-[190px] ml-2'>
       <thead className=' bg-gray-400 text-white'>
         <tr className=''>
           <th className=' w-[75px]'>Guest_id</th>
           <th className=' w-[75px]'>FirstName</th>
           <th className=' w-[75px]'>MiddleName</th>
           <th className=' w-[75px]'>LastName</th>
           <th className=' w-[75px]'>Phone</th>
           <th className=' w-[75px]'>Email</th>
           <th className=' w-[75px]'>Actions</th>
         </tr>
       </thead>
       <tbody>
        <tr>
          <td className='text-center bg-gray-200 translate-y-2 '>1</td>
          <td className='text-center bg-gray-200 translate-y-2 '>Maria</td>
          <td className='text-center bg-gray-200 translate-y-2 '>Mohamed</td>
          <td className='text-center bg-gray-200 translate-y-2 '>Ali</td>
          <td className='text-center bg-gray-200 translate-y-2 '>1234667</td>
          <td className='text-center bg-gray-200 translate-y-2 '>Maria@hotmail.com</td>
         <div className="btns flex">
         <div className="update">
          <button className='bg-orange-600 px-4 border-2 border-white translate-y-2 text-white'>
            <Link to='/UpdateGuest'>Update</Link>
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

export default Guest
