import React from 'react'
import { NavLink } from 'react-router'
function Header() {
  return (
    <div className="bg-gray-700 flex justify-between items-center">
      <img className="p-3 rounded-4xl"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiy6oVamZtc06BTJnt_0_9yicVTNIp7kks_A&s" width="60px" height="30px"/>
        <ul className='flex gap-10 '>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="technologies">Technologies</NavLink>
          </li>
          
        </ul>
    </div>
  )
}

export default Header