import React from 'react'
import {Link} from 'react-router-dom'
import { RiArrowGoBackFill } from "react-icons/ri";
const PostPayment = () => {
  return (
    <div>
     <div className="container -translate-y-[300px]">
        <h1 className='text-center text-4xl -translate-y-24 ml-44 font-bold uppercase text-orange-600 underline'>Update Payment</h1>
      <form className='ml-[500px] -translate-y-[100px] shadow-md shadow-gray-200 p-4 w-[500px]'>
        <input type="number" placeholder='Booking_id' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg ' /> 
        <input type="number" placeholder='Guest_id' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg ml-2' />
        <input type="number" placeholder='Amount' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg mt-2' /> 
        <input type="Date" placeholder='' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg mt-2 ml-2' /> <br />
        <select name="" id="">
    <option value="">Selection option Payment</option>
    <option value="">E-birr</option>
     <option value="">E-sahal</option>
   <option value="">sahay</option>
   <option value="">CBE</option>
  <option value="">Hello cash</option>

   </select>
        <input type="submit" className='pt-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg mt-2 w-[444px] bg-orange-600 text-2xl text-white border-0' /> <br />
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
