import {create} from 'zustand'
import { api } from '../api/axiosConfig';

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
            let res = await api.post("/common-api/login",userObj);
                    
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
            let res = await api.get("/common-api/check-auth");
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
            let res = await api.get("/common-api/logout");
                
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