import { useState } from "react"
import { useForm } from "react-hook-form"

function FormAssignment()
{

    const {register,handleSubmit,setError,formState:{errors}} = useForm()

    let [users,setUsers] = useState([{firstName:"S",lastName:"m",email:"test@email.com",dob:"2002-02-25"}])
    
    const submit = (obj)=>
    {
        // Custom Error
        setError('dob',{
                type:"invalidDate",
                message:"The Date should be lesser than 2026"
            })
        if(new Date(obj.dateOfBirth) > new Date())
        {
            // console.log(errors.dob.message)
        }

        // Update Users
        setUsers([...users,obj])
        
    }


    return(
        <div className="">
            <div className="bg-pink-400 p-2">
                <h1 className="text-3xl mb-2">User Registration Form</h1>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" {...register("firstName",{required:true,minLength:4,maxLength:6})} placeholder="Enter First Name" className="border m-2 bg-gray-500 p-2"/> <br />
                    
                    { errors.firstName?.type === 'required' && <p className="text-amber-50">First Name is Required</p>}
                    { errors.firstName?.type === 'minLength' && <p className="text-amber-50">Minimum Length is 4 for First Name</p>}
                    { errors.firstName?.type === 'maxLength' && <p className="text-amber-50">Maximum Length is 6 for First Name</p>}
                    
                    <input type="text" {...register("lastName",{required:true,minLength:4,maxLength:6})} placeholder="Enter Last Name"  className="border m-2 bg-gray-500 p-2"/> <br />
                    
                    { errors.lastName?.type === 'required' && <p className="text-amber-50">Last Name is Required</p>}
                    { errors.lastName?.type === 'minLength' && <p className="text-amber-50">Minimum Length is 4 for Last Name</p>}
                    { errors.lastName?.type === 'maxLength' && <p className="text-amber-50">Maximum Length is 6 for Last Name</p>}
                    
                    <input type="email" {...register("email",{required:true})} placeholder="Enter Email" className="border m-2 bg-gray-500 p-2"/> <br />
                    
                    { errors.email?.type === 'required' && <p className="text-amber-50">Email is Required</p>}
                    
                    <input type="date" {...register("dateOfBirth",{required:true, invalidDate:true})} placeholder="Enter Date Of Birth" className="border m-2 bg-gray-500 p-2"/> <br />
                    
                    { errors.dateOfBirth?.type === 'required' && <p className="text-amber-50">Date is Required</p>}
                    { errors.dateOfBirth?.type === 'invalidDate' && <p className="text-amber-50">{errors.dob.message}</p>}
                    
                    <button type="submit" className="bg-amber-300 p-2 rounded m-2">Login</button>
                </form>
            </div>
            <div className="bg-pink-400 mt-4 p-2"> 
                <h1 className="text-3xl mb-2">List of Users</h1>
                
                <table className="border-collapse border border-gray-900 w-full">
                    <thead>
                        <tr className="border border-gray-900">
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((val,index)=><tr key = {index} className="border border-gray-900">{Object.entries(val).map(([key,val])=><td key = {key}>{val}</td>)}</tr>)}
                    </tbody>
                    
                </table>
            </div>
        </div>
        

    )
}

export default FormAssignment