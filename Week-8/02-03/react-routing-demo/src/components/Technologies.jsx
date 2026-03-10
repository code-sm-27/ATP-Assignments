import React from 'react'
import { NavLink, Outlet } from 'react-router'

function Technologies() {
  return (
    <div className='text-center'>
      <div>
        <ul className='flex justify-around'>
          <li>
            <NavLink to='java'> Java </NavLink>
          </li>
          <li>
            <NavLink to='nodejs'> NodeJS </NavLink>
          </li>
          <li>
            <NavLink to='vue'> Vue </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default Technologies