import React from 'react'
import { useLocation } from 'react-router'

function User() {
  const { state } = useLocation()
  console.log(state)
  return (
    <div className='mt-14'>
      <p className='mb-10'>Name: {state.user.userObj.name}</p>
      <p className='mb-10'>Email: {state.user.userObj.email}</p>
      <p className='mb-10'>Date Of Birth: {new Date(state.user.userObj.dateOfBirth).toLocaleDateString()}</p>
      <p className='mb-10'>Phone Number: {state.user.userObj.mobile}</p>
    </div>
  )
}

export default User