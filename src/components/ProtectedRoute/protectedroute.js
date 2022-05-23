import { Navigate } from "react-router-dom";
import { useAuth } from "../../services/auth";
const ProtectedRoutes = ({ children }) => {
    const auth = useAuth();
    if (!auth?.user) {
        return <Navigate to="/" />;
    }
    return <>{children}</>   
};

export default ProtectedRoutes;