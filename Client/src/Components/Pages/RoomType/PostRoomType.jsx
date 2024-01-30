import React from 'react'
import {Link} from 'react-router-dom'
import { RiArrowGoBackFill } from "react-icons/ri";
const PostRoomType = () => {
  return (
    <div>
     <div className="container -translate-y-[400px]">
        <h1 className='text-center text-4xl -translate-y-24 ml-44 font-bold uppercase text-gray-300 underline'>Register RoomType</h1>
      <form className='ml-[500px] -translate-y-[100px] shadow-md shadow-gray-200 p-4 w-[500px]'>
        <input type="number" placeholder='RoomType_id' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg ' /> 
        <input type="number" placeholder='Name' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg ml-2' />
        <input type="number" placeholder='PriceperNight' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg ' />
        <input type="number" placeholder='Description' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg mt-2 ml-2' /> <br />
        <input type="Date" placeholder='Capacity' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg mt-2 ' /> 
      </form>
     <div className="box ml-[1250px] -mt-[440px] text-4xl">
      <Link to='/RoomType'>
     <div className="back bg-gray-200 w-16 rounded-lg text-white px-4">
     <RiArrowGoBackFill />
     </div>
      </Link>
     </div>
     </div>
    </div>
  )
}
export default PostRoomType







