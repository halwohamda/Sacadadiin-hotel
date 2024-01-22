import React from 'react'
import {Link} from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
      <div className="header bg-orange-600 p-4">
      <h1 className='text-white text-4xl text-center font-extrabold capitalize'>sacadadiin hotel</h1>
      </div>
      <div className="menus">
        <nav>
            <ul>
              <Link to='/hotel'>Hotel</Link>
            </ul>
            <ul>
              <Link to='/Employee'>Employee</Link>
            </ul>
            <ul>
              <Link to='/Room'>Room</Link>
            </ul>
            <ul>
              <Link to='/typeRoom'>TypeRoom</Link>
            </ul>
            <ul>
              <Link to='/Booking'>Booking</Link>
            </ul>
            <ul>
              <Link to='/Guest'>Guest</Link>
            </ul>
            <ul>
              <Link to='/Payment'>Payment</Link>
            </ul>
            <ul>
              <Link to='/Report'>Report</Link>
            </ul>
            <ul>
              <Link to='/Settings'>Settings</Link>
            </ul>
            <ul>
              <Link to='/Login'>Login</Link>
            </ul>
            <ul>
              <Link to='/Logout'>Logout</Link>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Dashboard
