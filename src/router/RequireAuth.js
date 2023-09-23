import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function RequireAuth() {
    const [isAuth, setisAuth] = useState(false);
    let auth = useSelector(state => state.authentication.isAuth);
    useEffect(() => {  
        setisAuth(auth);
    },[auth]);
    if (!isAuth) {
        return <Navigate to="/auth/login" replace />;
    } else {
        return <Navigate to="/" replace />;
    }
}
export default RequireAuth;
