import React from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute=({children})=>{
    
    /* const isAuth= useSelector((data)=>{
        return data.authReducer.isAuth;
    }) */
    const isAuth = localStorage.getItem("user");
    return isAuth ? children :
    (
      
     <Navigate to="/login"/>
    )
}
export default PrivateRoute