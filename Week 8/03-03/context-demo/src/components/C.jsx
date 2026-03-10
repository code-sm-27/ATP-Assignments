import {useContext} from 'react'
import { CounterContext } from '../context/CounterContext.js'

function C() {

  // let {counter1,changeCounter1} = useContext(CounterContext)
  console.log("Component C rendered")
  return (
    <div className='text-center shadow-2xl p-5'>
        <p className='text-3xl'>Component C</p>
        {/* <p className='text-2xl mt-10'>Counter1: {counter1}</p>
        <p className='text-2xl mt-10'>Counter2: {counter2}</p>
        <button onClick={changeCounter1} className='bg-blue-400 mt-5 p-2 rounded'>Increment 1</button><br />
        <button onClick={changeCounter2} className='bg-blue-400 mt-5 p-2 rounded'>Increment 2</button> */}
    </div>
  )
}

export default C