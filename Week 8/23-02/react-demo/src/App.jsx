import StateDemo from './components/StateDemo';
import './App.css'
import FormDemo from './components/FormDemo';
import FormAssignment from './components/FormAssignment';

import TaskManager from './components/TaskManager';
import SideEffects from './components/SideEffects';


// function App(){

//   // State(Optional)

//   let user = 'Sm'

//   let per = {
//     pid: 123,
//     name: "sm"
//   }

//   let marks = [98,67,95,90]

//   const test1 = ()=>{
//     console.log("Hello")
//   }

//   const test2 = (a)=>{
//     console.log({a})
//   }

//   Return a React Element(Mandatory)
//   return(
//     <div className='text-center'>
//       <h1 className='text-4xl'> Hello </h1>
//       {/* Username */}
//       <h2 className='text-3xl'>Username: {user}</h2>
//       {/* Person Object */}
//       <h2>{per.pid}</h2>
//       <h2>{per.name}</h2>
//       {/* Marks */}
//       {
//         marks.map((m,index)=>
//         <h2 key={index}>{m}</h2>
//       )
//       }

//       <button onClick={test1} className='bg-black text-blue-200 rounded p-1'>Click</button><br /><br />
//       <button onClick={()=>test2(100)} className='bg-black text-blue-200 rounded p-1'>Click</button>
//     </div>
//   )

// }

function App()
{
  return(
    <div className='text-center border-2 mt-2 p-10 bg-amber-100' >
      {/* <StateDemo/> */}
      {/* <FormDemo/> */}
      {/* <FormAssignment/> */}
      {/* <TaskManager/ > */}
      <SideEffects/>
    </div>
  )
}

export default App;