import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const login = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <>
            <form>
                <h1>Login</h1>
                <input type="text"
                    name="username"
                    value={username}
                    onChange={handleUsername}
                    placeholder="bapakau kimak" />
            </form>
            <button onClick={login}> LOGIN </button>
        </>
    )

}

export default Login;