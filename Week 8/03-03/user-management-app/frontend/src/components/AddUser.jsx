import {useState} from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router'

function AddUser() {
  const {register,handleSubmit, formState:{errors}}=useForm()

  let [loading,setLoading] = useState(false)
  let [error,setError] = useState(null)

  let navigate = useNavigate()
  const onUserCreate = async(obj)=>{
    
    setLoading(true)
    try{
      let res = await fetch("http://localhost:4000/user-api/users",{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj),
      
    })
    if(res.status===201)
    {
      navigate('/userslist')
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
    <div className='text-center'>
      <h1 className=''>Adding an User</h1>
      <form onSubmit={handleSubmit(onUserCreate)}>
        <input type="text" {...register("name")} className='border m-2'placeholder='Enter your Name'/><br />
        <input type="text" {...register("email")} className='border m-2' placeholder='Enter your Email'/><br />
        <input type="date" {...register("dateOfBirth")} className='border m-2'/><br />
        <input type="text" {...register("mobile")} className='border m-2'placeholder='Enter Your Number'/><br />
        <button type="submit" className='rounded bg-blue-400 p-2'>Add</button>
      </form>
    </div>
  )
}

export default AddUser