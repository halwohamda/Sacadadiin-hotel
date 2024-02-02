import React from 'react'
import {Link} from 'react-router-dom'
import { RiArrowGoBackFill } from "react-icons/ri";
const PostPayment = () => {
  return (
    <div>
     <div className="container -translate-y-[300px]">
        <h1 className='text-center text-4xl -translate-y-24 ml-44 font-bold uppercase text-orange-600 underline'>Post Payment</h1>
      <form className='ml-[500px] -translate-y-[100px] shadow-md shadow-gray-200 p-4 w-[500px]'>
        <input type="number" placeholder='Booking_id' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg ' /> 
        <input type="number" placeholder='Amount' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg ml-2' />
        <input type="Date" placeholder='PaymentDate' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg mt-2' /> 
    <select name="" id="" c>
    <option value="">Selection option Payment</option>
    <option value="">E-birr</option>
    <option value="">E-sahal</option>
    <option value="">sahay</option>
    <option value="">CBE</option>
    <option value="">Hello cash</option>

    </select>
      </form>
     <div className="box ml-[1200px] -mt-[440px] text-4xl">
      <Link to='/Payment'>
     <div className="back bg-gray-200 w-16 rounded-lg text-white px-4">
     <RiArrowGoBackFill />
     </div>
      </Link>
     </div>
     </div>
    </div>
  )
}

export default PostPayment
