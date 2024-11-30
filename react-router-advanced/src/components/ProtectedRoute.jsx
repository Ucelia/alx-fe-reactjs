import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({isAuthenticated, useAuth}) {
  return isAuthenticated ? useAuth : <Navigate to= "/profile" />
}

export default ProtectedRoute