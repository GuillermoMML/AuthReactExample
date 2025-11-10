# 🚀 React + Vite + React Router + Context API

Este proyecto es una base sencilla para manejar **autenticación y rutas protegidas** en una app React creada con **Vite**.

---

## 🧩 Pasos realizados

1. **Inicializar el proyecto**
   - Crear el proyecto con Vite.
   - Instalar React Router:
     ```bash
     npm install react-router-dom
     ```

2. **Crear el contexto de autenticación (`AuthContext`)**
   - Gestiona el estado del usuario, el inicio y cierre de sesión.
   - Persiste la sesión con `localStorage`.
   - Ejemplo del objeto que se expone:
     ```js
     const value = { user, loading, login, logout };
     ```

3. **Crear un componente de rutas protegidas**
   - `<ProtectedRoute />` verifica si existe un usuario autenticado.
   - Si no lo hay, redirige automáticamente a `/login`.

4. **Definir las páginas básicas**
   - **Home:** pública  
   - **Login:** pública  
   - **Dashboard:** protegida  

5. **Configurar el enrutador**
   - Rutas públicas: `/` y `/login`
   - Rutas protegidas: todo lo que cuelga de `/app`

6. **Envolver la aplicación con el proveedor de autenticación**
   - En `main.jsx`, envolver `<App />` con `<AuthProvider>` para que el contexto esté disponible en toda la app.

7. **Probar el flujo**
   - Ir a `/app` sin sesión ⇒ redirige a `/login`
   - Iniciar sesión con cualquier usuario ⇒ redirige a `/app`
   - Desde el dashboard, hacer clic en “Cerrar sesión” ⇒ elimina el "token" y bloquea el acceso a `/app`

---

## 🧠 Caso real

En un entorno real, deberías:

1. **Reemplazar** la función `login(username, password)` por una **llamada a tu API** que devuelva un token y los datos del usuario.  
2. **Guardar solo la información necesaria** en `localStorage` (por ejemplo, el token o el rol del usuario).  
3. **Gestionar roles** de usuario, por ejemplo:
   ```js
   { role: "admin" | "user" }
