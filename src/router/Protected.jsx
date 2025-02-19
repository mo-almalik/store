import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate, useLocation } from 'react-router-dom'
import NotFound from '../components/NotFound'
import Loading from '../components/Loading';

function Protected({allowedRoles,children}) {
    const { isAuthenticated, role ,isInitialized,isLoading} = useAuth();
  
    if (isLoading) {
      return  <Loading />
    }
   
  
  
    if (!isAuthenticated && isInitialized) {
      return <Navigate to="/login" />;
   }
  
   
    if (!isAuthenticated || (allowedRoles?.length && !allowedRoles.includes(role))) {
      return <NotFound />;
    }
  
    return children;

}

export default Protected