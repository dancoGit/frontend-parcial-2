import { Navigate } from "react-router-dom";
import { isEmailLoggedIn } from "../../service/db";

const ProtectedRoute = ({ children }) => {
  return isEmailLoggedIn() ? children : <Navigate to="/" />;
};
export default ProtectedRoute;
