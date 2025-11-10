import { createContext, useContext, useEffect, useState } from "react";

// 1) Creamos el contexto
const AuthContext = createContext(null);

// 2) Hook de conveniencia
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
}

/**
 * AuthProvider
 * - Mantiene el estado de la sesión { user: {...} | null }
 * - Expone login() y logout()
 * - Persiste en localStorage para recordar sesión al recargar
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);         // null = no autenticado
  const [loading, setLoading] = useState(true);   // para el "arranque"

  // Cargar sesión guardada al montar
  useEffect(() => {
    const raw = localStorage.getItem("auth:user");
    if (raw) {
      try { setUser(JSON.parse(raw)); } catch {}
    }
    setLoading(false);
  }, []);

  // Guardar cuando cambie
  useEffect(() => {
    if (user) localStorage.setItem("auth:user", JSON.stringify(user));
    else localStorage.removeItem("auth:user");
  }, [user]);

  // Simulación de login (valida si hay algo escrito)
  async function login(username, password) {
    // En real: llamar a API, recibir token/perfil…
    if (!username || !password) {
      throw new Error("Credenciales inválidas");
    }
    // Usuario “fake”:
    const fakeUser = { id: 1, name: username, role: "user" };
    setUser(fakeUser);
    return fakeUser;
  }

  function logout() {
    // null==> usuario no logeado
    setUser(null);
  }

  const value = { user, loading, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
