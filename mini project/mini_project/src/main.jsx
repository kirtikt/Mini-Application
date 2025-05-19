import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import { AuthProvider } from './Component/AuthContext.jsx'
import { CartProvider } from './Component/CartContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <>
  <BrowserRouter>
  <AuthProvider>
        <CartProvider>
      <App />
    </CartProvider>
      </AuthProvider>
  </BrowserRouter>
   
  </>
   
  </StrictMode>,
)
