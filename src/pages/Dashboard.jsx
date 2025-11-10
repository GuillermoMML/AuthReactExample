import { useAuth } from "../hook/auth/AuthContext";

import { Link } from "react-router-dom";

//Esta será nuestra página protegida

export default function Dashboard() {
  const { user, logout } = useAuth();
  return (
    <div style={{ padding: 24 }}>
      <h1>Dashboard (protegido)</h1>
      <p>Hola, <b>{user?.name}</b>.</p>
      <nav style={{ display: "flex", gap: 12, margin: "12px 0" }}>
        <Link to="/app">Inicio</Link>
        <Link to="/app/todo">To-Do</Link>
      </nav>
      <button onClick={logout}>Cerrar sesión</button>
      <p style={{ marginTop: 12 }}>Contenido sensible de tu app…</p>
    </div>
  );
}
