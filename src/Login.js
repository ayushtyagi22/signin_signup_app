import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login() {
    
  const nav = useNavigate();
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSignup = (e) => {
    e.preventDefault();
    nav("/signup")
  }

  const handleApi = (e) => {
    e.preventDefault();

    axios.post('https://fakestoreapi.com/auth/login',{
        username: username,
        password: password,
    })
    .then(res => {
      console.log(res.data.token)
      localStorage.setItem('token', res.data.token)
      nav("/home")
    })
    .catch(err => {
      console.log(err.response)
    });
  };
  

  return(
    <div className="login-wrapper">
    <h1>Login Page</h1>
    <form>
      <label>
        <p>Username</p>
        <input type="text" onChange={handleUsername} value={username}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={handlePassword} value={password}/>
      </label>
      <div>
        <button type="submit" onClick={handleApi}>Login</button>
      </div>
      <label>
        <p>Not Registered yet? &nbsp;&nbsp;&nbsp; <button type="submit" onClick={handleSignup}>Sign up</button>
        </p>
      </label>
    </form>
    </div>
  )
}