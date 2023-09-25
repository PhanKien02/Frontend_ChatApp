import React from "react";
import { useSelector } from "react-redux";
import { Navigate ,useLocation} from "react-router-dom";
function RequireAuth({ children }) {
    let location = useLocation();
    let isAuth = useSelector(state => state.authentication.isAuth);
    if (!isAuth) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }
    return children;
}
export default RequireAuth;
