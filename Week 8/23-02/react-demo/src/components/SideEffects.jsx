import React, { useEffect, useState } from 'react'

function SideEffects() {
    let [users, setUsers] = useState([]);

    console.log("The Component is Rendering...");

    useEffect(() => {
        async function getData() {
            try
            {
            let res = await fetch("https://jsonplaceholder.typicode.com/user")
            let userData = await res.json();
            setUsers(userData)
            }
            catch(err)  
            {
                console.log(err.message)
            }
        }
        getData()
        },[]);


  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {users.map((val,index)=><tr key = {index}><td>{val.id}</td><td>{val.name}</td><td>{val.username}</td></tr>)}
            </tbody>
        </table>
    </div>
  );
}

export default SideEffects

