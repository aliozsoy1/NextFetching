"use client"
import axios from 'axios'
import React, { useEffect, useState }   from 'react'

export default function Users({ setActiveUserId }) {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users").then((res) => setUsers(res.data)).finally(() => setLoading(false));
    },[])
    

  return (
    <div>
        {loading && <div>Yükleniyor...</div>}
           
        <ul>
            {
                users.map((user) => (

                    <li key={user.id} onClick={() => setActiveUserId(user.id)}>{user.name}</li>
                ))
            }
        </ul>


    </div>
  )
}
