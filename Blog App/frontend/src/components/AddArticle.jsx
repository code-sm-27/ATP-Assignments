import {React, useState} from 'react'
import { useForm } from 'react-hook-form'
import { formCard, formGroup, inputClass, labelClass, pageBackground, primaryBtn, submitBtn } from '../styles/common'
import { api } from '../api/axiosConfig'
import { useAuth } from '../store/authStore'
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

function AddArticle() {
    const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors},reset} = useForm()
    const [loading,setLoading] = useState()
    const currentUser=useAuth(state=>state.currentUser)

    const submit = async (articleObj) =>{
    setLoading(true);
    articleObj.author=currentUser._id;
    try {
      await api.post('author-api/articles',articleObj);

      toast.success("Article published successfully!");

      reset();

      navigate("/authordashboard/articles");

    } catch (err) {
      console.log(err)
      toast.error(err.response?.data?.error || "Failed to publish article");
    } finally {
      setLoading(false);
    }
    }
  return (
    <div className={pageBackground}>
      <form onSubmit={handleSubmit(submit)} className={formCard}>
        <div className={formGroup}>
        <label className={labelClass}>Title</label>
        <input type="text" {...register("title",{required:true})} placeholder='Title' className={inputClass}/><br />
        {errors.title?.type === 'required' && <p className='text-red-400'>Title is required</p>}
        </div>
        <div className={formGroup}>
        <label className={labelClass}>Category</label>
        <select {...register("category",{required:true})} id="category" className='m-2 p-1 border'>
            <option value="">Select Category</option>
            <option value="Science">Science</option>
            <option value="Programming">Programming</option>
            <option value="Maths">Maths</option>
            <option value="others">Others</option>
        </select><br />
        {errors.category?.type === 'required' && <p className='text-red-400'>Category is required</p>}
        </div>
        
        <div className={formGroup}>
          <label className={labelClass}>Content</label>

          <textarea
            rows="8"
            className={inputClass}
            placeholder="Write your article content..."
            {...register("content", {
              required: "Content is required",
              minLength: {
                value: 50,
                message: "Content must be at least 50 characters",
              },
            })}
          />
          {errors.content?.type === 'required' && <p className='text-red-400'>Content is required</p>}
          </div>
        
        <button type="submit" className={submitBtn}>Publish Article</button>
      </form>
    </div>
  )
}

export default AddArticle