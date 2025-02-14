import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate, useLocation } from 'react-router-dom'
import NotFound from '../components/NotFound'

function Protected({allowed,children}) {
    const { isAuthenticated, role } = useAuth();
    const location = useLocation();
  


  
    if (!isAuthenticated ) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    if (allowed?.length && !allowed.includes(role)) {
      return <NotFound />;
    }
  
    return children;

}

export default Protected