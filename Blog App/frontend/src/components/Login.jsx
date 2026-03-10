import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useAuth } from '../store/authStore'
import toast from 'react-hot-toast'

function Login() {
  const {register,handleSubmit,formState:{errors}} = useForm()
  const navigate = useNavigate() 
  const login = useAuth(state=>state.login)
  const currentUser = useAuth(state=>state.currentUser)
  const isAuthenticated = useAuth(state=>state.isAuthenticated)
  const error = useAuth(state=>state.error)
  const loading = useAuth(state=>state.loading)
   
  const submit= async (userObj)=>{
    
    await login(userObj)
    toast.success("Logged in Successfully")
    // console.log(currentUser)
    // console.log(isAuthenticated)
    // console.log(error)
    
  }
    useEffect(()=>{
      
      if(isAuthenticated && currentUser)
    {
      if(currentUser.role === "USER")
      {
        navigate('/userdashboard',{state: currentUser})
      }
      else if(currentUser.role === "AUTHOR")
      {
        navigate('/authordashboard',{state: currentUser})
      }
      else if(currentUser.role === "ADMIN")
      {
        navigate('/admindashboard',{state: currentUser})
      } 
    }
    },[isAuthenticated,currentUser,navigate])
    
  if(loading===true)
    {
      return <p className='text-center text-2xl text-blue-300 '>Loading...</p>
    }

  return (
    <div className='bg-gray-300 text-center min-h-screen p-20 pt-10'>
      <h1 className='text-3xl mb-7'> Login </h1>
      <form onSubmit={handleSubmit(submit)}>
        {error!==null && <p className='text-center text-2xl text-red-500 mb-4'>{error}</p>}
        {/* <p className='inline m-3'>Select Role</p>
        <input type="radio" {...register("role",{required:true})} value="user" /><label className='m-2'>User</label>
        <input type="radio" {...register("role",{required:true})} value="author" /><label className='m-2'>Author</label>
        <input type="radio" {...register("role",{required:true})} value="admin" /><label className='m-2'>Admin</label><br />
        {errors.role?.type === 'required' && <p className='text-red-400'>Please select a role</p>} */}
        
        <input type="text" {...register("email",{required:true})} placeholder='Email' className='border p-1 m-2'/><br />
        {errors.email?.type === 'required' && <p className='text-red-400'>Email is required</p>}

        <input type="password" {...register("password",{required:true})} placeholder='Password' className='border p-1 m-2'/><br />
        {errors.password?.type === 'required' && <p className='text-red-400'>Password is required</p>}
        <button type="submit" className='bg-blue-400 p-2 mt-2 rounded'>Login</button>
      </form>
    </div>
  )
}

export default Login