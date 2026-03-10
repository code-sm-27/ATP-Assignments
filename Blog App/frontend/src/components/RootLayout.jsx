import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
import AddArticle from './AddArticle'
function RootLayout() {
  return (
    <div>
        <Header/>
        <div className='m-10 min-h-screen'>
            <Outlet />
            {/* <Login/> */}
            {/* <Register/> */}
            {/* <AddArticle/> */}
        </div>
        <Footer/>
    </div>
    
  )
}

export default RootLayout