import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoute2 = () => {
    const auth = localStorage.getItem("loggedin")
  return (
    <>
    {
        auth?<Navigate to={"/"}/>:<Outlet/>
    }
    </>
  )
}

export default ProtectedRoute2