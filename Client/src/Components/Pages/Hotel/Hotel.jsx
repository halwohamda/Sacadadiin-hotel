import React from 'react'
import {Link} from 'react-router-dom'
import { IoIosAddCircle } from "react-icons/io";

const Home = () => {
  return (
    <div>
    <div className="container -translate-y-[470px]">
    <div className='ml-[200px] w-9 text-4xl text-orange-300 '>
        <Link to='/Post'>
        <IoIosAddCircle  />
        </Link>
      </div>
       <table className='translate-x-[270px] ml-2'>
        <thead className='bg-orange-300 text-white '>
         <tr>
          <th className='w-[140px]'>Hotel_id</th>
          <th className='w-[140px]'>HotelName</th>
          <th className='w-[140px]'>Address</th>
          <th className='w-[140px]'>Email</th>
          <th className='w-[140px]'>Phone</th>
          <th className='w-[140px]'>Check in</th>
          <th className='w-[140px]'>Check out</th>
         </tr>
        </thead>
        <tbody>
          <tr>
            <td className='bg-orange-200  text-center translate-y-2'>1</td>
            <td className='bg-orange-200  text-center translate-y-2'>Sahal</td>
            <td className='bg-orange-200  text-center translate-y-2'>jijiga</td>
            <td className='bg-orange-200  text-center translate-y-2'>Sahal@Email.com</td>
            <td className='bg-orange-200  text-center translate-y-2'>1223434656889</td>
            <td className='bg-orange-200  text-center translate-y-2'>7:00am</td>
            <td className='bg-orange-200  text-center translate-y-2'>9:00pm</td>
          </tr>
        </tbody>
       </table>
         </div>
        </div>
  )
}


export default Home
