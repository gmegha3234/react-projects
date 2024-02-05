/* eslint-disable react/prop-types */
import React from 'react'
import { useAuth } from './Auth';
import { Navigate } from 'react-router-dom';
export default function RequireAuth({children}) {
    const auth=useAuth();
    if(!auth.user){
        return <Navigate to="/login"></Navigate>
    }
  return children
  
}
