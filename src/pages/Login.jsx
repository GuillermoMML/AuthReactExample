import { useState } from "react";
import { useLocation, useNavigate , Navigate} from "react-router-dom";
import { useAuth } from "../hook/auth/AuthContext";

export default function Login() {
  const { user, login } = useAuth();
  
  // Si ya hay sesión, redirige a /app
  if (user) return <Navigate to="/app"/>; //replace 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await login(username, password); // <— esto setea user en el contexto
    } catch (err) {
      setError(err.message || "No se pudo iniciar sesión");
    }
  }

  return (
    <div style={{ padding: 24, maxWidth: 400 }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <input
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Entrar</button>
        {error && <p style={{ color: "crimson" }}>{error}</p>}
      </form>
      <p style={{ marginTop: 12, color: "#666" }}>
        Pista: escribe cualquier usuario/clave para entrar (auth simulada).
      </p>
    </div>
  );
}
