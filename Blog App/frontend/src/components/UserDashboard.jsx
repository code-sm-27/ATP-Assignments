import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router'
import { useAuth } from '../store/authStore'
import {toast} from  'react-hot-toast'
import axios from 'axios'
import { articleBody, articleCardClass, articleExcerpt, articleGrid, articleTitle, ghostBtn, pageTitleClass, primaryBtn, submitBtn } from '../styles/common'


function UserDashboard() {
  const navigate = useNavigate()
  const state = useAuth(state=>state.currentUser)
  const logout = useAuth(state =>state.logout)
  let [loading,setLoading] = useState(false)
  let [error,setError] = useState(null)
  let [articles,setArticles] = useState([])
  console.log(state)
  const onLogout = async()=>{
    await logout()
    toast.success("Logged Out Successfully")
    navigate('/login')
  }
  useEffect(()=>{
    const getArticles = async()=>{

    try{
      setLoading(true)
      let res = await axios.get("http://localhost:4000/user-api/articles",{withCredentials:true})
      setArticles(res.data.payload)
    }
    catch(err)
    {
      setError(err)
    }
    finally{
      setLoading(false)
    }
  }
  getArticles()
  },[])
  const getArticle = (articleObj)=>{
    navigate('/article',{state:articleObj})
  }
  return (
      <div>
        <div className='text-end'>
          <p className='text-2xl'>Welcome, {state.firstName}</p>
          <img src={state.profileImageUrl} alt="No Profile Pic" className='rounded-4xl w-25 h-25 ms-auto'/>
          <button type="submit" onClick={onLogout} className={`${primaryBtn} m-2`}>Logout</button>
        </div>
        
        <div className={articleGrid}>
        {articles.map((articleObj)=><div key ={articleObj._id} className={articleCardClass}>
          <p className={articleTitle}>Title:- {articleObj.title}</p>
          <p className={articleExcerpt}>{articleObj.content.slice(0,20)}...</p>
          <button className={`${ghostBtn} mt-auto pt-4`} onClick={() => getArticle(articleObj)}>
                Read Article →
          </button>
        </div>)}
      </div>
      </div>
    
  
  )
}

export default UserDashboard