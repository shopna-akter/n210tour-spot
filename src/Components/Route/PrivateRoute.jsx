import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    if (!user) {
        return <Navigate to="/Login" state={{ from: location.pathname }} />;
    }
    return children;
};

export default PrivateRoute;
