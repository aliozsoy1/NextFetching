"use client"
import React, { useState } from 'react';
import './globals.css'
import Users from './Users';
import UsersDetails from './UsersDetails';

export default function page() {

    const [activeUserId, setActiveUserId] = useState(null);

  return (
    <div className='divbody'>
        <div>
            <h2>Kullanıcılarrrrrr</h2>
            <Users setActiveUserId={setActiveUserId}/>
        </div>
        <div>
            <h2>Kullanıcı Detayı</h2>
            {
                activeUserId && (
                    <UsersDetails activeUserId={activeUserId}/>
                )
            }
        </div>
    </div>
  )
}
