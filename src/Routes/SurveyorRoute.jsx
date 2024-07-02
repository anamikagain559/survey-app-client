import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const SurveyorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [role, roleLoading] = useRole();
    const location = useLocation();

    if (loading || roleLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && role=== "surveyor") {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
}

export default SurveyorRoute