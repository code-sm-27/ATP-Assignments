import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { api } from '../api/axiosConfig'
function UsersList() {
    let [users,setUsers] = useState([])
    let [loading,setLoading] = useState(false)
    let [error,setError] = useState(null)
    
    let navigate = useNavigate()

    const goToUser = (userObj)=>{
        navigate('/user',{state:{user:{userObj}}})

    }

    useEffect(()=>{
        setLoading(true)
        async function getUsers() {
            try{
                
            let res = api.get("/user-api.users")
        
        if(res.status === 200)
            {
                let data = await res.json()
                setUsers(data.payload)   
            }
        else{
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
    getUsers()
    },[])
    if(loading===true)
    {
      return <p className='text-center text-2xl text-blue-300 '>Loading...</p>
    }
    if(error!==null)
    {
      return <p className='text-center text-2xl text-red-500'>{error.message}</p>
    }
  return (
    <div>
        <h1 className='text-3xl'> List of Users</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10 text-center'>
        {users.map((userObj)=><div onClick= {()=>goToUser(userObj)} key ={userObj._id} className='shadow-md p-10 rounded-2xl'>
          <p>{userObj.name}</p>
          <p>{userObj.email}</p>
        </div>)}
      </div>

    </div>
  )
}

export default UsersList