import React from 'react'
import {Link} from 'react-router-dom'
import { MdAddBox } from "react-icons/md";

const Payment = () => {
  const handleDelete=()=>{
    alert("Deleted!")
  }
  return (
    <div>
     <div className="container -translate-y-[470px]">
      <div className="add ml-[1200px] text-6xl text-green-600">
        <Link to='/PostPayment'>
        <MdAddBox />
        </Link>
      </div>
     <table className='translate-x-[190px] ml-2'>
       <thead className=' bg-gray-400 text-white'>
         <tr className=''>
           <th className=' w-[75px]'>Guest_id</th>
           <th className=' w-[75px]'>Booking_id</th>
           <th className=' w-[75px]'>Amount</th>
           <th className=' w-[75px]'>PaymentDate</th>
           <th className=' w-[75px]'>PaymentMethod</th>
           
           <th className=' w-[75px]'>Actions</th>
         </tr>
       </thead>
       <tbody>
        <tr>
          <td className='text-center bg-gray-200 translate-y-2 '>1</td>
          <td className='text-center bg-gray-200 translate-y-2 '>2</td>
          <td className='text-center bg-gray-200 translate-y-2 '>3000</td>
          <td className='text-center bg-gray-200 translate-y-2 '>1/2/2024</td>
          <td className='text-center bg-gray-200 translate-y-2 '>Ebirr</td>
         <div className="btns flex">
         <div className="update">
          <button className='bg-orange-600 px-4 border-2 border-white translate-y-2 text-white'>
            <Link to='/UpdatePayment'>Update</Link>
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

export default Payment
