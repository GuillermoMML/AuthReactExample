// src/ProtectedRoute.jsx
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./hook/auth/AuthContext";

export default function ProtectedRoute() {


//Navigate se utiliza  dentro del render de un componente, el navlink era para crear un componente navegable con el cual generamos un evento de navegación
  const { user, loading } = useAuth();
  
  if (loading) return <div style={{ padding: 24 }}>Cargando sesión…</div>;

  // Si NO hay usuario, enviamos a /login 
  if (!user) return <Navigate to="/login" replace />; //replace se utiliza para eliminar el historial, en nuestro caso no tiene sentido que el usuario pueda volver a la pagina anterior 

  // Si hay usuario, renderizamos las rutas hijas
  return <Outlet />;
}


//Idea clave: ProtectedRoute se usa como “envoltorio” de todas las rutas que quieras proteger.