"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function UsersDetails({ activeUserId }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();

    useEffect (() => {
        setLoading(true);
            axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`).then((res) => setUser(res.data)).finally(() => setLoading(false));
    }, [activeUserId])

  return (
    <div>
        {
            loading &&<div>Yükleniyor...</div>
        }

        <pre>
            {
               !loading && JSON.stringify(user, null, 2)
            }
        </pre>
    </div>
  )
}
