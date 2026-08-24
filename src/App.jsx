import Home from "./pages/Home";
import React from 'react'
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import { Routes , Route} from "react-router-dom";
import Signup from "./Pages/Signup";




const App = () => {
  return (
    <div>
   <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/Signup" element={<Signup />}/>
     </Routes>
     
    </div>
  )
}

export default App
