import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProfilePage from './pages/Profile'
import ProtectedRoute from './components/auth/ProtectRouter'
import AnimePage from './components/animePage/AnimePage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={
            <ProtectedRoute redirectTo="/" >
              <Login />
            </ProtectedRoute>} />
            <Route path='/register' element={
            <ProtectedRoute redirectTo="/" >
              <Register />
            </ProtectedRoute>} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/animes' element={<AnimePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App


