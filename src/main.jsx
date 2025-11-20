import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider, AuthProvierCookie } from './hook/auth/AuthContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthProvider> */}
    <AuthProvierCookie>
        <App />
    </AuthProvierCookie>
    {/* </AuthProvider>  */} 
  </StrictMode>,
)
