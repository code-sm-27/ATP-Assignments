import {useContext} from 'react'
import { CounterContext } from '../context/CounterContext.js'
import { UserContext } from '../context/UserContext.js'

function A() {

  // let {counter1,changeCounter1,counter2,changeCounter2} = useContext(CounterContext)
  let {user,updateUser} = useContext(UserContext)
  console.log("Component A rendered")
  
  return (
    <div className='text-center shadow-2xl p-5'>
        <p className='text-3xl'>Component A</p>
        {/* <p className='text-2xl mt-10'>Counter1: {counter1}</p>
        <p className='text-2xl mt-10'>Counter2: {counter2}</p>
        <button onClick={changeCounter1} className='bg-blue-400 mt-5 p-2 rounded'>Increment 1</button><br />
        <button onClick={changeCounter2} className='bg-blue-400 mt-5 p-2 rounded'>Increment 2</button> */}
        {<div>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.email}</p>
          <button onClick={updateUser} className='bg-blue-400 mt-5 p-2 rounded'>Update User</button>
          </div>}
    </div>
  )
}

export default A