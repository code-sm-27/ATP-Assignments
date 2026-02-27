import React from 'react'

function TasksList({tasks,deleteTask}) {

    
  return (
    <div className='bg-amber-300 p-8'>
        <h3 className='text-2xl mb-5'>List of Tasks are:-</h3>
        {
            tasks.length === 0 ? (<p>Empty</p>) : (tasks.map((val,index)=><p key = {index} className='m-0'>
                {val.task}
                <input type="checkbox" onChange={()=>deleteTask(index)} className='m-2'/>
                </p>))
        }
    </div>
  )
}

export default TasksList