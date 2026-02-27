import {useState} from 'react'

function StateDemo()
{
    // State
    let [counter,setCounter] = useState(10)
    
    let [marks,setMarks] = useState([1,2,3,4,5,6,7])

    let[user,setUser] = useState({email:"user@mail.com"})

    const increment = ()=>{
        setCounter(prev=>prev+1) // Functional parameters are used for updating the previous value
    }
    const addMarks = ()=>{
        setMarks([100,...marks])
    }
    const deleteMarks = (index)=>{
        let result = marks.filter((_,i)=>i!==index)
        setMarks(result)
    }
    const updateUser = ()=>{
        setUser({...user,city:"Hyd"})
    }
    const deleteProperty = ()=>{
        let {city,...res} = user
        setUser(res)
    }
    const decrement = ()=>{
        setCounter(counter-1)
    }
    const reset = ()=>{
        setCounter(10)
    }
    return(
        <div>
            <h1 className='text-5xl'>State Demo</h1>
            <p className='text-4xl mt-10 p-3'>Counter: {counter}</p>
            <button onClick={increment} className='bg-blue-400 m-2 rounded p-2 text-amber-50'>Increment</button>
            <button onClick={decrement} className='bg-blue-400 m-2 rounded p-2 text-amber-50'>Decrement</button>
            <button onClick={reset} className='bg-blue-400 m-2 rounded p-2 text-amber-50 '>Reset</button>
            <h2 className='text-3xl'>Marks</h2>
            { marks.map((m,index)=><p key ={index}>{m}</p>)}
            <button onClick={addMarks} className='bg-blue-400 m-2 rounded p-2 text-amber-50'>Add Marks</button>
            <button onClick={()=>deleteMarks(0)} className='bg-blue-400 m-2 rounded p-2 text-amber-50'>Delete Marks</button><br />
            <h2 className='text-3xl'>User</h2>
            {Object.entries(user).map(([key,value])=><p key = {key}>{value}</p>)}
            <button onClick={updateUser} className='bg-blue-400 m-2 rounded p-2 text-amber-50'>Update</button>
            <button onClick={deleteProperty} className='bg-blue-400 m-2 rounded p-2 text-amber-50'>Delete</button><br />

        </div>
    )
}

export default StateDemo