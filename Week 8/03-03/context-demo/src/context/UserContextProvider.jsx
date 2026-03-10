import { useState } from 'react'
import { UserContext } from './UserContext.js'

function UserContextProvider({children}) {
    let [user,setUser] = useState({name:"ravi",age:20,email:"ravi@mail.com"})

    const updateUser=() => {
        let res = {name:"ravi",age:21,email:"ravi@mail.com"}
        setUser(res)
    }

  return (
    <UserContext.Provider value={{user,updateUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider