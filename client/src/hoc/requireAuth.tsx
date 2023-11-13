import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";

export default function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useContext(AuthContext);
    let location = useLocation();

    if (auth.user == "") {
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }

    return children;
}
