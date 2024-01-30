import React from 'react'
import {Link} from 'react-router-dom'
import { RiArrowGoBackFill } from "react-icons/ri";
const UpdateBooking = () => {
  return (
    <div>
     <div className="container -translate-y-[300px]">
        <h1 className='text-center text-4xl -translate-y-24 ml-44 font-bold uppercase text-orange-600 underline'>Update Booking</h1>
      <form className='ml-[500px] -translate-y-[100px] shadow-md shadow-gray-200 p-4 w-[500px]'>
        <input type="number" placeholder='booking_id' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg ' /> 
        <input type="number" placeholder='RoomNumer' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg ml-2' />
        <input type="number" placeholder='Guest_ID' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg mt-2' /> 
        <input type="numer" placeholder='Total_Price' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg mt-2 ml-2' /> <br />
        <input type="submit" className='pt-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg mt-2 w-[444px] bg-orange-600 text-2xl text-white border-0' /> <br />
      </form>
     <div className="box ml-[1200px] -mt-[440px] text-4xl">
      <Link to='/Booking'>
     <div className="back bg-gray-200 w-16 rounded-lg text-white px-4">
     <RiArrowGoBackFill />
     </div>
      </Link>
     </div>
     </div>
    </div>
  )
}

export default UpdateRoomType
