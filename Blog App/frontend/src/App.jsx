import React from 'react'
import RootLayout from './components/RootLayout'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import UserDashboard from './components/UserDashboard'
import AuthorDashboard from './components/AuthorDashboard'
import AdminDashboard from './components/AdminDashboard'
import { Toaster } from 'react-hot-toast'
import Articles from './components/Article'

function App() {
  const routerObj = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[{
        path:"",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
    },
    {
      path: '/userdashboard',
      element: <UserDashboard/>
    },
    {
      path: '/authordashboard',
      element: <AuthorDashboard />
    },
    {
      path: '/admindashboard',
      element: <AdminDashboard/>
    },
    {
      path:'/article',
      element:<Articles/>
    }
  ])
  return (
    <div>
      <Toaster position='top-center' reverseOrder={false}/>
      <RouterProvider router = {routerObj}/>
    </div>
  )
}

export default App