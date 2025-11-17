// src/App.jsx
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";


/*
Pasos realizados

1: Preparar el proyecto y instalar react-router-dom
2: Creame nuestro context con el usuario,login,logout y localStorage const value = { user, loading, login, logout };
3: Creamos nuestro componente de ruta protegidas <ProtectedRoute/>
4: Haremos 3 páginas muy simples: Home (pública), Login (pública), Dashboard (protegida).
5: Configuramos el router: públicas (/, /login) y protegidas (todo lo que cuelga de /app).
6: Envolver la app con el AuthProvider, en mi caso en main.jsx
7: Probamos el flujo: Ir a /app sin sesión ⇒ debe mandar a /login. Ponemos cualquier usuario y te lleva a app, y desde dasboard el botón cerrar sesión nos perderá el acceso a app y nos elimina nuestro "fake token"


CASO REAL

Sustituye login(username, password) por una llamada a tu API que devuelva token/perfil.
Guarda solo lo necesario; 
Añade roles: { role: "admin" | "user" } y un RoleRoute que compruebe user.role.

*/
function PublicLayout() {
  return (
    <div>
      <nav style={{ display: "flex", gap: 12, padding: 12, borderBottom: "1px solid #eee" }}>
        <Link to="/">Home</Link>
        <Link to="/app">App (protegida)</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default function App() {


  //Si queremos decodificar las cookies
/*   useEffect(() =>{
    console.log(decodeURIComponent(document.cookie))
  },[]) */

  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>

          {/* Públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Protegidas 
          
              //Idea clave: ProtectedRoute se usa como “envoltorio” de todas las rutas que quieras proteger.

          */}
          <Route element={<ProtectedRoute />}>
            <Route path="/app" element={<Dashboard />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<div style={{ padding: 24 }}>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
