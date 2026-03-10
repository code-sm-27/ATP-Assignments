import React from 'react'
import C from './components/C'
import A from './components/A'
import B from './components/B'
import UseRefDemo from './components/useRefDemo'


function App() {
  return (
    <div className='text-center'>
      <div className='flex justify-between p-10'>
        <A/>
        <B/>
        <C/>    
      </div>
    <UseRefDemo />
    </div>
  )
}

export default App