import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const {path} = useLocation();
  const {isAuth} = useContext(AuthContext)
  if (isAuth)return children;
  return <Navigate to='/login' state={{from: path}} replace></Navigate>
};

export default RequiredAuth;


