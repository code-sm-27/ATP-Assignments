import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router'

function Register() {
  const {register,handleSubmit,formState:{errors}} = useForm()
  let [loading,setLoading] =useState(false)
  let [error,setError] = useState(null)
  let navigate = useNavigate()
  const onRegister = async(obj)=>{
    setLoading(true)

    obj.role = obj.role.toUpperCase();
    delete obj.profileImageUrl

    let apiUrl = ""
    if(obj.role === "USER")
    {
      apiUrl = "http://localhost:4000/user-api/users"
    }
    else if (obj.role === "AUTHOR"){
      apiUrl = "http://localhost:4000/author-api/users"
    }

    try{
      let res = await fetch(apiUrl,{
        method:"POST",
        headers:{ 
          "Content-Type": "application/json"
        }
      ,
      body: JSON.stringify(obj)
      })
    if(res.status===201)
    {
      navigate('/')
    }
    else
    {
      console.log(res)
      throw new Error("Failed to Fetch")
    }
  }
    catch(err)
    {
      setError(err)
    }
    finally
    {
      setLoading(false)
    }
  }
  if(loading===true)
    {
      return <p className='text-center text-2xl text-blue-300 '>Loading...</p>
    }
    if(error!==null)
    {
      return <p className='text-center text-2xl text-red-500'>{error.message}</p>
    }
    

  return (
    <div className='bg-gray-300 text-center min-h-screen p-20'>
      <form onSubmit={handleSubmit(onRegister)}>
        <p className='inline m-3'>Select Role</p>
        <input type="radio" {...register("role",{required:true})} value="user" /><label className='m-2'>User</label>
        <input type="radio" {...register("role",{required:true})} value="author" /><label className='m-2'>Author</label><br />
        {errors.role?.type === 'required' && <p className='text-red-400'>Please select a role</p>}

        <input type="text" {...register("firstName",{required:true})} placeholder='First Name' className='border p-1 m-2'/><br />
        {errors.firstName?.type === 'required' && <p className='text-red-400'>First Name is required</p>}

        <input type="text" {...register("lastName")} placeholder='Last Name' className='border p-1 m-2'/><br />
        <input type="text" {...register("email",{required:true,unique:true})} placeholder='Email' className='border p-1 m-2'/><br />
        {errors.email?.type === 'required' && <p className='text-red-400'>Email is required</p>}
        {errors.email?.type === 'unique' && <p className='text-red-400'>Email already exists</p>}
        <input type="password" {...register("password",{required:true})} placeholder='Password' className='border p-1 m-2 mb-3'/><br />
        {errors.password?.type === 'required' && <p className='text-red-400 mb-4'>Password is required</p>}
        <label htmlFor="profile-upload" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ">
            Upload Profile Pic</label>
        <input type="file" {...register("profileImageUrl")} id="profile-upload" className="hidden" /><br />
        <button type="submit" className='bg-blue-400 p-2 rounded mt-5'>Register</button>
      </form>
    </div>
  )
}

export default Register