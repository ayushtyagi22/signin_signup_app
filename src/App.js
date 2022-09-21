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
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/registered" element={<Registered />}/>
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;