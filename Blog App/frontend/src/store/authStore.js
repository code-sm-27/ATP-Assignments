import {create} from 'zustand'
import axios from 'axios'

export const useAuth = create((set)=>({
    currentUser:null,
    isAuthenticated: false,
    loading: false,
    error: null,
    login: async(userObjWithRole)=>{
        const { role, ...userObj} = userObjWithRole
        try
        {
            // Set Loading State
            set({loading:true,err:null})
            // Make API Req
            let res = await axios.post("https://atp-assignments.onrender.com/common-api/login",userObj,{withCredentials:true})
                    
            set({loading:false,error:null,isAuthenticated:true,currentUser:res.data.payload})
            
            console.log(res)
            // Update State
            
            
        }
        catch(err){
            //  Set Error
            console.log("Error is: ",err)
            const backendErrorMessage = err.response?.data?.reason || err.response?.data?.message || err.message;
            set({
                loading: false,
                isAuthenticated: false,
                currentUser: null,
                error: backendErrorMessage
            })

        }
    },
    checkAuth: async () => {
        try{
            set({loading:true,err:null})
            let res = await axios.get("https://atp-assignments.onrender.com/common-api/check-auth",{withCredentials: true})
            set({loading:false,error:null,isAuthenticated:true,currentUser:res.data.payload})
        }
        catch(err)
        {
            console.log("Error is ", err.message)
            const backendErrorMessage = err.response?.data?.reason || err.response?.data?.message || err.message;
            set({
                loading: false,
                isAuthenticated: false,
                currentUser: null,
                error: backendErrorMessage
            })
        }
        
    },
    logout: async()=>{
        try
        {
            // Set Loading State
            set({loading:true,err:null})
            // Make API Req
            let res = await axios.get("https://atp-assignments.onrender.com/common-api/logout",{withCredentials:true})
                
            // Update State
            set({loading:false,error:null,isAuthenticated:false,currentUser:null})
            
            console.log(res)
            
            
            
        }
        catch(err){
            //  Set Error
            console.log("Error is: ",err)
            const backendErrorMessage = err.response?.data?.reason || err.response?.data?.message || err.message;
            set({
                loading: false,
                isAuthenticated: false,
                currentUser: null,
                error: backendErrorMessage
            })

        }
    }
}))