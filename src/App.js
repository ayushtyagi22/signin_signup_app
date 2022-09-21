import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Home from './Home'
import Signup from './Signup'
import Registered from './Registered'

function App() {
  return(
      <div>
        <HashRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/registered" element={<Registered />}/>
        </Routes>
        </HashRouter>
      </div>
  )
}

export default App;