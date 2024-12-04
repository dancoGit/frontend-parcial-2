import { Navigate } from "react-router-dom";
import { useApi } from "../../context/RickAndMortyApiContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useApi();

  return isLoggedIn ? children : <Navigate to="/" />;
};
export default ProtectedRoute;
