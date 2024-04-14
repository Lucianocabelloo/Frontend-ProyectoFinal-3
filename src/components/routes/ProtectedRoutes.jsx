import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem("usuarioHotel")) || null;

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  } else {
    if (user.rol === "Administrador") {
      return children;
    }
  }
};

export default ProtectedRoutes;
