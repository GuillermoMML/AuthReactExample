import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider, AuthProviderCookie } from './hook/auth/AuthContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthProvider> */}
      <AuthProviderCookie>
        <App />
      </AuthProviderCookie>
   
    {/* </AuthProvider>  */} 
  </StrictMode>,
)
