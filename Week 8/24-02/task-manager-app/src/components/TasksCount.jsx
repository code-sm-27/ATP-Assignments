import React from 'react'

function TasksCount({tasks}) {
  return (
    <div className='bg-emerald-300 p-8 '>
        <h3 className='text-2xl mb-5'>Task Count:-</h3>
        <p>{tasks.length}</p>
    </div>
  )
}

export default TasksCount