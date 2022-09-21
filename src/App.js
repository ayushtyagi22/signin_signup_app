import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Home from './Home'
import Signup from './Signup'
import Registered from './Registered'

function App() {
  return(
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/signin_signup_app/" element={<Login />}/>
          <Route path="/signin_signup_app/login" element={<Login />}/>
          <Route path="/signin_signup_app/home" element={<Home />}/>
          <Route path="/signin_signup_app/signup" element={<Signup />}/>
          <Route path="/signin_signup_app/registered" element={<Registered />}/>
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;