import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Component/Login'
import Cart from './Component/Cart'
import Checkout from './Component/Checkout'
import Dashboard from './Component/Dashboard'
import Display from './Component/Display'
import { useAuth } from './Component/AuthContext'
import Header from './Component/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ProtectedRoutes from './Component/ProtectedRoute'
import ContactUs from './Component/ContactUs'
import AboutUs from './Component/AboutUs'
import Footer from './Component/Footer'

function App() {
 const { isLoggedIn } = useAuth();


  return (
    <>
    <Header />

    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
     
        <Route
        path="/dashboard"
        element={
          <ProtectedRoutes isLoggedIn={isLoggedIn}>
            <Dashboard />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/products/view/:productId"
        element={
          <ProtectedRoutes isLoggedIn={isLoggedIn}>
            <Display />
          </ProtectedRoutes>
        }
      />
       <Route
        path="/checkout"
        element={
          <ProtectedRoutes isLoggedIn={isLoggedIn}>
            <Checkout />
          </ProtectedRoutes>
        }
      />
       <Route
        path="/cart"
        element={
          <ProtectedRoutes isLoggedIn={isLoggedIn}>
            <Cart />
          </ProtectedRoutes>
        }
      />
     
    
      
      
    </Routes>
    <Footer />
    
    </>
  )
}

export default App
