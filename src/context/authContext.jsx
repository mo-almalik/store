import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileQuery } from "../store/api/user";
import { logout, setCredentials } from "../store/api/auth/authSlice";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, role, user } = useSelector((state) => state.auth);
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false);

  const localAuth = localStorage.getItem("smart");

  const { data, isLoading, isError, error } = useGetProfileQuery(undefined, {
    skip: !hasCheckedAuth,
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (localAuth && !isAuthenticated) {
      setHasCheckedAuth(true);
    }
  }, [localAuth]);

  useEffect(() => {
    if (data) {
      const result = data?.data;
      dispatch(setCredentials({ data: result }));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (isError && error?.status === 401) {
      dispatch(logout());
      localStorage.removeItem("smart");
    }
  }, [isError, error, dispatch]);

  const value = {
    role,
    isAuthenticated,
    user,
    isLoading,
    isError,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
