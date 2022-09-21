import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registered() {
    const nav = useNavigate()
    
    const [count,setCount] = useState(10)

    useEffect(() => {
        let interval = setInterval(function() {
            setCount(count - 1)

            if (count === 1) {
                clearInterval(interval);
                nav('/signin_signup_app/login')
            }
        },1000);
    })

    return (
        <div className="registered-wrapper">
        <h1>Registration Successfull</h1>
        <h4>Redirecting in {count} seconds...</h4>
        </div>
    )
}