import {useForm} from 'react-hook-form'
function FormDemo()
{

    const {register,handleSubmit,formState:{errors}}=useForm()


    const submit=(obj)=>{
        console.log(obj)
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <input type="text" {...register("username",{required:true,minLength:3})} placeholder='User Name' className='m-2 border'/>
                    
                    {errors.username?.type === 'required' && <p className='text-red-400'>Username is required</p>}
                    {errors.username?.type === 'minLength' && <p className='text-red-400'>Minimum Length should be greater than 3</p>}

                </div>
                <div className='mb-2'>
                    <input type="password" {...register("password",{required:true,minLength:6})} placeholder='Password' className='m-2 border' />
                    {errors.password?.type === 'required' && <p className='text-red-400'>Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-400'>Minimum Length should be greater than 6</p>}
                </div>
                <button type="submit" className='bg-blue-500 p-2 rounded'>Login</button>
            </form>
            {/* <div>
                <p>Entered Username is:- {username}</p>
                <p>Entered Password is:- {password}</p>
            </div> */}
        </div>
    )

}

export default FormDemo