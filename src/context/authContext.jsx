import { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { checkAuth, logout } from "../store/api/auth/authSlice";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const { isLoading ,isAuthenticated,role ,isInitialized ,isError,user} = useSelector((state) => state.auth);

  const localAuth = localStorage.getItem("logged_in");

const handleAuth = async ()=>{
 const res =  await dispatch(checkAuth())
 console.log(res);
 
  
}
  useEffect(() => {
    if (localAuth && !isAuthenticated) {
      handleAuth()
    }
  }, [localAuth]);



  const value = {
    role,
    isAuthenticated,
    user,
    isLoading,
    isError,
    isInitialized
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
