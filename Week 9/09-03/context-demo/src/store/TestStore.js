import {create} from 'zustand'

// Create Store
export const useTest = create((set)=>({
    // State
    x:10,
    y:20,
    user:{
        name: "Sm",
        age:20
    },
    // Functions to modify the state
    incrementX:()=>set(state=>({x:state.x+1})),
    decrementX:()=>set(state=>({x:state.x-1})),
    incrementY:()=>set(state=>({y:state.y+1})),
    decrementY:()=>set(state=>({y:state.y-1})),
    incrementXByValue: (val)=>set((state)=>({x:state.x+val})),
    updateUser: (newName)=>set(state=>({user: {
        ...state.user,name: newName
    }}))
}))