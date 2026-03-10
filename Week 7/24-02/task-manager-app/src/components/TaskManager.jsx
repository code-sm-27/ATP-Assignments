import React, { useState } from 'react'
import AddTask from './AddTask'
import TasksList from './TasksList'
import TasksCount from './TasksCount'

function TaskManager() {
    let [tasks,setTasks] = useState([])

    const addNewTask = (obj)=>{
        setTasks([...tasks,obj])
    }
    const deleteTask = (index)=>{
        let res = tasks.filter((_,i)=>i!==index)
        setTasks(res)
    }

    return (
        <div>
            <h1 className='text-5xl mb-5'>Task Manager</h1>
            <div className='flex justify-around'>
                <AddTask addNewTask = {addNewTask} />
                <TasksList tasks = {tasks} deleteTask={deleteTask} />
                <TasksCount tasks = {tasks} />
            </div>
        </div>
    )
}

export default TaskManager