import React from 'react'
import useAuthorize from '../Features/Authentication/useAuthorize'

const ProtectedRoute = ({children}) => {
  const {isAuthenticated , isAuthorized , isLoading} = useAuthorize()
  return children
}

export default ProtectedRoute