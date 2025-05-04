import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoadinPan from "../../components/shared/LoadinPan";

const PrivateRoute = ({ children }) => {
  const { user,loading } = useAuth();
  const location = useLocation();
  if(loading){
    return <LoadinPan/>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
