import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const nav = useNavigate();

    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [age,setAge] = useState('')
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmpassword] = useState('')
    const [error,setError] = useState()
    const [passerror,setPasserror] = useState()

    const handleSignup = (e) => {
        e.preventDefault();
        setError()
        setPasserror()

        if (firstname.trim().length === 0 || lastname.trim().length === 0 || age.trim().length === 0 || email.trim().length === 0 || username.trim().length === 0 || password.trim().length === 0 || confirmpassword.trim().length === 0)
        {
            setError(1)
        }
        else if (password.trim().length > 0 && confirmpassword.trim().length > 0 && password.trim() !== confirmpassword.trim())
        {
            setPasserror(1)
        }
        else 
        {
            axios.post('https://fakestoreapi.com/users',{
                email: email,
                username: username,
                password: password,
                name: {
                    firstname: firstname,
                    lastname: lastname
                }
            })
            .then(res => {
              console.log(res.data.token)
              localStorage.setItem('token', res.data.token)
              nav("/registered")
            })
            .catch(err => {
              console.log(err.response)
            });
        }
    }

    return (
    <div className="signup-wrapper">
    <h1>Signup Page</h1>
    <form>
      <label>First Name:</label> <input type="text" onChange={(e) => setFirstname(e.target.value)} value={firstname}/><br/>
      <label>Last Name:</label> <input type="text" onChange={(e) => setLastname(e.target.value)} value={lastname}/><br/>
      <label>Age:</label> <input type="number" onChange={(e) => setAge(e.target.value)} value={age}/><br/>
      <label>Email:</label> <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/><br/>
      <label>Username:</label> <input type="text" onChange={(e) => setUsername(e.target.value)} value={username}/><br/>
      <label>Password:</label> <input type="text" onChange={(e) => setPassword(e.target.value)} value={password}/><br/>
      <label>Confirm Password:</label> <input type="password" onChange={(e) => setConfirmpassword(e.target.value)} value={confirmpassword}/><br/><br/>
      <button onClick={handleSignup}>Register</button><br/><br/>
      <h4>{error && 'Please fill all details above'}</h4>
      <h4>{passerror && 'Password and Confirm password are not same'}</h4>
    </form>
    </div>
    )
}