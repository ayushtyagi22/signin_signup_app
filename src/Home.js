import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Home() {
    const [logout,setLogout] = useState(0);

    const nav = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        setLogout(1)
    }

    useEffect(() => {
            if (!localStorage.getItem('token')) {
                nav('/signin_signup_app/login')
            }
    },[logout])

    return (
        <div className="home-wrapper">
            <h1>Welcome</h1>
            <h2>You've been successfully logged in</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}