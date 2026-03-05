import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


function AddTask({addNewTask}) {

    const {register,handleSubmit,formState:{errors}}=useForm()

    const submit = (obj)=>{
        addNewTask(obj)
    }

  return (
    <div className='bg-blue-300 p-8'>
        <h3 className='text-2xl mb-5'>Add Task Here</h3>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register("task")} placeholder='Enter the Task here' className='border' /> <br />
            <button type="submit" className='bg-yellow-600 rounded p-2 mt-2 '>Enter</button>
        </form>

    </div>
  )
}

export default AddTask