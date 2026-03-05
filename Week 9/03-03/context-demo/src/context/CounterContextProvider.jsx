import {useState} from 'react'
import { CounterContext } from './CounterContext.js'

function CounterContextProvider({children}) {
    // State
    const [counter1,setCounter1] = useState(100)
    const [counter2,setCounter2] = useState(200)
    // Function to modify the state
    const changeCounter1 = ()=>{
        setCounter1(counter1+1)
    }
    const changeCounter2 = ()=>{
      setCounter2(counter2+1)
    }
  return (
    <CounterContext.Provider value={{
        counter1,
        changeCounter1,
        counter2,
        changeCounter2
    }}>
        {children}    
    </CounterContext.Provider>
  )
}

export default CounterContextProvider