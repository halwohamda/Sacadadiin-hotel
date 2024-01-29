import React from 'react'
import {Link} from 'react-router-dom'
import { RiArrowGoBackFill } from "react-icons/ri";
const PostEmployee = () => {
  return (
    <div>
     <div className="container -translate-y-[400px]">
        <h1 className='text-center text-4xl -translate-y-24 ml-44 font-bold uppercase text-gray-300 underline'>Register Guest</h1>
      <form className='ml-[500px] -translate-y-[100px] shadow-md shadow-gray-200 p-4 w-[500px]'>
        <input type="text" placeholder='FirstName' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg ' /> 
        <input type="text" placeholder='MiddleName' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg ml-2' />
        <input type="text" placeholder='LastName' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg ' />
        <input type="text" placeholder='Phone' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg mt-2 ml-2' /> <br />
        <input type="text" placeholder='Email' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg mt-2 ' /> 
        <input type="text" placeholder='Position' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg mt-2 ml-2' /> 
        <input type="number" placeholder='Salary' className='pt-2 border-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg ' /> 
        <input type="Date" placeholder='' className='pt-2 border-2 px-[38px] justify-center m-auto translate-x-2 p-2 rounded-lg mt-2 ml-2' /> 
        <input type="submit" className='pt-2 px-4 justify-center m-auto translate-x-2 p-2 rounded-lg mt-2 w-[444px] bg-green-400 text-2xl text-white border-0' /> <br />
      </form>
     <div className="box ml-[1250px] -mt-[440px] text-4xl">
      <Link to='/Guest'>
     <div className="back bg-gray-200 w-16 rounded-lg text-white px-4">
     <RiArrowGoBackFill />
     </div>
      </Link>
     </div>
     </div>
    </div>
  )
}
export default PostEmployee
