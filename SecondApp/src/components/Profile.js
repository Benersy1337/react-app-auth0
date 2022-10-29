import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../App.css'


const Profile = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
      <div className='app'>
        Second Aplication
      </div>
    )
  )
}

export default Profile
