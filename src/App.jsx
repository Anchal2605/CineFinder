import React from 'react'
import DashboardPage from './Pages/DashBoardPage'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import LandingPage from './Pages/LandingPage'
import Signup from './Pages/Signup'


const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/dashboard" element={<DashboardPage />} />
 </Routes> 

 

      
    </div>
  )
}

export default App
