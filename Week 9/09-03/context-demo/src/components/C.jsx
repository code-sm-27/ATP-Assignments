import React from 'react'
import { useTest } from '../store/TestStore' 

function C() {
    // Get state from Zustand Store

    let y = useTest((state)=> state.y)
    let incrementY = useTest((state)=> state.incrementY)
    console.log("Component C rendered")
    // console.log(useTest())
  return (
    <div>
        <div className='text-center shadow-2xl p-5'>
        <p className='text-2xl'>Component C</p>
        {/* <p>x is:- {x}</p>
        <button onClick={incrementX} className='bg-blue-400 mt-5 p-2 rounded'>Increment X</button><br /> */}
        <p className=''>y is:- {y}</p>
        <button onClick={incrementY} className='bg-blue-400 mt-5 p-2 rounded'>Increment Y</button><br />
        </div>
    </div>
  )
}

export default C