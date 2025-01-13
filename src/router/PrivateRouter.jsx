import React from 'react'
import useAuth from '../Hook/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../components/Loading'

function PrivateRouter({children}) {
  const {user,loading} = useAuth()
  const location = useLocation()
  if(loading) return <Loading />
  if(user && user?.email){
    return children
  }
  return <Navigate to={`/login`}  state={{from : location}} replace></Navigate>
}

export default PrivateRouter