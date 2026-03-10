import React from 'react'
import { useTest } from '../store/TestStore'


function B() {
    let x = useTest((state)=> state.x)
    let incrementX = useTest((state)=> state.incrementX)
    let user = useTest(state=> state.user)
    let updateUser = useTest(state=>state.updateUser)
    
    console.log("Component B Rendered")
  return (
    <div>
        <div className='text-center shadow-2xl p-5'>
        <p className='text-2xl'>Component B</p>
        <p>x is:- {x}</p>
        <button onClick={incrementX} className='bg-blue-400 mt-5 p-2 rounded'>Increment X</button><br />
        {/* <p className='mt-2'>y is:- {y}</p>
        <button onClick={incrementY} className='bg-blue-400 mt-5 p-2 rounded'>Increment Y</button><br /> */}
        <p className='mt-2'>Name:- {user.name}</p>
        <p>Age:- {user.age}</p>
        <button onClick={()=>updateUser("Mani")} className='bg-blue-400 mt-5 p-2 rounded'>Update User</button><br />
        </div>
    </div>
  )
}

export default B