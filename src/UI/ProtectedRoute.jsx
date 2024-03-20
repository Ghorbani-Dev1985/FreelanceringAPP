import React, { useEffect } from 'react'
import useAuthorize from '../Features/Authentication/useAuthorize'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
  const {isAuthenticated , isAuthorized , isLoading} = useAuthorize()
  useEffect(() => {
    if(!isAuthenticated && !isLoading) navigate('/auth' , {replace: true})
    if(!isAuthorized && !isLoading) navigate('/notAccess' , {replace: true})
  }, [isAuthenticated , isAuthorized , isLoading , navigate])
if(isLoading) return (<div className='flex-center h-screen bg-gray-100'><Loading /></div>)
 if(isAuthenticated && isAuthorized) return children
}

export default ProtectedRoute