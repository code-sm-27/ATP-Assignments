import React from 'react'
import { useRef,useEffect } from 'react'

function UseRefDemo() {
  let inputRef = useRef(null)
  console.log("UseRefDemo is rendered")

  useEffect(()=>{
    // Side Effect
    inputRef.current.focus()
  },[])
  return (
    <div>
      <input ref ={inputRef} type="text" className='border'/>
      
    </div>
  )
}

export default UseRefDemo