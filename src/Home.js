import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    const [auth, setAuth] = useState(false);
    if(auth){
        return navigate('/dashboard')
    }
    return (
        <div>
            <center>
                <h2>Welcome to Home page</h2>
                <button onClick={() => setAuth(true)}>Login</button>
            </center>
        </div>
    )
}

export default Home